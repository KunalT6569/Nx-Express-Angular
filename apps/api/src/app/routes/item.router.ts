import * as express from 'express';
import { ItemController } from '../controllers/item.controller';
import { itemPostValidator } from '../middlewares/validators/item.validator';

const router = express.Router();

router.get('/', ItemController.getItems);
router.get('/primary', ItemController.getItemsFromPrimary);
router.get('/secondary', ItemController.getItemsFromSecondary);
router.post('/', itemPostValidator, ItemController.createItem);

export default router;