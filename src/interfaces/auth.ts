export interface ILoginResponse {
    data: Data;
}

interface Data {
    user: IUser;
    accessToken?: string;
    refreshToken?: string;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    username: string;
    dob: Date;
    type: number;
    avatar: string;
    verified: boolean;
    createdAt: string;
    updatedAt: string;
    accessToken?: string;
}


export interface IAuthContext {
    user: IUser | null,
    setUser: (value: IUser) => void,
    onLogout: () => void
}
