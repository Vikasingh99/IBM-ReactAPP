// First url will handled by vite.config.js , 2nd call will handled
import API from "../../../utils/api";

export const registerUserService = async (formData) => {
  // export : is eq to public in java
  // const : is eq to final in java
  // async : is eq to / mainly preffered for performing asynchronous operations like api calls to the backend.
  // formData : arg

  try {
    const res = await API.post("/users", formData); // await : it will wait for the api call to complete and then it will return the response from the backend and we will store it in the res variable.
    // res : response from Backend
    // API: axios instance
    // post : post method
    // "/users" : endpoint for signin the user in the backend
    // are we providing the complete end point ? --> No --> who will provide the complete end point ? --> API instance will provide the complete end point by adding the base url which is defined in the API instance and then it will add the endpoint which we are providing in the post method.
    // axios + proxy from vite config --> it will make the api call to the complete end point which is http://localhost:5000/api/users
    return { data: res.data, status: res.status }; // we will return the data and status from the backend to the component where we are calling this signupUser function to perform some actions based on the response from the backend.
  } catch (error) {
    console.log(error);
    throw { data: error.response.data, status: error.response.status }; // we will return the error data and status from the backend to the component where we are calling this signupUser function to perform some actions based on the response from the backend.
  }
};

// export const loginUser

export const loginUser = async (formData) => {
  try {
    const res = await API.post("/auth", formData); // endpoint for logging in the user in the backend
    return { data: res.data, status: res.status };
  } catch (error) {
    console.log(error);
    throw { data: error.response.data, status: error.response.status };
  }
};
