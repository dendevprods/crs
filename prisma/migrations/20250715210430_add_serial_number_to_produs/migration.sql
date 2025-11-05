/*
  Warnings:

  - A unique constraint covering the columns `[serialNumber]` on the table `Produs` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Produs" ADD COLUMN     "serialNumber" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Produs_serialNumber_key" ON "Produs"("serialNumber");
