import { AssessmentQuestionnaire, Prisma } from '@prisma/client';

export interface IAssessmentQuestionnaireRepository {
  create(
    information: Prisma.AssessmentQuestionnaireCreateInput
  ): Promise<AssessmentQuestionnaire>;
}
