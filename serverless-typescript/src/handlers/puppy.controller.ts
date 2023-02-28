import "./module-alias";
import { getPuppy, newPuppy } from "@lambdaLayer/service/puppy.service";
import {
  APIGatewayEventRequestContext,
  APIGatewayProxyEvent,
} from "aws-lambda";
import { NewPuppyDTO } from "@lambdaLayer/model/dto/new-puppy.dto";

export const notFoundOrderError = "Sorry. This order has been not found";

export const get = async (
  event: APIGatewayProxyEvent,
  context: APIGatewayEventRequestContext
) => {
  try {
    const { puppyId } = event.pathParameters;
    const orderFound = await getPuppy(puppyId);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: orderFound,
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: notFoundOrderError,
      }),
    };
  }
};

export const post = async (
  event: APIGatewayProxyEvent,
  context: APIGatewayEventRequestContext
) => {
  try {
    const eventPayload: NewPuppyDTO = JSON.parse(event.body) as NewPuppyDTO;
    const orderCreated = await newPuppy(eventPayload);

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: orderCreated,
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

if (require.main === module) {
  const puppy: Partial<NewPuppyDTO> = {
    name: "Ginebra",
  };
  const event: APIGatewayProxyEvent = {
    body: JSON.stringify(puppy),
  } as any;
  const mockExtendedContext: any = {};
  post(event, mockExtendedContext).then((info) =>
    console.info("Finished.", info)
  );
}
