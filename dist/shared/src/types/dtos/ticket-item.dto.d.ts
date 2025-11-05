import { ItemType } from "generated/prisma";
export interface CreateTicketItemDto {
    ticketId: number;
    type: ItemType;
    productId?: number | null;
    serviceId?: number | null;
    quantity: number;
}
export interface UpdateTicketItemDto {
    quantity?: number;
}
export interface CreateBulkTicketItemsDto {
    ticketId: number;
    items: CreateTicketItemDto[];
}
