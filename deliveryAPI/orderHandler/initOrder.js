import { plainToInstance } from "class-transformer";
import { NewOrderDTO } from "sharedLambdaLayer/model/newOrder.dto.js";
import { receiveOrder } from "sharedLambdaLayer/service/order.service.js";

export const handler = async (event) => {
  try {
    const payload = JSON.parse(event.body);
    const newOrder = plainToInstance(NewOrderDTO, payload);
    const orderCreated = await receiveOrder(newOrder);

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: orderCreated,
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};
