import { useState } from 'react'
import { useContext, createContext } from "react";
import { setCookie, getCookie } from '../utils/cookieHandler'
import { AuthContextType, IuserData } from '../@types/auth';


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

    setTimeout(() => {
      setIsError(false)
    }, 3500);
  }
  return (
    <AuthContext.Provider value={{ userData, setUserData, errorMessage, isError, handleSubmit }}>
      {children}
    </AuthContext.Provider>
  )

}