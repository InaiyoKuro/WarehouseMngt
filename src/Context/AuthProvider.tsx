import { useEffect, useState } from "react";
import { api } from "../services/api";
import Cookies from "js-cookie";
import { AuthContext, type UserProps } from "./AuthContext";


const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps>(null)
  const userId = Cookies.get("userId")

  useEffect(() => {

    if(userId){
      api.get("/api/auth/me")
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null))
    }

  }, [userId])



  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
