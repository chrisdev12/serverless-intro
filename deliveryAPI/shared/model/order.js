export class Order {
  constructor(obj) {
    Object.assign(this, obj);
  }

  id;
  restaurant;
  total;
  creationDate;
  lastUpdate;
  status;
}
