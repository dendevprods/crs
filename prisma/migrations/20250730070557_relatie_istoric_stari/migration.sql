/*
  Warnings:

  - You are about to drop the column `istoricStari` on the `Ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "istoricStari";

-- CreateTable
CREATE TABLE "IstoricStareTicket" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "stareNoua" "StareComanda" NOT NULL,
    "schimbataDe" INTEGER,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IstoricStareTicket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IstoricStareTicket" ADD CONSTRAINT "IstoricStareTicket_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IstoricStareTicket" ADD CONSTRAINT "IstoricStareTicket_schimbataDe_fkey" FOREIGN KEY ("schimbataDe") REFERENCES "Angajat"("id") ON DELETE SET NULL ON UPDATE CASCADE;
