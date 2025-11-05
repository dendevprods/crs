/*
  Warnings:

  - You are about to drop the column `rol` on the `Angajat` table. All the data in the column will be lost.
  - You are about to drop the column `firmaReprezentataId` on the `Persoana` table. All the data in the column will be lost.
  - Added the required column `rolId` to the `Angajat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Persoana" DROP CONSTRAINT "Persoana_firmaReprezentataId_fkey";

-- AlterTable
ALTER TABLE "Angajat" DROP COLUMN "rol",
ADD COLUMN     "rolId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Persoana" DROP COLUMN "firmaReprezentataId";

-- DropEnum
DROP TYPE "RolAngajat";

-- CreateTable
CREATE TABLE "ReprezentantFirma" (
    "persoanaId" INTEGER NOT NULL,
    "firmaId" INTEGER NOT NULL,

    CONSTRAINT "ReprezentantFirma_pkey" PRIMARY KEY ("persoanaId","firmaId")
);

-- CreateTable
CREATE TABLE "RolAngajat" (
    "id" SERIAL NOT NULL,
    "nume" TEXT NOT NULL,
    "descriere" TEXT,

    CONSTRAINT "RolAngajat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RolAngajat_nume_key" ON "RolAngajat"("nume");

-- AddForeignKey
ALTER TABLE "ReprezentantFirma" ADD CONSTRAINT "ReprezentantFirma_persoanaId_fkey" FOREIGN KEY ("persoanaId") REFERENCES "Persoana"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReprezentantFirma" ADD CONSTRAINT "ReprezentantFirma_firmaId_fkey" FOREIGN KEY ("firmaId") REFERENCES "Firma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Angajat" ADD CONSTRAINT "Angajat_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "RolAngajat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
