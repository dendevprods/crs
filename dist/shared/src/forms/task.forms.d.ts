import { Employee, TaskStatus } from "generated/prisma";
import { CreateTaskDto } from "../types/dtos/task.dto";
import { ExpandedEmployee } from "../types/prisma.types";
export type TaskForm = {
    ticketId: number;
    title: string;
    description: string;
    status: TaskStatus;
    dueDate: string | null;
    assignee: Employee | ExpandedEmployee | null;
};
export declare const getDefaultTaskForm: () => TaskForm;
export declare const convertTaskFormToDto: (form: TaskForm) => CreateTaskDto;
