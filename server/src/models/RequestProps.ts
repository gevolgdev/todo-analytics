import { Request, Response} from 'express';

type RequestProps = {
  req: Request,
  res: Response,
};

export default RequestProps;