import * as express from 'express';
import itemRouter from './item.router';

const router = express.Router();

router.get('/test', (req: express.Request, res: express.Response) =>
  res.json({ status: 'ok' }).status(200)
);

router.use('/item', itemRouter);

export default router;
