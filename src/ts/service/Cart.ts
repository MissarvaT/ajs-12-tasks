import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add (item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalSum(): number {
        let totalSum: number = 0;
        this._items.forEach((item: Buyable) => totalSum += item.price);
        return totalSum;
    }

    finalSum(discount: number): number {
        const totalSum = this.totalSum();
        return totalSum - totalSum *(discount / 100);
    }

    deleteItem(id: number): void {
        this._items = this._items.filter((item: Buyable) => {
          return item.id !== id;
          })
      }
}