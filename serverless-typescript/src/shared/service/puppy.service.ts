import { getById, insert } from "../repository/puppy.repository";
import { Puppy } from "../model/entity/puppy";
import { NewPuppyDTO } from "../model/dto/new-puppy.dto";
import { randomUUID } from "crypto";

export const getPuppy = async (id: string): Promise<unknown> => {
  const puppyFound = await getById(id);

  return puppyFound;
};

export const newPuppy = async (puppy: NewPuppyDTO): Promise<Puppy> => {
  const puppyToSave = new Puppy({
    id: randomUUID(),
    lastUpdate: new Date(),
    ...puppy,
  });
  await insert(puppyToSave);

  return puppyToSave;
};
