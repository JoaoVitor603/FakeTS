import axios from "axios";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const axiosConfig = axios.create({
  baseURL: "https://private-ceaa4f-faketimesheet.apiary-mock.com",
  headers: defaultHeaders,
});

class HttpClient {
  static api = axiosConfig;
}

export default HttpClient;
