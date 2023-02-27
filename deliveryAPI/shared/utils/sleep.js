export const sleep = (timeInMs = 5000) =>
  new Promise((resolve) => setTimeout(resolve, timeInMs));
