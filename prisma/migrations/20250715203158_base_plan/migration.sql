-- CreateEnum
CREATE TYPE "StareComanda" AS ENUM ('NOUA', 'PRELUATA', 'CONTACT_CLIENT', 'ASTEPTA_CLIENT', 'APROBATA', 'IN_LUCRU', 'IN_TESTARE', 'FINALIZATA', 'LIVRATA', 'ANULATA');

-- CreateEnum
CREATE TYPE "PrioritateComanda" AS ENUM ('NORMALA', 'URGENTA');

-- CreateEnum
CREATE TYPE "TipClient" AS ENUM ('PERSOANA', 'FIRMA');

-- CreateEnum
CREATE TYPE "RolAngajat" AS ENUM ('RECEPTIONER', 'TEHNICIAN', 'MANAGER_SERVICE', 'DIRECTOR', 'CONTABIL', 'CASIER');

-- CreateEnum
CREATE TYPE "StatusProdus" AS ENUM ('DISPONIBIL', 'INDISPONIBIL', 'EPUZAT', 'IN_COMANDA', 'DEFECT');

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "tip" "TipClient" NOT NULL,
    "persoanaId" INTEGER,
    "firmaId" INTEGER,
    "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizatLa" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Persoana" (
    "id" SERIAL NOT NULL,
    "numeComplet" TEXT NOT NULL,
    "telefon" TEXT NOT NULL,
    "email" TEXT,
    "adresa" TEXT,
    "firmaReprezentataId" INTEGER,

    CONSTRAINT "Persoana_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Firma" (
    "id" SERIAL NOT NULL,
    "denumire" TEXT NOT NULL,
    "cui" TEXT,
    "sediu" TEXT,
    "email" TEXT,
    "telefon" TEXT,

    CONSTRAINT "Firma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Departament" (
    "id" SERIAL NOT NULL,
    "nume" TEXT NOT NULL,
    "descriere" TEXT,
    "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizatLa" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Departament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Angajat" (
    "id" SERIAL NOT NULL,
    "numeComplet" TEXT NOT NULL,
    "email" TEXT,
    "telefon" TEXT,
    "rol" "RolAngajat" NOT NULL,
    "departamentId" INTEGER NOT NULL,
    "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizatLa" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Angajat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "echipamentDescriere" TEXT NOT NULL,
    "imagineUrl" TEXT,
    "prioritate" "PrioritateComanda" NOT NULL DEFAULT 'NORMALA',
    "dataPredare" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" INTEGER NOT NULL,
    "angajatId" INTEGER,
    "stare" "StareComanda" NOT NULL DEFAULT 'NOUA',
    "costEstimat" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "costFinal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "produseServicii" JSONB,
    "comentarii" JSONB,
    "taskuri" JSONB,
    "istoricStari" JSONB,
    "estimareTimpExec" INTEGER,
    "observatii" TEXT,
    "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizatLa" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produs" (
    "id" SERIAL NOT NULL,
    "codProdus" TEXT,
    "denumire" TEXT NOT NULL,
    "descriere" TEXT,
    "categorie" TEXT NOT NULL,
    "cantitate" INTEGER,
    "pretUnitar" DOUBLE PRECISION,
    "dataIntrarii" TIMESTAMP(3) NOT NULL,
    "furnizor" TEXT,
    "status" "StatusProdus" NOT NULL,
    "greutate" DOUBLE PRECISION,
    "observatii" TEXT,
    "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizatLa" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Serviciu" (
    "id" SERIAL NOT NULL,
    "codServiciu" TEXT,
    "denumire" TEXT NOT NULL,
    "descriere" TEXT,
    "pret" DOUBLE PRECISION NOT NULL,
    "observatii" TEXT,
    "creatLa" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizatLa" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Serviciu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_persoanaId_key" ON "Client"("persoanaId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_firmaId_key" ON "Client"("firmaId");

-- CreateIndex
CREATE UNIQUE INDEX "Angajat_email_key" ON "Angajat"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Produs_codProdus_key" ON "Produs"("codProdus");

-- CreateIndex
CREATE UNIQUE INDEX "Serviciu_codServiciu_key" ON "Serviciu"("codServiciu");

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_persoanaId_fkey" FOREIGN KEY ("persoanaId") REFERENCES "Persoana"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_firmaId_fkey" FOREIGN KEY ("firmaId") REFERENCES "Firma"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Persoana" ADD CONSTRAINT "Persoana_firmaReprezentataId_fkey" FOREIGN KEY ("firmaReprezentataId") REFERENCES "Firma"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Angajat" ADD CONSTRAINT "Angajat_departamentId_fkey" FOREIGN KEY ("departamentId") REFERENCES "Departament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_angajatId_fkey" FOREIGN KEY ("angajatId") REFERENCES "Angajat"("id") ON DELETE SET NULL ON UPDATE CASCADE;
