export interface User {
    id: number;
    username: string;
    name: string;
    permissions: Array<string>;
    jwt: string;
}