import { getById } from "../repository/example.repository";

export const initProcess = () => {
  console.log("service init");
  getById();
};
