import axios from "axios";
import { useState } from "react";

const useGoogleAuth = () => {
  const [emailUser, setEmailUser] = useState(null);

  const getRefreshToken = async (codeResponse) => {
    try {
      const payload = {
       
      };

      const url = "https://oauth2.googleapis.com/token";

      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setEmailUser(response.data);
    } catch (error) {
      console.log("Error getting refresh token:", error);
    }
  };

  const getNewAccessToken = async () => {
    try {
      const payloadForAccessToken = {
       

      const url = "https://oauth2.googleapis.com/token";

      const response = await axios.post(url, payloadForAccessToken, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("New token response:", response.data);
    } catch (error) {
      console.log("Error getting new access token:", error);
    }
  };

  return { getRefreshToken, getNewAccessToken };
};

export default useGoogleAuth;
