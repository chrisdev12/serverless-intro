import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";
const sqs = new SQSClient();

export const sendMessage = async (body) => {
  try {
    const sqsParams = {
      QueueUrl: process.env.QUEUE_URL,
      MessageBody: body,
    };

    await sqs.send(new SendMessageCommand(sqsParams));
  } catch (error) {
    console.log(error);
    throw error;
  }
};
