import { IAssessmentQuestionnaireRepository } from '@modules/AssessmentQuestionnaire/repositories/IAssessmentQuestionnaireRepository';
import { AssessmentQuestionnaire } from '@prisma/client';

interface IRequest {
  title: string;
}

class CreateAssessmentQuestionnaireUseCase {
  constructor(
    private assessmentQuestionnaireRepository: IAssessmentQuestionnaireRepository
  ) {}

  async execute({ title }: IRequest): Promise<AssessmentQuestionnaire> {
    return this.assessmentQuestionnaireRepository.create({
      title
    });
  }
}

export { CreateAssessmentQuestionnaireUseCase };
