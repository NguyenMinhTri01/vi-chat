import axios from "axios";

export const api = axios.create({
  baseURL : "https://vichat-be.herokuapp.com"
})
//https://vichat-be.herokuapp.com/
//http://localhost:5000/api