/*
  Warnings:

  - Added the required column `actualizatLa` to the `Firma` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizatLa` to the `Persoana` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizatLa` to the `TicketItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Firma" ADD COLUMN     "actualizatLa" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Persoana" ADD COLUMN     "actualizatLa" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "RolAngajat" ADD COLUMN     "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "TicketItem" ADD COLUMN     "actualizatLa" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
