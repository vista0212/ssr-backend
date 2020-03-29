import { ValidationChain, body } from 'express-validator';

import { password } from '@Lib/regex.json';

const loadApplicationValidation: ValidationChain[] = [
  body('phone').isString(),
  body('password').matches(password)
];

export default loadApplicationValidation;
