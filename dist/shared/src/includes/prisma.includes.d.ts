export declare const INCLUDE_PERSON: {
    person: boolean;
};
export declare const INCLUDE_DEPARTMENT: {
    department: boolean;
};
export declare const INCLUDE_ROLE: {
    role: boolean;
};
export declare const INCLUDE_PRODUCT_AND_SERVICE: {
    product: boolean;
    service: boolean;
};
export declare const INCLUDE_EMPLOYEE_BASE: {
    role: boolean;
    department: boolean;
};
export declare const INCLUDE_REPRESENTATIVE: {
    include: {
        person: boolean;
    };
};
export declare const INCLUDE_COMPANY_REPRESENTATIVES: {
    representatives: {
        include: {
            person: boolean;
        };
    };
};
export declare const INCLUDE_CLIENT_DETAILS: {
    company: {
        include: {
            representatives: {
                include: {
                    person: boolean;
                };
            };
        };
    };
    person: boolean;
};
export declare const INCLUDE_DEPARTMENT_DETAILS: {
    employees: {
        include: {
            role: boolean;
            department: boolean;
        };
    };
};
export declare const INCLUDE_TICKET_BASE: {
    product: boolean;
    service: boolean;
};
export declare const INCLUDE_TICKET_DETAILS: {
    employees: {
        include: {
            role: boolean;
            department: boolean;
        };
    };
    client: {
        include: {
            company: {
                include: {
                    representatives: {
                        include: {
                            person: boolean;
                        };
                    };
                };
            };
            person: boolean;
        };
    };
    representative: {
        include: {
            person: boolean;
        };
    };
};
export declare const INCLUDE_EMPLOYEE_WITH_TICKETS: {
    tickets: {
        include: {
            employees: {
                include: {
                    role: boolean;
                    department: boolean;
                };
            };
            client: {
                include: {
                    company: {
                        include: {
                            representatives: {
                                include: {
                                    person: boolean;
                                };
                            };
                        };
                    };
                    person: boolean;
                };
            };
            representative: {
                include: {
                    person: boolean;
                };
            };
        };
    };
    role: boolean;
    department: boolean;
};
export declare const INCLUDE_ACTIVITY_LOG: {
    author: {
        include: {
            role: boolean;
            department: boolean;
        };
    };
};
export declare const INCLUDE_TASK_DETAILS: {
    assignee: {
        include: {
            role: boolean;
            department: boolean;
        };
    };
    taskComments: boolean;
};
export declare const INCLUDE_ROLE_WITH_EMPLOYEES: {
    employees: {
        include: {
            role: boolean;
            department: boolean;
        };
    };
};
