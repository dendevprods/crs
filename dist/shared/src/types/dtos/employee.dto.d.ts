export interface CreateEmployeeDto {
    fullName: string;
    phone?: string | null;
    email?: string | null;
    departmentId?: number | null;
    roleId?: number | null;
}
export type UpdateEmployeeDto = Partial<CreateEmployeeDto>;
