import axios from "axios";

export function useApi() {
    const api = axios.create({
        url: "https://localhost:7205/api/",
        withCredentials: true
    });

    return { api }
}