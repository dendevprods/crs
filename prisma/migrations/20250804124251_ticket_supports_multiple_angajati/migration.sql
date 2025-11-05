/*
  Warnings:

  - You are about to drop the column `angajatId` on the `Ticket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_angajatId_fkey";

-- DropIndex
DROP INDEX "Angajat_email_key";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "angajatId";

-- CreateTable
CREATE TABLE "_TicketAngajati" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_TicketAngajati_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_TicketAngajati_B_index" ON "_TicketAngajati"("B");

-- AddForeignKey
ALTER TABLE "_TicketAngajati" ADD CONSTRAINT "_TicketAngajati_A_fkey" FOREIGN KEY ("A") REFERENCES "Angajat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TicketAngajati" ADD CONSTRAINT "_TicketAngajati_B_fkey" FOREIGN KEY ("B") REFERENCES "Ticket"("id") ON DELETE CASCADE ON UPDATE CASCADE;
