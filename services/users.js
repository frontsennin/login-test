import axios from "axios";

const baseUrl = "https://dummyjson.com";

class UserService {
  constructor() {
    this.axios = axios.create();
  }

  async getAll() {
    const response = await axios.get(`${baseUrl}/users`);

    if (response.status == 200) {
      return response.data;
    } else {
      return null;
    }
  }

  async getById(id) {
    const response = await axios.get(`${baseUrl}/users/${id}`);

    if (response.status == 200) {
      return response.data;
    } else {
      return null;
    }
  }
}

export default UserService;
