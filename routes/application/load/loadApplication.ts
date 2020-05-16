import { Request, Response, NextFunction } from 'express';
import Application from '@Model/application.model';
import { throwError } from '@Lib/error';

const loadApplication = async (req: Request, res: Response, next: NextFunction) => {
  const password: Application['password'] = res.locals.temp.password;
  const application: Application = res.locals.application;

  if (password !== application.password) {
    throwError(res, 'Wrong_Data', '잘못된 이메일 혹은 비밀번호입니다.');
  }

  if (application.isSubmit) {
    throwError(res, 'Forbidden', '이미 제출된 지원서입니다.');
  }

  res.json({
    success: true,
    data: {
      application: {
        pk: application.pk,
        phone: application.phone,
        classNum: application.classNum,
        studentNum: application.studentNum,
        name: application.name,
        field: application.field,
        content: application.content
      }
    }
  });
};

export default loadApplication;
