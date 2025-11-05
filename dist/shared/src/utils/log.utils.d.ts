interface SingleEntityLogParams {
    action: string;
    entitySingular: string;
    count: never;
    [key: string]: any;
}
interface MultipleEntityLogParams {
    action: string;
    entityPlural: string;
    count: number;
    [key: string]: any;
}
export type LogMessageParams = SingleEntityLogParams | MultipleEntityLogParams;
export declare const getLogMessageKeys: (action: string, entity: string, count?: number) => {
    translationKey: string;
    params: LogMessageParams;
};
export {};
