import { Request, Response } from 'express';
import { ItemService } from '../service/item.service';
import { Item } from '../db/item.model';

export class ItemController {
  static getItem(req: Request, res: Response) {
    const allItems = Item.find({}).exec();
    res.json(allItems);
  }

  static async createItem(req: Request, res: Response) {
    try {
      await ItemService.saveItems([...req.body]);
      res.status(204).send();
    } catch (err) {
      res.status(500).send();
      throw err;
    }
  }
}
