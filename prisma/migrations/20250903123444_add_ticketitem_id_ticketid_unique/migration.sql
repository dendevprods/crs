/*
  Warnings:

  - A unique constraint covering the columns `[id,ticketId]` on the table `TicketItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TicketItem_id_ticketId_key" ON "TicketItem"("id", "ticketId");
