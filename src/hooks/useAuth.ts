import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if(!ctx) throw new Error("useAuth phải nằm trong AuthProvider")
  return ctx
}