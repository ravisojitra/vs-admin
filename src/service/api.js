import Axios from "axios";
const defaultAxios = Axios.create({
  headers: { "Content-type": "application/json" },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export const postRavisojitra = ({
  data = {},
  headers = {},
  params = {},
} = {}) => {
  return defaultAxios({
    url: "https://api.github.com/users/ravisojitra",
    method: "post",
    params,
    headers,
    data: { test: "ok", test2: "test", ...data },
  });
};
