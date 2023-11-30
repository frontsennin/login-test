import axios from "axios";

const baseUrl = "https://dummyjson.com";

class AuthService {
  constructor() {
    this.axios = axios.create();
  }

  async makeLogin(body) {
    const response = await axios.post(`${baseUrl}/auth/login`, body);

    if (response.status == 200) {
      return response.data;
    } else {
      throw new Error("Erro ao carregar os dados");
    }
  }
}

export default AuthService;
