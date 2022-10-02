export interface LoginData {
    mail:   string;
    password: string;
}

export interface LoginResponse {
    userName: string;
    userId:   string;
}

export interface UserAPI {
    userId:   string;
    userData: UserData;
}

export interface UserData {
    name:    string;
    mail:    string;
    phone:   string;
    surname: string;
}

