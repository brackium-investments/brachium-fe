import { user } from "@/axios.config";

export const getLatestCryptoCurData = async () => {
  return await user.get("/investors/get-crypto-data");
};
