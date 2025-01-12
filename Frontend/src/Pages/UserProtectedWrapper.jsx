import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { UserDataContext } from "../Context/UserContext";
import UserContext from "../Context/UserContext";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { user, setUser } = useContext(UserDataContext);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (!token) {
      navigate("/login");
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((responce) => {
        if (responce.status === 200) {
          setUser(responce.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        localStorage.removeItem("token");
        navigate("/login");
        setIsLoading(false);
      })
      .finally(setIsLoading(false));
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
