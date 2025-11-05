/*
  Warnings:

  - You are about to drop the `ActivityLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Angajat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ComentariuTask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ComentariuTicket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Departament` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Firma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Persoana` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ReprezentantFirma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RolAngajat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Serviciu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TaskTicket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TicketItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TicketAngajati` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('PRODUCT', 'SERVICE');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('NEW', 'TAKEN', 'IN_PROGRESS', 'APPROVED', 'IN_TESTING', 'COMPLETED', 'CONTACT_CLIENT', 'WAITING_CLIENT', 'DELIVERED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "OrderPriority" AS ENUM ('NORMAL', 'URGENT');

-- CreateEnum
CREATE TYPE "ClientType" AS ENUM ('PERSON', 'COMPANY');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('AVAILABLE', 'UNAVAILABLE', 'DEPLETED', 'ON_ORDER', 'DEFECTIVE');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('TODO', 'COMPLETED');

-- DropForeignKey
ALTER TABLE "ActivityLog" DROP CONSTRAINT "ActivityLog_autorId_fkey";

-- DropForeignKey
ALTER TABLE "ActivityLog" DROP CONSTRAINT "ActivityLog_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "Angajat" DROP CONSTRAINT "Angajat_departamentId_fkey";

-- DropForeignKey
ALTER TABLE "Angajat" DROP CONSTRAINT "Angajat_rolId_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_firmaId_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_persoanaId_fkey";

-- DropForeignKey
ALTER TABLE "ComentariuTask" DROP CONSTRAINT "ComentariuTask_autorId_fkey";

-- DropForeignKey
ALTER TABLE "ComentariuTask" DROP CONSTRAINT "ComentariuTask_taskId_fkey";

-- DropForeignKey
ALTER TABLE "ComentariuTicket" DROP CONSTRAINT "ComentariuTicket_autorId_fkey";

-- DropForeignKey
ALTER TABLE "ComentariuTicket" DROP CONSTRAINT "ComentariuTicket_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "ReprezentantFirma" DROP CONSTRAINT "ReprezentantFirma_firmaId_fkey";

-- DropForeignKey
ALTER TABLE "ReprezentantFirma" DROP CONSTRAINT "ReprezentantFirma_persoanaId_fkey";

-- DropForeignKey
ALTER TABLE "TaskTicket" DROP CONSTRAINT "TaskTicket_responsabilId_fkey";

-- DropForeignKey
ALTER TABLE "TaskTicket" DROP CONSTRAINT "TaskTicket_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_reprezentantPersoanaId_reprezentantFirmaId_fkey";

-- DropForeignKey
ALTER TABLE "TicketItem" DROP CONSTRAINT "TicketItem_produsId_fkey";

-- DropForeignKey
ALTER TABLE "TicketItem" DROP CONSTRAINT "TicketItem_serviciuId_fkey";

-- DropForeignKey
ALTER TABLE "TicketItem" DROP CONSTRAINT "TicketItem_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "_TicketAngajati" DROP CONSTRAINT "_TicketAngajati_A_fkey";

-- DropForeignKey
ALTER TABLE "_TicketAngajati" DROP CONSTRAINT "_TicketAngajati_B_fkey";

-- DropTable
DROP TABLE "ActivityLog";

-- DropTable
DROP TABLE "Angajat";

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "ComentariuTask";

-- DropTable
DROP TABLE "ComentariuTicket";

-- DropTable
DROP TABLE "Departament";

-- DropTable
DROP TABLE "Firma";

-- DropTable
DROP TABLE "Persoana";

-- DropTable
DROP TABLE "Produs";

-- DropTable
DROP TABLE "ReprezentantFirma";

-- DropTable
DROP TABLE "RolAngajat";

-- DropTable
DROP TABLE "Serviciu";

-- DropTable
DROP TABLE "TaskTicket";

-- DropTable
DROP TABLE "Ticket";

-- DropTable
DROP TABLE "TicketItem";

-- DropTable
DROP TABLE "_TicketAngajati";

-- DropEnum
DROP TYPE "PrioritateComanda";

-- DropEnum
DROP TYPE "StareComanda";

-- DropEnum
DROP TYPE "StatusProdus";

-- DropEnum
DROP TYPE "StatusTask";

-- DropEnum
DROP TYPE "TipClient";

-- DropEnum
DROP TYPE "TipItem";

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "type" "ClientType" NOT NULL,
    "personId" INTEGER,
    "companyId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persons" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_representatives" (
    "personId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "company_representatives_pkey" PRIMARY KEY ("personId","companyId")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "taxId" TEXT,
    "headquarters" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "roleId" INTEGER,
    "departmentId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" SERIAL NOT NULL,
    "equipmentDescription" TEXT NOT NULL,
    "imageUrl" TEXT,
    "priority" "OrderPriority" NOT NULL DEFAULT 'NORMAL',
    "deliveryDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" INTEGER NOT NULL,
    "personRepresentativeId" INTEGER,
    "companyRepresentativeId" INTEGER,
    "status" "OrderStatus" NOT NULL DEFAULT 'NEW',
    "estimatedCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "finalCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "estimatedDeliveryDate" TIMESTAMP(3),
    "estimatedExecutionTime" INTEGER,
    "observations" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_items" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "type" "ItemType" NOT NULL,
    "productId" INTEGER,
    "serviceId" INTEGER,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "totalCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ticket_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" "TaskStatus" NOT NULL DEFAULT 'TODO',
    "dueDate" TIMESTAMP(3),
    "assigneeId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_comments" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "ticket_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_comments" (
    "id" SERIAL NOT NULL,
    "taskId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "task_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_logs" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER,
    "entity" TEXT NOT NULL,
    "entityId" INTEGER,
    "action" TEXT NOT NULL,
    "details" JSONB,
    "authorId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "productCode" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "quantity" INTEGER,
    "unitPrice" DOUBLE PRECISION,
    "entryDate" TIMESTAMP(3) NOT NULL,
    "supplier" TEXT,
    "status" "ProductStatus" NOT NULL,
    "weight" DOUBLE PRECISION,
    "observations" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "serialNumber" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "serviceCode" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "observations" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TicketEmployees" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_TicketEmployees_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_personId_key" ON "clients"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "clients_companyId_key" ON "clients"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "employee_roles_name_key" ON "employee_roles"("name");

-- CreateIndex
CREATE INDEX "ticket_items_productId_idx" ON "ticket_items"("productId");

-- CreateIndex
CREATE INDEX "ticket_items_serviceId_idx" ON "ticket_items"("serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "ticket_items_id_ticketId_key" ON "ticket_items"("id", "ticketId");

-- CreateIndex
CREATE INDEX "activity_logs_ticketId_idx" ON "activity_logs"("ticketId");

-- CreateIndex
CREATE INDEX "activity_logs_entity_entityId_idx" ON "activity_logs"("entity", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "products_productCode_key" ON "products"("productCode");

-- CreateIndex
CREATE UNIQUE INDEX "products_serialNumber_key" ON "products"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "services_serviceCode_key" ON "services"("serviceCode");

-- CreateIndex
CREATE INDEX "_TicketEmployees_B_index" ON "_TicketEmployees"("B");

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_representatives" ADD CONSTRAINT "company_representatives_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_representatives" ADD CONSTRAINT "company_representatives_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "employee_roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_personRepresentativeId_companyRepresentativeId_fkey" FOREIGN KEY ("personRepresentativeId", "companyRepresentativeId") REFERENCES "company_representatives"("personId", "companyId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_items" ADD CONSTRAINT "ticket_items_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_items" ADD CONSTRAINT "ticket_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_items" ADD CONSTRAINT "ticket_items_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_comments" ADD CONSTRAINT "ticket_comments_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_comments" ADD CONSTRAINT "ticket_comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_comments" ADD CONSTRAINT "task_comments_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_comments" ADD CONSTRAINT "task_comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TicketEmployees" ADD CONSTRAINT "_TicketEmployees_A_fkey" FOREIGN KEY ("A") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TicketEmployees" ADD CONSTRAINT "_TicketEmployees_B_fkey" FOREIGN KEY ("B") REFERENCES "tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
