import { Request, Response, NextFunction } from 'express';

import Application from '@Model/application.model';
import { throwError } from '@Lib/error';

const postApplication = async (req: Request, res: Response, next: NextFunction) => {
  const phone: Application['phone'] = req.body.phone;
  const classNum: Application['classNum'] = req.body.classNum;
  const studentNum: Application['studentNum'] = req.body.studentNum;
  const name: Application['name'] = req.body.name;
  const field: Application['field'] = req.body.field;
  const content: Application['content'] = req.body.content;
  const password: Application['password'] = res.locals.temp.password;
  const passwordKey: Application['passwordKey'] = res.locals.temp.passwordKey;
  const isSubmit: Application['isSubmit'] = req.body.isSubmit;

  const application: Application | void = await Application.create({
    phone,
    classNum,
    studentNum,
    name,
    field,
    content,
    password,
    passwordKey,
    isSubmit
  }).catch(err => {
    console.log(err);
    throwError(res, 'Database_Error', 'database error');
  });

  res.json({
    success: true,
    data: {
      application
    }
  });
};

export default postApplication;
