import { useState } from "react";
import useAxios from "./useAxios";

const useGoogleAuth = () => {
  const [emailUser, setEmailUser] = useState(null);
  const { postData, fetchData } = useAxios();

  const getRefreshToken = async (codeResponse) => {
    try {
      let payload = {
        grant_type: "authorization_code",
        code: codeResponse.code,
        client_id: "64320919863-41lrv84v3mth32m8injfd9macgbdjah1.apps.googleusercontent.com",
        client_secret: "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",
        redirect_uri: "http://localhost:3000/oauth2",
      };

      const url = "https://oauth2.googleapis.com/token";

      const data = await postData(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setEmailUser(data);
    } catch (error) {
      console.log("Error getting refresh token:", error);
    }
  };

  const getNewAccessToken = async () => {
    try {
      let payloadForAccessToken = {
        grant_type: "refresh_token",
        refresh_token: emailUser?.refresh_token,
        client_id: "64320919863-41lrv84v3mth32m8injfd9macgbdjah1.apps.googleusercontent.com",
        client_secret: "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",
      };

      const url = "https://oauth2.googleapis.com/token"

      const data = await postData(
        url,
        payloadForAccessToken,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("New token response:", data);
    } catch (error) {
      console.log("Error getting new access token:", error);
    }
  };

  return { getRefreshToken, getNewAccessToken };
};

export default useGoogleAuth;
