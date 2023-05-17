import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const navigate = useNavigate()
  const { dispatch } = useAuthContext();
  const logout = () => {
    //remove user from storage
    navigate('/')
    localStorage.removeItem("user");

    //dispatch logout
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
