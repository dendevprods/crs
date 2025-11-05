export interface CrudQueryDto {
    page?: number;
    limit?: number;
    includeDetails?: boolean;
    sort?: string;
    search?: string;
    filters?: string;
}
