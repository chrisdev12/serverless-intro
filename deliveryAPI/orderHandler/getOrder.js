import { getOrder } from "shared/service/order.service.js";

export const notFoundOrderError = "Sorry. This order has been not found";

export const handler = async (event) => {
  try {
    const { orderId } = event.pathParameters;
    const orderFound = await getOrder(orderId);
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
