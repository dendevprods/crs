-- CreateIndex
CREATE INDEX "ActivityLog_ticketId_idx" ON "ActivityLog"("ticketId");

-- CreateIndex
CREATE INDEX "ActivityLog_entitate_entitateId_idx" ON "ActivityLog"("entitate", "entitateId");
