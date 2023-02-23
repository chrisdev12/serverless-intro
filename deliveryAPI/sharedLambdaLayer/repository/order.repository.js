import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";

const ORDERS_TABLE = process.env.ORDERS_TABLE;
const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client);

export const getById = async (id) => {
  const params = {
    TableName: ORDERS_TABLE,
    Key: {
      orderId: id,
    },
  };
  const { Item } = await dynamoDbClient.send(new GetCommand(params));
  if (!Item) throw Error("Not order found");

  return Item;
};

export const create = async (order) => {
  const params = {
    TableName: ORDERS_TABLE,
    Item: {
      orderId: order.id,
      restaurant: order.restaurant,
      price: order.price,
      creationDate: order.creationDate,
      lastUpdate: order.lastUpdate,
      status: order.status,
    },
  };
  await dynamoDbClient.send(new PutCommand(params));
};

export const update = async (id, putParams) => {
  const params = {
    TableName: ORDERS_TABLE,
    Item: {
      orderId: id,
      ...putParams,
    },
  };
  await dynamoDbClient.send(new PutCommand(params));
};
