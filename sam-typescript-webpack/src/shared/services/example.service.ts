import { getById } from "../repositories/example.repository";

export const initProcess = () => {
  console.log("service init");
  getById();
};
