import { getLatestCryptoCurData } from "@/services/cryptoDataService";

export const getCryptoDataDispatch = () => async () => {
  try {
    const response = await getLatestCryptoCurData();
  } catch (err) {
    console.log(err);
  }
};
