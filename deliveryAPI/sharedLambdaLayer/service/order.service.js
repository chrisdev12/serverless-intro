import { randomUUID } from "crypto";
import { create, getById, update } from "../repository/order.repository.js";
import { Order } from "../model/order.js";
import { sleep } from "../utils/sleep.js";

export const getOrder = async (id) => {
  const order = await getById(id);

  return order;
};

export const receiveOrder = async (newOrderDTO) => {
  const orderToInsert = new Order({ ...newOrderDTO, id: randomUUID() });
  await create(orderToInsert);
  const orderMessage = JSON.stringify(orderToInsert);
  await sendMessage(orderMessage);
};

export const processOrder = async (order) => {
  await update(order.id, { status: "PROCESSING" });

  //Domain business logic to process the order
  //Sleep 30 sseconds mocking the time that will take to complete the processing
  await sleep(3000);
  //Finishing the business logi to process this order

  await update(order.id, { status: "COMPLETED" });
};
