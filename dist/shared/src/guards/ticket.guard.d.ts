import { Ticket } from "generated/prisma";
import { ExpandedTicket } from "../types/prisma.types";
export declare function isExpandedTicket(ticket: Ticket | ExpandedTicket): ticket is ExpandedTicket;
