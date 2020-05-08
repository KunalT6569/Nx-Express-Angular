import { Data as DataModel } from '@myapp/api-models';
import { Item } from '../db/item.model';

export class DataService {
  static async saveItem(data: DataModel) {
    try {
      const newItem = new Item(data);
      await newItem.save();
    } catch (err) {
      throw err;
    }
  }
}
