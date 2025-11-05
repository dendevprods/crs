import { Company } from "generated/prisma";
import { ExpandedCompany } from "../types/prisma.types";
export declare function isExpandedCompany(company: Company | ExpandedCompany): company is ExpandedCompany;
