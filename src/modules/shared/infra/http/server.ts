import 'reflect-metadata';

import { QuestionsRepository } from '@modules/AssessmentQuestionnaire/repositories/implementations/QuestionsRepository';
import { CreateQuestionUseCase } from '@modules/AssessmentQuestionnaire/useCases/CreateQuestion/CreateQuestionUseCase';
import express, { Request, Response } from 'express';

import { prismaClient } from '../prisma';

const app = express();

app.use(express.json());

app.post('/questions', async (request: Request, response: Response) => {
  const questionsRepository = new QuestionsRepository(prismaClient);
  const createQuestionUseCase = new CreateQuestionUseCase(questionsRepository);
  const { statement, value } = request.body;
  await createQuestionUseCase.execute({
    statement,
    value
  });
  return response.status(201).send();
});

app.listen(3333, () => {
  console.log('Server is running');
});
