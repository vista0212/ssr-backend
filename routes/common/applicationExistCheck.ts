import { Request, Response, NextFunction } from 'express';

import Application from '@Model/application.model';
import { throwError, catchDBError } from '@Lib/error';

const applicationExistCheck = async (req: Request, res: Response, next: NextFunction) => {
  const email: Application['email'] = req.body.email;

  console.log(req.url);

  const application: Application = await Application.findOne({
    where: {
      email
    }
  }).catch(catchDBError(res));

  if (req.url == '/application') {
    if (application) {
      throwError(res, 'Exist_Data', '중복된 신청서입니다.');
    }
    next();
  }

  if (req.url == '/application/load') {
    if (!application) {
      throwError(res, 'Not_Found', '존재하지 않는 신청서입니다.');
    }
    res.locals.application = application;
    next();
  }
};

export default applicationExistCheck;
