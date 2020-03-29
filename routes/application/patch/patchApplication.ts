import { Request, Response, NextFunction } from 'express';

import Application from '@Model/application.model';
import { catchDBError, throwError } from '@Lib/error';

const patchApplication = async (req: Request, res: Response, next: NextFunction) => {
  const pk: Application['pk'] = req.body.pk;
  const phone: Application['phone'] = req.body.phone;
  const classNum: Application['classNum'] = req.body.classNum;
  const studentNum: Application['studentNum'] = req.body.studentNum;
  const name: Application['name'] = req.body.name;
  const field: Application['field'] = req.body.field;
  const content: Application['content'] = req.body.content;
  const password: Application['password'] = res.locals.temp.password;
  const isSubmit: Application['isSubmit'] = req.body.isSubmit;

  const application: Application = await Application.findOne({
    where: {
      pk
    }
  }).catch(catchDBError(res));

  if (!application) {
    throwError(res, 'Wrong_Data', '잘못된 요청 데이터입니다.');
  }

  await application
    .update({
      phone,
      classNum,
      studentNum,
      name,
      field,
      content,
      password,
      isSubmit
    })
    .catch(catchDBError(res));

  res.json({
    success: true,
    data: {
      application
    }
  });
};

export default patchApplication;
