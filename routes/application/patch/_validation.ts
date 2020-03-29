import { ValidationChain, body } from 'express-validator';
import { Field, Major } from '@Lib/types';
import { phone, password } from '@Lib/regex.json';

const field: Field[] = [
  'Forensic',
  'Pwnable',
  'Web Hacking',
  'Web FrontEnd Development',
  'BackEnd Development',
  'App Development'
];

const patchApplicationValidation: ValidationChain[] = [
  body('pk').isInt(),
  body('phone').isString(),
  body('classNum').isInt({ min: 1, max: 4 }),
  body('studentNum').isInt({ min: 1, max: 30 }),
  body('name').isString(),
  body('field')
    .isString()
    .custom(val => field.includes(val)),
  body('content')
    .isString()
    .isLength({ min: 1, max: 500 }),
  body('password')
    .isString()
    .matches(password),
  body('isSubmit').isBoolean()
];

export default patchApplicationValidation;
