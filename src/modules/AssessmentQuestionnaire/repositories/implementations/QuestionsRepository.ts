import { Prisma, PrismaClient, Question } from '@prisma/client';

import { IQuestionsRepository } from '../IQuestionsRepository';

class QuestionsRepository implements IQuestionsRepository {
  constructor(private prismaClient: PrismaClient) {}
  list(): Promise<Question[]> {
    throw new Error('Method not implemented.');
  }
  async create(
    questionInformation: Prisma.QuestionCreateInput
  ): Promise<Question> {
    return this.prismaClient.question.create({
      data: questionInformation
    });
  }
}

export { QuestionsRepository };
