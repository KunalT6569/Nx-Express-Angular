import { Request, Response } from 'express';
import validator from 'validator';

export const itemPostValidator = (
  req: Request,
  res: Response,
  next: Function
) => {
  // implement the middleware for request here

  next();
};
