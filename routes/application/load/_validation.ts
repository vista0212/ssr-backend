import { ValidationChain, body } from 'express-validator';

import { email, password } from '@Lib/regex.json';

const loadApplicationValidation: ValidationChain[] = [
  body('email').matches(email),
  body('password').matches(password)
];

export default loadApplicationValidation;
