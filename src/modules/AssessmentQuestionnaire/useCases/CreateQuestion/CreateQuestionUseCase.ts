import { IQuestionsRepository } from '@modules/AssessmentQuestionnaire/repositories/IQuestionsRepository';
import { Question } from '@prisma/client';

interface IRequest {
  statement: string;
  value: number;
}

class CreateQuestionUseCase {
  constructor(private questionsRepository: IQuestionsRepository) {}

  async execute({ statement, value }: IRequest): Promise<Question> {
    return this.questionsRepository.create({
      statement,
      value
    });
  }
}

export { CreateQuestionUseCase };
