import axios from "axios";

// replace with your Render backend URL after deploy
const API = axios.create({
  baseURL: "https://nfl-bets-backend.onrender.com/api",
});

export default API;
