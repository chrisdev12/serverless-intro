export class NewOrderDTO {
  restaurant;
  total;
  creationDate = new Date();
  lastUpdate = this.creationDate;
  status = "CREATED";
}
