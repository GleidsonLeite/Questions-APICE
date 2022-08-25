import { AssessmentQuestionnaireRepository } from '@modules/AssessmentQuestionnaire/repositories/implementations/AssessmentQuestionnaireRepository';
import { CreateAssessmentQuestionnaireController } from '@modules/AssessmentQuestionnaire/useCases/CreateAssessmentQuestionnaire/CreateAssessmentQuestionnaireController';
import { CreateAssessmentQuestionnaireUseCase } from '@modules/AssessmentQuestionnaire/useCases/CreateAssessmentQuestionnaire/CreateAssessmentQuestionnaireUseCase';
import { Router } from 'express';

import { prismaClient } from '../../prisma';

const assessmentQuestionnaireRouter = Router();

const assessmentQuestionnaireRepository = new AssessmentQuestionnaireRepository(
  prismaClient
);

const createAssessmentQuestionnaireUseCase =
  new CreateAssessmentQuestionnaireUseCase(assessmentQuestionnaireRepository);

const createAssessmentQuestionnaireController =
  new CreateAssessmentQuestionnaireController(
    createAssessmentQuestionnaireUseCase
  );

assessmentQuestionnaireRouter.post(
  '/',
  createAssessmentQuestionnaireController.handle
);

export { assessmentQuestionnaireRouter };
