import axios from "axios";

class UserServices {
  getAllClients() {
    console.log("========================================================F");
    return axios.get("https://reqres.in/api/users");
  }
}

export default new UserServices();
