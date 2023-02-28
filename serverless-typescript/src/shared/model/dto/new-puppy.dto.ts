import { PuppyStatus } from "../entity/puppy";

export class NewPuppyDTO {
  public name: string;
  public age: number;
  public breed: string;
  public status: PuppyStatus = PuppyStatus.NOT_ADOPTED;
}
