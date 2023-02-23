const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} = require("@aws-sdk/lib-dynamodb");

const USERS_TABLE = process.env.USERS_TABLE;
const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client);

export const getById = async () => {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId,
    },
  };

  const { Item } = await dynamoDbClient.send(new GetCommand(params));
  if (!Item) throw Error("Not register found");

  return Item;
};

export const postOrder = async () => {
  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId: userId,
      name: name,
    },
  };

  try {
    await dynamoDbClient.send(new PutCommand(params));
  } catch (error) {
    throw error;
  }
};
