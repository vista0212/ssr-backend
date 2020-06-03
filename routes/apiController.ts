import { Router } from 'express';

import postApplicationValidation from './application/post/_validation';
import loadApplicationValidation from './application/load/_validation';
import patchApplicationValidation from './application/patch/_validation';

import checkStatus from './common/checkStatus';
import checkValidation from './common/checkValidation';

import applicationExistCheck from './common/applicationExistCheck';
import passwordEncryption from './common/passwordEncryption';
import postApplication from './application/post/postApplication';
import loadApplication from './application/load/loadApplication';
import patchApplication from './application/patch/patchApplication';

const router: Router = Router();

router.use(checkStatus);

router.post('/application', postApplicationValidation);
router.post('/application/load', loadApplicationValidation);
router.patch('/application', patchApplicationValidation);

router.use(checkValidation);

router.post('/application', applicationExistCheck, passwordEncryption, postApplication);
router.post('/application/load', applicationExistCheck, passwordEncryption, loadApplication);
router.patch('/application', applicationExistCheck,passwordEncryption, patchApplication);

export default router;
