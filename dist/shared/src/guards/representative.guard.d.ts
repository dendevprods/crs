import { CompanyRepresentative } from "generated/prisma";
import { ExpandedCompanyRepresentative } from "../types/prisma.types";
export declare function isExpandedRepresentative(rep: CompanyRepresentative | ExpandedCompanyRepresentative): rep is ExpandedCompanyRepresentative;
