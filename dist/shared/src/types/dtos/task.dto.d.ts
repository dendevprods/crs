import { TaskStatus } from "generated/prisma";
export interface CreateTaskDto {
    ticketId: number;
    title: string;
    description?: string | null;
    status?: TaskStatus;
    dueDate?: string | null;
    assigneeId?: number | null;
}
export type UpdateTaskDto = Partial<Omit<CreateTaskDto, 'ticketId'>>;
export interface UpdateTaskStatusDto {
    status: TaskStatus;
}
