export interface CreateEmployeeRoleDto {
    name: string;
    description?: string | null;
    employeeIds?: number[];
}
export type UpdateEmployeeRoleDto = Partial<CreateEmployeeRoleDto>;
