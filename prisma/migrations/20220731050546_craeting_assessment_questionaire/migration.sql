-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "assessmentQuestionnaireId" TEXT;

-- CreateTable
CREATE TABLE "AssessmentQuestionnaire" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "AssessmentQuestionnaire_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_assessmentQuestionnaireId_fkey" FOREIGN KEY ("assessmentQuestionnaireId") REFERENCES "AssessmentQuestionnaire"("id") ON DELETE SET NULL ON UPDATE CASCADE;
