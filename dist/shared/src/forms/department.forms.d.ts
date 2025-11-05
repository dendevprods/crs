import { Employee } from "generated/prisma";
import { CreateDepartmentDto } from "../types/dtos/department.dto";
import { ExpandedEmployee } from "../types/prisma.types";
export type DepartmentForm = {
    name: string;
    description: string;
    employees: (Employee | ExpandedEmployee)[];
};
export declare const getDefaultDepartmentForm: () => DepartmentForm;
export declare const convertDepartmentFormToDto: (form: DepartmentForm) => CreateDepartmentDto;
