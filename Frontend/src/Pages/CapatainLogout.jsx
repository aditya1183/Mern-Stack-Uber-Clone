import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CapatainLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const logoutcapatain = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captain/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.status);
        if (response.status === 200) {
          localStorage.removeItem(token);
          navigate("/captain-login");
        }
      } catch (error) {
        console.log(error);
      }
    };

    logoutcapatain();
  }, [token]);
  return <div>CapatainLogout</div>;
};

export default CapatainLogout;
