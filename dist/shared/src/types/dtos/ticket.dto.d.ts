import { OrderPriority, OrderStatus } from "generated/prisma";
export interface CreateTicketDto {
    equipmentDescription: string;
    imageUrl?: string | null;
    priority?: OrderPriority;
    clientId: number;
    personRepresentativeId?: number | null;
    companyRepresentativeId?: number | null;
    status?: OrderStatus;
    estimatedCost?: number | null;
    estimatedDeliveryDate?: string | null;
    estimatedExecutionTime?: number | null;
    observations?: string | null;
    employeeIds?: number[];
}
export type UpdateTicketDto = Partial<CreateTicketDto>;
export interface UpdateTicketStatusDto {
    status: OrderStatus;
}
export interface AssignEmployeesDto {
    employeeIds: number[];
}
