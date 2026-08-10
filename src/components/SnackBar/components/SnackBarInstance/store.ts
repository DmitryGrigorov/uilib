import { TSnackBarParams } from "../../types";

type TSnackBarSubscribe = () => void;

class Store {
  private subscribes: Array<TSnackBarSubscribe> = [];

  private items: Array<
    TSnackBarParams & Required<Pick<TSnackBarParams, "id">>
  > = [];

  public subscribe(callback: TSnackBarSubscribe): void {
    this.subscribes.push(callback);
  }

  public unsubscribe(callback: TSnackBarSubscribe): void {
    this.subscribes = this.subscribes.filter((subscriber) =>
      subscriber === callback ? undefined : subscriber
    );
  }

  private notify(): void {
    this.subscribes.forEach((subscriber) => subscriber());
  }

  public add(
    item: TSnackBarParams & Required<Pick<TSnackBarParams, "id">>
  ): void {
    const index = this.items.findIndex((i) => i.message === item.message);
    if (index === -1) {
      this.items.push(item);
    } else {
      const count = this.items[index].count;
      this.items[index] = {
        ...item,
        id: this.items[index].id,
        count: count ? count + 1 : 2
      };
    }

    setTimeout(() => {
      this.remove(item.id);
      this.notify();
    }, item.duration || 3000);
    this.notify();
  }

  public remove(id: string | number): void {
    this.items = this.items.filter((storeItem) =>
      storeItem.id === id ? undefined : storeItem
    );
    this.notify();
  }

  get data(): Array<any> {
    return this.items;
  }
}

export default new Store();
