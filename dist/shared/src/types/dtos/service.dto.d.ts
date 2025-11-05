export interface CreateServiceDto {
    serviceCode?: string | null;
    name: string;
    description?: string | null;
    price: number;
    duration?: number | null;
    observations?: string | null;
}
export type UpdateServiceDto = Partial<CreateServiceDto>;
