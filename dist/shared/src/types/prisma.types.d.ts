import { Prisma } from '../../../generated/prisma';
import { INCLUDE_ACTIVITY_LOG, INCLUDE_CLIENT_DETAILS, INCLUDE_DEPARTMENT_DETAILS, INCLUDE_EMPLOYEE_BASE, INCLUDE_EMPLOYEE_WITH_TICKETS, INCLUDE_COMPANY_REPRESENTATIVES, INCLUDE_REPRESENTATIVE, INCLUDE_TASK_DETAILS, INCLUDE_TICKET_DETAILS, INCLUDE_TICKET_BASE, INCLUDE_ROLE_WITH_EMPLOYEES } from '../includes/prisma.includes';
export type ExpandedTicket = Prisma.TicketGetPayload<{
    include: typeof INCLUDE_TICKET_DETAILS;
}>;
export type ExpandedTicketItem = Prisma.TicketItemGetPayload<{
    include: typeof INCLUDE_TICKET_BASE;
}>;
export type ExpandedClient = Prisma.ClientGetPayload<{
    include: typeof INCLUDE_CLIENT_DETAILS;
}>;
export type ExpandedCompany = Prisma.CompanyGetPayload<{
    include: typeof INCLUDE_COMPANY_REPRESENTATIVES;
}>;
export type ExpandedDepartment = Prisma.DepartmentGetPayload<{
    include: typeof INCLUDE_DEPARTMENT_DETAILS;
}>;
export type ExpandedEmployeeBase = Prisma.EmployeeGetPayload<{
    include: typeof INCLUDE_EMPLOYEE_BASE;
}>;
export type ExpandedEmployeeWithTickets = Prisma.EmployeeGetPayload<{
    include: typeof INCLUDE_EMPLOYEE_WITH_TICKETS;
}>;
export type ExpandedEmployee = ExpandedEmployeeBase | ExpandedEmployeeWithTickets;
export type ExpandedCompanyRepresentative = Prisma.CompanyRepresentativeGetPayload<typeof INCLUDE_REPRESENTATIVE>;
export type ExpandedActivityLog = Prisma.ActivityLogGetPayload<{
    include: typeof INCLUDE_ACTIVITY_LOG;
}>;
export type ExpandedTask = Prisma.TaskGetPayload<{
    include: typeof INCLUDE_TASK_DETAILS;
}>;
export type ExpandedEmployeeRole = Prisma.EmployeeRoleGetPayload<{
    include: typeof INCLUDE_ROLE_WITH_EMPLOYEES;
}>;
