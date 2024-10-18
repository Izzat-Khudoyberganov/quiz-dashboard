export interface TestDataI {
    ID: number;
    Title: string;
    Options: string;
}

export interface RoutesDataI {
    id: number;
    href: string;
    link: string;
}

export type ErrorBoundaryPropTypes = {
    title: string;
    message: string;
};
