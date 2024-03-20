export interface User {
    name: string;
    address: string;
    email: string;
    birthday: string;
    username:string;
    sex:string
}

export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
}
