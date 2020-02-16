import { Request, Response, NextFunction } from 'express';

import { isBlock } from '@Lib/status.json';
import { throwError } from '@Lib/error';

const checkStatus = (req: Request, res: Response, next: NextFunction) => {
  if (isBlock) {
    throwError(res, 'Forbidden', '지원이 마감되었습니다.');
  }

  next();
};

export default checkStatus;
