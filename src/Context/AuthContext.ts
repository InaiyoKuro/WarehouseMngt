import { createContext } from "react";

export type UserProps = {
  id: number;
  username: string;
  role: string;
} | null

type AuthContextProps = {
  user: UserProps;
  setUser: (user: UserProps) => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)
