import { IItem } from '@myapp/api-models';
import { Item } from '../db/item.model';

export class ItemService {
  static async saveItems(data: IItem[]) {
    try {
      const newItems = data.map(d => new Item(d));
      await Item.insertMany(newItems);
    } catch (err) {
      throw err;
    }
  }
}
