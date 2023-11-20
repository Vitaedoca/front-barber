import { api } from "../services/api";
import { createContext, useContext, useState, useEffect} from 'react';
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  
  const [ data, setData ] = useState({});
  
  
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;
      
      // Convertendo o valor de isAdmin para um booleano antes de salvar no localStorage
      const isAdmin = Boolean(user.isAdmin);
      
      localStorage.setItem("@barbershop:user", JSON.stringify({ ...user, isAdmin }));
      localStorage.setItem("@barbershop:token", token);
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token, isAdmin });
      
    } catch (error) {
      console.log("deu erro");
    }
  }
  
  function signOut() {
    localStorage.removeItem("@barbershop:token");
    localStorage.removeItem("@barbershop:user");
    setData({});

  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if(avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@barbershop:user", JSON.stringify(user));
      setData({ user: user, token: data.token });
      alert("Perfil atualizado com sucesso!")

    }catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil")
      }
    }
  }
  
  useEffect(() => {
    const token = localStorage.getItem("@barbershop:token");
    const user = localStorage.getItem("@barbershop:user");
    
    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setData({
        user: JSON.parse(user), 
        token
      });
    }
    },[]);
    
    
    return (
      <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateProfile, isAdmin: data.isAdmin }} >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  
  return context;
}

export {
  AuthProvider,
  useAuth
};
