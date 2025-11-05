/*
  Warnings:

  - You are about to drop the column `comentarii` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `taskuri` on the `Ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "comentarii",
DROP COLUMN "taskuri";

-- CreateTable
CREATE TABLE "TaskTicket" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "titlu" TEXT NOT NULL,
    "descriere" TEXT,
    "status" TEXT NOT NULL,
    "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TaskTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComentariuTicket" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "autorId" INTEGER NOT NULL,

    CONSTRAINT "ComentariuTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComentariuTask" (
    "id" SERIAL NOT NULL,
    "taskId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "autorId" INTEGER NOT NULL,

    CONSTRAINT "ComentariuTask_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TaskTicket" ADD CONSTRAINT "TaskTicket_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentariuTicket" ADD CONSTRAINT "ComentariuTicket_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentariuTicket" ADD CONSTRAINT "ComentariuTicket_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Angajat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentariuTask" ADD CONSTRAINT "ComentariuTask_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "TaskTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentariuTask" ADD CONSTRAINT "ComentariuTask_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Angajat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
