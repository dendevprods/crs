/*
  Warnings:

  - You are about to drop the column `referintaId` on the `TicketItem` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "TicketItem_referintaId_idx";

-- AlterTable
ALTER TABLE "TicketItem" DROP COLUMN "referintaId",
ADD COLUMN     "produsId" INTEGER,
ADD COLUMN     "serviciuId" INTEGER;

-- CreateIndex
CREATE INDEX "TicketItem_produsId_idx" ON "TicketItem"("produsId");

-- CreateIndex
CREATE INDEX "TicketItem_serviciuId_idx" ON "TicketItem"("serviciuId");

-- AddForeignKey
ALTER TABLE "TicketItem" ADD CONSTRAINT "TicketItem_produsId_fkey" FOREIGN KEY ("produsId") REFERENCES "Produs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketItem" ADD CONSTRAINT "TicketItem_serviciuId_fkey" FOREIGN KEY ("serviciuId") REFERENCES "Serviciu"("id") ON DELETE SET NULL ON UPDATE CASCADE;
