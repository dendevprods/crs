import { ItemType } from "generated/prisma";
import { CreateTicketItemDto, UpdateTicketItemDto, CreateBulkTicketItemsDto } from "../types/dtos/ticket-item.dto";
export type TicketItemForm = {
    ticketId: number;
    type: ItemType;
    productId: number;
    serviceId: number;
    quantity: number;
};
export type UpdateTicketItemForm = {
    quantity: number;
};
export type BulkTicketItemsForm = {
    ticketId: number;
    items: TicketItemForm[];
};
export declare const getDefaultTicketItemForm: () => TicketItemForm;
export declare const getDefaultUpdateTicketItemForm: () => UpdateTicketItemForm;
export declare const getDefaultBulkTicketItemsForm: () => BulkTicketItemsForm;
export declare const convertTicketItemFormToDto: (form: TicketItemForm) => CreateTicketItemDto;
export declare const convertUpdateTicketItemFormToDto: (form: UpdateTicketItemForm) => UpdateTicketItemDto;
export declare const convertBulkTicketItemsFormToDto: (form: BulkTicketItemsForm) => CreateBulkTicketItemsDto;
