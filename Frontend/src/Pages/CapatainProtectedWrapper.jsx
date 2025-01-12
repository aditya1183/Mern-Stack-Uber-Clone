import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CapatianContext";
//import { UserContext } from "../Context/UserContext";
import { useState } from "react";
import axios from "axios";

const CapatainProtectedWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);

    if (!token) {
      navigate("/captain-login");
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((Response) => {
        if (Response.status === 200) {
          setCaptain(Response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        localStorage.removeItem("token");
        setIsLoading(false);
        navigate("/captain-login");
      })
      .finally(setIsLoading(false));
  }, [token]);

  if (isLoading) {
    console.log("aditya");
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

export default CapatainProtectedWrapper;
