import { plainToInstance } from "class-transformer";
import { Order } from "sharedLambdaLayer/model/order.js";
import { processOrder } from "sharedLambdaLayer/service/order.service.js";

export const handler = async (event) => {
  for await (const record of event.Records) {
    try {
      console.log("Message Body PARSED: ", record.body);
      const orderObject = JSON.parse(record.body);
      const order = plainToInstance(Order, orderObject);
      await processOrder(order);
    } catch (error) {
      console.error(error);
    }
  }
};
