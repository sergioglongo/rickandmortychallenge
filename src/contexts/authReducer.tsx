import { UserData } from '../interfaces/userInterfaces';

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    userId: string | null;
    errorMessage: string;
    user: UserData | null;
}

type AuthAction =
    | { type: 'signIn', payload: { userId: string, user: UserData } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logout' }
    | { type: 'userUpdate', payload: {user: UserData }}


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                status: 'not-authenticated',
                userId: null,
                errorMessage: action.payload
            }

        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            };

        case 'signIn':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                userId: action.payload.userId,
                user: action.payload.user
            }
        case 'userUpdate':
                return {
                    ...state,
                    user: action.payload.user
            }
        case 'logout':
        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',
                userId: null,
                user: null
            }

        default:
            return state;
    }


}


