import * as express from 'express';
import { DataController } from '../controllers/dashboard.controller';
import { itemPostValidator } from '../middlewares/validators/item.validator';

const router = express.Router();

router.get('/', DataController.getItem);
router.post('/', itemPostValidator, DataController.createItem);

export default router;