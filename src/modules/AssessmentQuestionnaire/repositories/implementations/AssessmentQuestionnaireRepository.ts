import { AssessmentQuestionnaire, Prisma, PrismaClient } from '@prisma/client';

import { IAssessmentQuestionnaireRepository } from '../IAssessmentQuestionnaireRepository';

class AssessmentQuestionnaireRepository
  implements IAssessmentQuestionnaireRepository
{
  constructor(private prismaClient: PrismaClient) {}

  async create(
    information: Prisma.AssessmentQuestionnaireCreateInput
  ): Promise<AssessmentQuestionnaire> {
    return this.prismaClient.assessmentQuestionnaire.create({
      data: information
    });
  }
}

export { AssessmentQuestionnaireRepository };
