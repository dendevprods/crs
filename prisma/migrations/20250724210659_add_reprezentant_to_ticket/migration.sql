-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "reprezentantId" INTEGER;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_reprezentantId_fkey" FOREIGN KEY ("reprezentantId") REFERENCES "Persoana"("id") ON DELETE SET NULL ON UPDATE CASCADE;
