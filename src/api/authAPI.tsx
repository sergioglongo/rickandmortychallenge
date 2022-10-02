import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://razbaqr77h.execute-api.sa-east-1.amazonaws.com/prod';

const authAPI = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        "x-api-key": "7HckdEx0dx67Kor9pPGAB7WtYCyd3r5J70Sp0smo",
    },
});



export default authAPI;