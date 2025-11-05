export interface CreatePersonDto {
    fullName: string;
    phone?: string | null;
    email?: string | null;
    address?: string | null;
}
export type UpdatePersonDto = Partial<CreatePersonDto>;
export interface RepresentativeDto extends UpdatePersonDto {
    personId: number | null;
}
