import { QuestionsRepository } from '@modules/AssessmentQuestionnaire/repositories/implementations/QuestionsRepository';
import { prismaClient } from '@modules/shared/infra/prisma';

import { CreateQuestionController } from './CreateQuestionController';
import { CreateQuestionUseCase } from './CreateQuestionUseCase';

const questionsRepository = new QuestionsRepository(prismaClient);
console.log(prismaClient);
const createQuestionUseCase = new CreateQuestionUseCase(questionsRepository);
const createQuestionController = new CreateQuestionController(
  createQuestionUseCase
);

export { createQuestionController };
