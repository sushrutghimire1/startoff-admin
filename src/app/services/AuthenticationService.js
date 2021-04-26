import axios from "axios";

class AuthenticationService {
  signin = (username, password) => {
    return axios
      .post("https://startoff-main.herokuapp.com/api/auth/signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.jwt) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  signOut() {
    localStorage.removeItem("user");
  }

  register = async (firstname, lastname, username, email, password) => {
    return axios.post("https://startoff-main.herokuapp.com/api/auth/signup", {
      firstname,
      lastname,
      username,
      email,
      password,
    });
  };

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthenticationService();
