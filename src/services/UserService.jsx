import axios from 'axios';

export default class UserServices {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_LOGIN_API
        })
    }

    async login (dados) {
        const {data} = await this.axios.post('/login', dados);

        if (data) {
            localStorage.setItem('token', data.token);

            return true;
        }
        return false;
    }

    usuarioAutenticado(){
        return localStorage.getItem('token') != undefined ? true : false;
    }
} 