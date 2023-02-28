export class NewOrderDTO {
  restaurant;
  total;
  creationDate = new Date().toISOString();
  lastUpdate = this.creationDate;
  status = "CREATED";
}
