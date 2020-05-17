import { Router } from 'express';

import casesRouter from './cases.routes';

const routes = Router();

routes.use('/cases', casesRouter);

export default routes;
