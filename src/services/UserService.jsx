import axios from "axios";

export default class UserServices {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_LOGIN_API,
    });
  }

  async login(dados) {
    const { data } = await this.axios.post("/login", dados);

    if (data) {
      localStorage.setItem("token", data.token);
      return true;
    }
    return false;
  }

  async register(dados) {
    const { data } = await this.axios.post("/register", dados);

    if (data) {
      localStorage.setItem("name", data.name);
      localStorage.setItem("email", data.email);
      localStorage.setItem("password", data.password);

      return true;
    }
    return false;
  }

  async edit(dados) {
    const { data } = await this.axios.post("/forgot-password", dados);

    if (data) {
      return data;
    }
  }

  async user() {
    const token = localStorage.getItem("token");

    try {
      const response = await this.axios.get("/user/me", {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response;
    } catch (err) {
      throw new Error("Erro ao obter usuário: " + err.message);
    }
  }

  async deleteUser() {
    const token = localStorage.getItem("token");

    try {
      const response = await this.axios.delete("/user", {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response;
    } catch (err) {
      throw new Error("Erro ao deletar usuário: " + err.message);
    }
  }

  usuarioAutenticado() {
    return localStorage.getItem("token") != undefined ? true : false;
  }

  async logout() {
    localStorage.removeItem("token");
  }
}
