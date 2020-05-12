import { Request, Response } from 'express';

export const itemPostValidator = (
  req: Request,
  res: Response,
  next: Function
) => {
  // implement the middleware for request here

  next();
};
