import { TicketItemForm, UpdateTicketItemForm, BulkTicketItemsForm } from '../forms/ticket-item.forms';
import { FormErrors } from '../errors/validation.error';
export declare const validateTicketItemForm: (form: TicketItemForm) => FormErrors<TicketItemForm>;
export declare const validateUpdateTicketItemForm: (form: UpdateTicketItemForm) => FormErrors<UpdateTicketItemForm>;
export declare const validateBulkTicketItemsForm: (form: BulkTicketItemsForm) => FormErrors<BulkTicketItemsForm>;
