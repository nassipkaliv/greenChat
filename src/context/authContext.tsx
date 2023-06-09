import { useState, useContext, createContext } from "react";
import { AuthContextType, IuserData } from "../@types/auth";

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: any) {
  const [userData, setUserData] = useState<IuserData>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userData.username || !userData.email || !userData.password) return
    console.log('error');


  return (
    <AuthContext.Provider value={{ userData, setUserData, errorMessage, isError, handleSubmit }}>
      {children}
    </AuthContext.Provider>
  )
  }
}