import "./module-alias";
import { plainToInstance } from "class-transformer";
import { NewOrderDTO } from "@lambdaLayer/model/newOrder.dto";
import { receiveOrder } from "@lambdaLayer/service/order.service";

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

handler();
