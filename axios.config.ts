import axios from "axios";

export const user = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_ENVIROMENT === "development"
      ? process.env.NEXT_PUBLIC_DEV_BASE_URL
      : process.env.NEXT_PUBLIC_PROD_BASE_URL,
});
