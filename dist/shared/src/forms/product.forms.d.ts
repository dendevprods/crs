import { ProductStatus } from "generated/prisma";
import { CreateProductDto } from "../types/dtos/product.dto";
export type ProductForm = {
    productCode: string;
    name: string;
    description: string;
    category: string;
    quantity: number;
    unitPrice: number;
    entryDate: string;
    supplier: string;
    status: ProductStatus;
    weight: number;
    observations: string;
    serialNumber: string;
};
export declare const getDefaultProductForm: () => ProductForm;
export declare const convertProductFormToDto: (form: ProductForm) => CreateProductDto;
