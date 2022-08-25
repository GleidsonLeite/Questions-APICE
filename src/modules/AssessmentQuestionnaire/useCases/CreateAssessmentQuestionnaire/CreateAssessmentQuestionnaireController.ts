import { Request, Response } from 'express';

import { CreateAssessmentQuestionnaireUseCase } from './CreateAssessmentQuestionnaireUseCase';

class CreateAssessmentQuestionnaireController {
  constructor(
    private createAssessmentQuestionnaireUseCase: CreateAssessmentQuestionnaireUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.params;
    await this.createAssessmentQuestionnaireUseCase.execute({
      title
    });

    return response.status(201).send();
  }
}

export { CreateAssessmentQuestionnaireController };
