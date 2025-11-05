-- DropForeignKey
ALTER TABLE "Angajat" DROP CONSTRAINT "Angajat_departamentId_fkey";

-- DropForeignKey
ALTER TABLE "Angajat" DROP CONSTRAINT "Angajat_rolId_fkey";

-- AlterTable
ALTER TABLE "Angajat" ALTER COLUMN "departamentId" DROP NOT NULL,
ALTER COLUMN "rolId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Angajat" ADD CONSTRAINT "Angajat_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "RolAngajat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Angajat" ADD CONSTRAINT "Angajat_departamentId_fkey" FOREIGN KEY ("departamentId") REFERENCES "Departament"("id") ON DELETE SET NULL ON UPDATE CASCADE;
