export enum PuppyStatus {
  ADOPTED = "ADOPTED",
  NOT_ADOPTED = "NOT-ADOPTED",
}

export class Puppy {
  constructor(obj: Partial<Puppy>) {
    Object.assign(this, obj);
  }

  public id: string;
  public name: string;
  public age: number;
  public breed: string;
  public lastUpdate: Date = new Date();
  public status: PuppyStatus;
}
