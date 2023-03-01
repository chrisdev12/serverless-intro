import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";
import { Puppy } from "@lambdaLayer/model/entity/puppy";

const PUPPY_TABLE = process.env.PUPPY_TABLE;
const client = new DynamoDBClient({ region: "us-east-1" });
const dynamoDbClient = DynamoDBDocumentClient.from(client);

export const getById = async (id: string) => {
  const params = {
    TableName: PUPPY_TABLE,
    Key: {
      id,
    },
  };
  const { Item } = await dynamoDbClient.send(new GetCommand(params));
  if (!Item) throw Error("Not puppy found");

  return Item;
};

export const insert = async (puppy: Puppy) => {
  const { id, lastUpdate: date, ...puppyProperties } = puppy;
  const params = {
    TableName: PUPPY_TABLE,
    Item: {
      id,
      lastUpdate: date.toISOString(),
      ...puppyProperties,
    },
  };
  await dynamoDbClient.send(new PutCommand(params));
};

export const update = async (
  id: string,
  updateParams: Exclude<Partial<Puppy>, "id">
) => {
  let updateExpression = "SET";
  const expressionAttributeNames = {};
  const expressionAttributeValues = {};
  Object.keys(updateParams).forEach((value) => {
    updateExpression += ` #${value} = :${value}Ref,`;
    expressionAttributeNames[`#${value}`] = `${value}`;
    expressionAttributeValues[`:${value}Ref`] = updateParams[value] ?? "";
  });
  const expressionWithoutTrailingCommma = updateExpression.slice(0, -1);
  const params = {
    TableName: PUPPY_TABLE,
    Item: {
      id,
    },
    UpdateExpression: expressionWithoutTrailingCommma,
    ExpressionAttributeNames: expressionAttributeNames,
    ExpressionAttributeValues: expressionAttributeValues,
  };

  await dynamoDbClient.send(new PutCommand(params));
};
