import { Client } from "generated/prisma";
import { ExpandedClient } from "../types/prisma.types";
export declare function isExpandedClient(client: Client | ExpandedClient): client is ExpandedClient;
