export type ModalPropTypes = {
    open: boolean;
    handleOpen: () => void;
    id: number;
    url: string;
    refetch: () => {};
};

export interface MutationParams {
    url: string;
    data: {
        title: string;
        options: string[];
    };
}
