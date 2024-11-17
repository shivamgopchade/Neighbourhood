import { getAuth } from "firebase/auth";
import getApp from "./init.js";

export default getAuth = () => {
  const app = getApp();
  return getAuth(app);
};
