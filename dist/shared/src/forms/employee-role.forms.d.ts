import { Employee } from "generated/prisma";
import { CreateEmployeeRoleDto } from "../types/dtos/employee-role.dto";
import { ExpandedEmployee } from "../types/prisma.types";
export type EmployeeRoleForm = {
    name: string;
    description: string;
    employees: (Employee | ExpandedEmployee)[];
};
export declare const getDefaultEmployeeRoleForm: () => EmployeeRoleForm;
export declare const convertEmployeeRoleFormToDto: (form: EmployeeRoleForm) => CreateEmployeeRoleDto;
