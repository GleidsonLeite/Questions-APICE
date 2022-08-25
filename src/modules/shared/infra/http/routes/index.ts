import { Router } from 'express';

import { questionsRouter } from './Questions.routes';

const appRouter = Router();

appRouter.use('/questions', questionsRouter);

export { appRouter };
