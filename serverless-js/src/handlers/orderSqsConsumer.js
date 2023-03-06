import "./module-alias";
import { plainToInstance } from "class-transformer";
import { Order } from "@lambdaLayer/model/order";
import { processOrder } from "@lambdaLayer/service/order.service";

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
