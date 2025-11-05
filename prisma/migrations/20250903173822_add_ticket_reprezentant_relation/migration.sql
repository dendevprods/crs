/*
  Warnings:

  - You are about to drop the column `reprezentantId` on the `Ticket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_reprezentantId_fkey";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "reprezentantId",
ADD COLUMN     "reprezentantFirmaId" INTEGER,
ADD COLUMN     "reprezentantPersoanaId" INTEGER;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_reprezentantPersoanaId_reprezentantFirmaId_fkey" FOREIGN KEY ("reprezentantPersoanaId", "reprezentantFirmaId") REFERENCES "ReprezentantFirma"("persoanaId", "firmaId") ON DELETE SET NULL ON UPDATE CASCADE;
