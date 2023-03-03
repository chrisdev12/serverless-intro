import "./module-aliases";
import { initProcess } from "@lambdaLayer/services/example.service";

export const handler = (event: any) => {
  console.log(event);
  initProcess();
};
