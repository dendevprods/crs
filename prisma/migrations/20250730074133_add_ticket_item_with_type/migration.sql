/*
  Warnings:

  - You are about to drop the column `produseServicii` on the `Ticket` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "TipItem" AS ENUM ('PRODUS', 'SERVICIU');

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "produseServicii";

-- CreateTable
CREATE TABLE "TicketItem" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "tip" "TipItem" NOT NULL,
    "referintaId" INTEGER NOT NULL,
    "cantitate" INTEGER NOT NULL DEFAULT 1,
    "pretUnitar" DOUBLE PRECISION NOT NULL,
    "costTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "TicketItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TicketItem_referintaId_idx" ON "TicketItem"("referintaId");

-- AddForeignKey
ALTER TABLE "TicketItem" ADD CONSTRAINT "TicketItem_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
