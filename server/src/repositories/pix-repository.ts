export interface PixCreateData {
    name: string;
    value: any;
    message?: string | null
}

export interface PixRepository {
    create: (data: PixCreateData) => Promise<void>;
    getAll: () => Promise<PixCreateData[]>;
    retrieveApproved: () => Promise<PixCreateData[]>;
}