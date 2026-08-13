const authState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem("token"),
  status: "",
  loading: false,
  error: null,
};
// whatever the data we need it we have declared it here and we can use it in the reducer and actions.
export default authState;
