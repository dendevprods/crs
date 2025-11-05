import { Department, EmployeeRole } from "generated/prisma";
import { CreateEmployeeDto } from "../types/dtos/employee.dto";
export type EmployeeForm = {
    fullName: string;
    phone: string;
    email: string;
    department: Department | null;
    role: EmployeeRole | null;
};
export declare const getDefaultEmployeeForm: () => EmployeeForm;
export declare const convertEmployeeFormToDto: (form: EmployeeForm) => CreateEmployeeDto;
