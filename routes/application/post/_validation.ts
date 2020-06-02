import { ValidationChain, body } from 'express-validator';
import { Field } from '@Lib/types';
import { password } from '@Lib/regex.json';

const field: Field[] = [
  'Forensic',
  'Pwnable',
  'Web Hacking',
  'Web FrontEnd Development',
  'BackEnd Development',
  'App Development',
  'Reversing',
  'Designer',
];

const postApplicationValidation: ValidationChain[] = [
  body('phone').isString(),
  body('classNum').isInt({ min: 1, max: 4 }),
  body('studentNum').isInt({ min: 1, max: 30 }),
  body('name').isString(),
  body('field')
    .isString()
    .custom((val) => field.includes(val)),
  body('content').isString().isLength({ min: 1, max: 500 }),
  body('password').isString().matches(password),
  body('isSubmit').isBoolean(),
];

export default postApplicationValidation;
