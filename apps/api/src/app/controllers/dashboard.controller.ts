import { Request, Response } from 'express';
import { DataService } from '../service/data.service';

export class DataController {
  static getItem(req: Request, res: Response) {}

  static async createItem(req: Request, res: Response) {
    try {
      await DataService.saveItem(req.body);
      res.status(204).send();
    } catch (err) {
      res.status(500).send();
      throw err;
    }
  }
}
