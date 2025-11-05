/*
  Warnings:

  - You are about to drop the `IstoricStareTicket` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "IstoricStareTicket" DROP CONSTRAINT "IstoricStareTicket_schimbataDe_fkey";

-- DropForeignKey
ALTER TABLE "IstoricStareTicket" DROP CONSTRAINT "IstoricStareTicket_ticketId_fkey";

-- DropTable
DROP TABLE "IstoricStareTicket";

-- CreateTable
CREATE TABLE "ActivityLog" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER,
    "entitate" TEXT NOT NULL,
    "entitateId" INTEGER,
    "actiune" TEXT NOT NULL,
    "detalii" JSONB,
    "autorId" INTEGER,
    "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Angajat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
