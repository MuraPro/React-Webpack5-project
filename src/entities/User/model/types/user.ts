export interface User {
    id: string;
    username: string;
    avatar?: string;
    password?: string;
    role?: string;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
