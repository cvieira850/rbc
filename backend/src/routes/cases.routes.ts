import { Request, Response,Router } from 'express';
import { getRepository } from 'typeorm';

import Case from '../models/Case';

const casesRouter = Router();


casesRouter.get('/', async (request: Request, response: Response): Promise<Response> => {

  const cases = await getRepository(Case).find();


  return response.json({cases});
});

export default casesRouter;






