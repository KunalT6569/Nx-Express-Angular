import * as express from 'express';
import { DataController } from '../controllers/dashboard.controller';
import { itemPostValidator } from '../middlewares/validators/item.validator';

const router = express.Router();

router.get('/', DataController.getItems);
router.get('/primary', DataController.getItemsFromPrimary);
router.get('/secondary', DataController.getItemsFromSecondary);
router.post('/', itemPostValidator, DataController.createItem);

export default router;