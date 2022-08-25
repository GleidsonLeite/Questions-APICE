import { createQuestionController } from '@modules/AssessmentQuestionnaire/useCases/CreateQuestion';
import { Router } from 'express';

const questionsRouter = Router();

questionsRouter.post('/', createQuestionController.handle);

export { questionsRouter };
