import { CreateServiceDto } from "../types/dtos/service.dto";
export type ServiceForm = {
    serviceCode: string;
    name: string;
    description: string;
    price: number;
    duration: number;
    observations: string;
};
export declare const getDefaultServiceForm: () => ServiceForm;
export declare const convertServiceFormToDto: (form: ServiceForm) => CreateServiceDto;
