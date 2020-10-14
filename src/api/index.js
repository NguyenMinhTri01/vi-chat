import axios from "axios";

export const api = axios.create({
  baseURL : "http://localhost:5000"
})
//https://vexeonline-api.herokuapp.com/api
//http://localhost:5000/api