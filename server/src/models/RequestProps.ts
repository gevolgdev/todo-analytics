import { Request, Response, NextFunction } from 'express';

type RequestProps = {
  req: Request,
  res: Response,
};

export default RequestProps;