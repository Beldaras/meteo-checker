import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true, // Pour envoyer les cookies au serveur automatiquement
});

export default instance;