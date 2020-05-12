import { IItem } from '@myapp/api-models';
import { Item } from '../db/item.model';

export class ItemService {
  static async saveItems(data: IItem[]) {
    try {
      const newItems = new Item(data);
      await newItems.save();
    } catch (err) {
      throw err;
    }
  }
}
