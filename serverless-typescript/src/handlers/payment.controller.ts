import "./module-alias";
import {
  APIGatewayEventRequestContext,
  APIGatewayProxyEvent,
} from "aws-lambda";
import { processPay } from "@lambdaLayer/service/payment.service";

const processPayMesssage = "Your payment is being processed";

export const handler = async (
  event: APIGatewayProxyEvent,
  context: APIGatewayEventRequestContext
) => {
  try {
    processPay();

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: processPayMesssage,
      }),
    };
  } catch (error: any) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error?.message as string,
      }),
    };
  }
};
