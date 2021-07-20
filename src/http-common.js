import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.1.90:8089/api",
  headers: {
    "Content-type": "application/json"
  }
});