import { Employee } from "generated/prisma";
import { ExpandedEmployee, ExpandedEmployeeWithTickets } from "../types/prisma.types";
export declare function isExpandedEmployeeBase(emp: Employee | ExpandedEmployee): emp is ExpandedEmployee;
export declare function isExpandedEmployeeWithTickets(emp: Employee | ExpandedEmployee): emp is ExpandedEmployeeWithTickets;
