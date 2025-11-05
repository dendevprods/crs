import { HttpStatus } from '@nestjs/common';
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    timestamp: string;
    statusCode?: HttpStatus;
}
export interface SuccessResponse<T> extends ApiResponse<T> {
    success: true;
    data: T;
    message?: never;
}
export interface ErrorResponse extends ApiResponse<never> {
    success: false;
    message: string;
    data?: never;
}
