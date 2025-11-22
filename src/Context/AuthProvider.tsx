import { useEffect, useState } from "react";
import { api } from "../services/api";
import Cookies from "js-cookie";
import { AuthContext, type UserProps } from "./AuthContext";


const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps>(null)
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const userId = Cookies.get("userId")

  useEffect(() => {

    if(userId){
      api.get("/api/user/me")
      .then(res => {
        setUser(res.data.user)
        setIsLogin(true)
      })
      .catch(() => {
        setUser(null)
        setIsLogin(false)
      })
    }

  }, [userId])



  return (
    <AuthContext.Provider value={{ user, setUser, setIsLogin, isLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
