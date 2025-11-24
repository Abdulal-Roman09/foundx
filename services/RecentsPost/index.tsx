import { delay } from "@/utils/dely";
import envConfig from "./../../config/envConfig";

export const getRecentPost = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=createdAt&limit=9`
  );
 await delay(6000);
  return res.json();
};
