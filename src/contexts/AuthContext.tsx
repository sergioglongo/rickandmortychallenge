import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthAPI from '../api/authAPI';

import { UserData, LoginResponse, LoginData, UserAPI } from '../interfaces/userInterfaces';
import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
    errorMessage: string;
    user: UserData | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInicialState: AuthState = {
    status: 'checking',
    userId: null,
    user: null,
    errorMessage: ''
}



export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any)=> {

    const [ state, dispatch ] = useReducer( authReducer, authInicialState);

    useEffect(() => {
        checkUser();
    }, [])

    const checkUser = async() => {
        const userId = await AsyncStorage.getItem('userId');
        
        // No userId, no autenticado
        if ( !userId ) return dispatch({ type: 'notAuthenticated' });

        // Hay userId
        // const resp = await AuthAPI.get('/login');
        const userData = await AuthAPI.get<UserAPI>(`/user/${userId}`)
        if ( userData.status !== 200 ) {
            return dispatch({ type: 'notAuthenticated' });
        }
        
        await AsyncStorage.setItem('userId', userData.data.userId );
        dispatch({ 
            type: 'signIn',
            payload: {
                userId: userData.data.userId,
                user: userData.data.userData
            }
        });
    }


    const signIn = async({ mail, password }: LoginData ) => {
        
        try {
         
            const { data } = await AuthAPI.post<LoginResponse>('/login', { mail, password });
            const userData = await AuthAPI.get<UserAPI>(`/user/${data.userId}`)
            dispatch({ 
                type: 'signIn',
                payload: {
                    userId: data.userId,
                    user: userData.data.userData
                }
            });

            await AsyncStorage.setItem('userId', data.userId );

        } catch (error:any) {
            dispatch({ 
                type: 'addError', 
                payload: error.response.data.msg || 'Información incorrecta'
            })
        }
    };
    
 
    const logOut = async() => {
        await AsyncStorage.removeItem('userId');
        dispatch({ type: 'logout' });
        console.log("Deslogueado");
        
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    )

}


