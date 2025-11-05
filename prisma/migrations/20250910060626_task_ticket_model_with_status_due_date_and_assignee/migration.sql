/*
  Warnings:

  - The `status` column on the `TaskTicket` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `actualizatLa` to the `TaskTicket` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusTask" AS ENUM ('DE_FACUT', 'FINALIZAT');

-- AlterTable
ALTER TABLE "TaskTicket" ADD COLUMN     "actualizatLa" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "finalizatLa" TIMESTAMP(3),
ADD COLUMN     "responsabilId" INTEGER,
ADD COLUMN     "termenLimita" TIMESTAMP(3),
DROP COLUMN "status",
ADD COLUMN     "status" "StatusTask" NOT NULL DEFAULT 'DE_FACUT';

-- AddForeignKey
ALTER TABLE "TaskTicket" ADD CONSTRAINT "TaskTicket_responsabilId_fkey" FOREIGN KEY ("responsabilId") REFERENCES "Angajat"("id") ON DELETE SET NULL ON UPDATE CASCADE;
