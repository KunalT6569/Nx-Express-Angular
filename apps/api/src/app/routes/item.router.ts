import * as express from 'express';
import { ItemController } from '../controllers/item.controller';
import { itemPostValidator } from '../middlewares/validators/item.validator';

const router = express.Router();

router.get('/', ItemController.getItem);
router.post('/', itemPostValidator, ItemController.createItem);

export default router;