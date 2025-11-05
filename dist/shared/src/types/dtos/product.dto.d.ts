import { ProductStatus } from "generated/prisma";
export interface CreateProductDto {
    productCode?: string | null;
    name: string;
    description?: string | null;
    category: string;
    quantity?: number | null;
    unitPrice?: number | null;
    entryDate: Date;
    supplier?: string | null;
    status: ProductStatus;
    weight?: number | null;
    observations?: string | null;
    serialNumber?: string | null;
}
export type UpdateProductDto = Partial<CreateProductDto>;
