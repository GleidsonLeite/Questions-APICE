import { Request, Response } from 'express';

import { CreateQuestionUseCase } from './CreateQuestionUseCase';

class CreateQuestionController {
  constructor(private createQuestionUseCase: CreateQuestionUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { statement, value } = request.params;
    await this.createQuestionUseCase.execute({
      statement,
      value: Number(value)
    });
    return response.status(201).send();
  }
}

export { CreateQuestionController };
