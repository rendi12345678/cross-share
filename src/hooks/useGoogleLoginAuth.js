import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";

const GoogleAuthComponent = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const SCOPE = "https://mail.google.com/";

  useEffect(() => {
    console.log(`Access Token : ${accessToken}`);
    console.log(`Refresh Token : ${refreshToken}`);
  }, [accessToken, refreshToken]);

  const onSuccess = async (response) => {
    const codeResponse = response.code;
    console.log(`Response :`, response.data);
    try {
      // Exchange authorization code for refresh token
      const tokenResponse = await axios.post(
        "https://oauth2.googleapis.com/token",
        {
          grant_type: "authorization_code",
          code: codeResponse,
          client_id:
            "64320919863-41lrv84v3mth32m8injfd9macgbdjah1.apps.googleusercontent.com",
          client_secret: "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",
          redirect_uri: "http://localhost:3000/oauth",
        }
      );

      setAccessToken(tokenResponse.data.access_token);
      setRefreshToken(tokenResponse.data.refresh_token);
    } catch (error) {
      console.error("Error exchanging code for token:", error);
    }
  };

  const onError = (error) => {
    console.log("Login Failed:", error);
  };

  const googleLogin = useGoogleLogin({
    scope: SCOPE,
    flow: "auth-code",
    onSuccess,
    onError,
  });

  const logOut = () => {
    googleLogout();
    setAccessToken(null);
    setRefreshToken(null);
  };

  return { logOut, googleLogin };
};

export default GoogleAuthComponent;
