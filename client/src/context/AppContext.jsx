import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");

  const value = {
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
    navigate,
    axios
  };

  const fetchBlogs = async ()=>{
    try {
        const {data} = await axios.get('/api/blog/all');
        data.success ? setBlogs(data.blogs) : toast.error(data.message)
    } catch (error) {
        
    }
  }

  useEffect(() => {
  fetchBlogs();
  const token = localStorage.getItem('token');
  if (token) {
    setToken(token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}, []); // <-- add empty dependency array here


  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
