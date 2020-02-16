import { ValidationChain, body } from 'express-validator';
import { Field, Major } from '@Lib/types';
import { email, password } from '@Lib/regex.json';

const major: Major[] = ['I', 'N', 'H'];
const field: Field[] = [
  'Forensic',
  'Pwnable',
  'Web Hacking',
  'Web FrontEnd Development',
  'BackEnd Development',
  'App Development'
];

const postApplicationValidation: ValidationChain[] = [
  body('email')
    .isString()
    .matches(email),
  body('major')
    .isString()
    .custom(val => major.includes(val)),
  body('grade').isInt({ min: 1, max: 2 }),
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

export default postApplicationValidation;
