export interface CreateDepartmentDto {
    name: string;
    description?: string | null;
    employeeIds?: number[];
}
export type UpdateDepartmentDto = Partial<CreateDepartmentDto>;
