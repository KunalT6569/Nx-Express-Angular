import { Request, Response } from 'express';
import { ItemService } from '../service/item.service';
import { Item } from '../db/item.model';

export class ItemController {
  static async getItems(req: Request, res: Response) {
    const allItems = await Item.find().exec();
    res.json(allItems);
  }

  static async getItemsFromPrimary(req: Request, res: Response) {
    const allItems = await Item.find().read('primary').exec();
    res.json(allItems);
  }

  static async getItemsFromSecondary(req: Request, res: Response) {
    const allItems = await Item.find().read('secondary').exec();
    res.json(allItems);
  }

  static async createItem(req: Request, res: Response) {
    try {
      await ItemService.saveItems([...req.body]);
      res
        .json({
          success: true,
          status: 200,
          error: null
        })
        .send();
    } catch (err) {
      res.status(500).send();
      throw err;
    }
  }
}
