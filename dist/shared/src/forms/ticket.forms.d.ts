import { Client, CompanyRepresentative, Employee, OrderPriority, OrderStatus } from "generated/prisma";
import { CreateTicketDto, UpdateTicketStatusDto, AssignEmployeesDto } from "../types/dtos/ticket.dto";
import { ExpandedClient, ExpandedCompanyRepresentative, ExpandedEmployee } from "../types/prisma.types";
export type TicketForm = {
    equipmentDescription: string;
    imageUrl: string;
    priority: OrderPriority;
    client: Client | ExpandedClient | null;
    representative: CompanyRepresentative | ExpandedCompanyRepresentative | null;
    status: OrderStatus;
    estimatedCost: number;
    estimatedDeliveryDate: string | null;
    estimatedExecutionTime: number;
    observations: string;
    employees: (Employee | ExpandedEmployee)[];
};
export type UpdateTicketStatusForm = {
    status: OrderStatus;
};
export type AssignEmployeesForm = {
    employees: (Employee | ExpandedEmployee)[];
};
export declare const getDefaultTicketForm: () => TicketForm;
export declare const getDefaultUpdateTicketStatusForm: () => UpdateTicketStatusForm;
export declare const getDefaultAssignEmployeesForm: () => AssignEmployeesForm;
export declare const convertTicketFormToDto: (form: TicketForm) => CreateTicketDto;
export declare const convertUpdateTicketStatusFormToDto: (form: UpdateTicketStatusForm) => UpdateTicketStatusDto;
export declare const convertAssignEmployeesFormToDto: (form: AssignEmployeesForm) => AssignEmployeesDto;
