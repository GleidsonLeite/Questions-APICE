import { Prisma, Question } from '@prisma/client';

export interface IQuestionsRepository {
  create(questionInformation: Prisma.QuestionCreateInput): Promise<Question>;
  list(): Promise<Question[]>;
}
