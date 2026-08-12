// rest calls
import axios from "axios";

// skip url based on the register / auth and method post
const skipUrls = ["/users", "/auth"];
const skipMethods = ["post"];
// to add the token in the header for all the api calls which we will make using this instance except for the register and login call apis
// method to skip them and return true / false
const shouldSkip = (url, method) => {
  return skipUrls.includes(url) && skipMethods.includes(method);
};
const API = axios.create({
  baseURL: "/api", // base url for all the api calls --> i will use the proxy --> can anyone predict the base url for all the api calls --> http://localhost:5000/api ---> NO.
  timeout: 3000, // 3 seconds --> if the api call is taking more than 3 seconds then it will throw an error.
  headers: {
    "Content-Type": "application/json", // to specify the content type of the request body which is being sent to the backend. ---> it will hold common headers specs.
  },
}); // axios instance --> will respect base url, timeout and headers for all the api calls which we will make using this instance.

API.interceptors.request.use((config) => {
  // to add the token in the header for all the api calls which we will make using this instance.
  // this token should not be added for register and login call apis

  if (shouldSkip(config.url, config.method)) {
    return config; // to return the config object which will be used by axios to make the api call to the backend without adding the token in the header for register and login call apis.
  } else {
    const token = localStorage.getItem("token"); // to get the token from the local storage which is stored after login.
    if (token) {
      config.headers["x-auth-token"] = `${token}`; // to add the token in the header for all the api calls which we will make using this instance.
    }
    return config; // to return the config object which will be used by axios to make the api call to the backend.
  }
});

export default API;
