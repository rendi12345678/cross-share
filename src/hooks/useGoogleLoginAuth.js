import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import useGoogleAuth from "./useGoogleAuth";

function useGoogleLoginAuth() {
  const initialUserProperties = {
    access_token: "",
    expires_in: 0,
    id_token: "",
    refresh_token: "",
    scope: "",
    token_type: "",
  };

  const emailUserProfile = {
    email: "",
    family_name: "",
    given_name: "",
    hd: "",
    id: "",
    locale: "",
    name: "",
    picture: "",
    verified_email: false,
  };

  const { getNewAccessToken, getRefreshToken } = useGoogleAuth();
  const { fetchData, postData } = useAxios();

  const [emailUser, setEmailUser] = useState(initialUserProperties);
  const [emailProfile, setEmailProfile] = useState(emailUserProfile);

  const SCOPE = "https://mail.google.com/";

  const googleLogin = useGoogleLogin({
    scope: SCOPE,
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      if (codeResponse.scope.includes("https://mail.google.com/")) {
        await getRefreshToken(codeResponse, setEmailUser);

        if (!!emailUser.refresh_token) {
          setTimeout(async () => {
            await getNewAccessToken(emailUser);
          }, 10000);
        }
      } else {
        console.log("Please give required permission to read emails!");
      }
    },
    onError: (error) => {
      console.log("Login Failed:", error);
    },
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!!emailUser.access_token) {
        try {
          const url = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${emailUser.access_token}`;
          const options = {
            headers: {
              Authorization: `Bearer ${emailUser.access_token}`,
              Accept: "application/json",
            },
          };

          const data = await fetchData(url, options);

          setEmailProfile(data);
        } catch (err) {
          console.log("Error fetching user profile:", err);
        }
      }
    };

    fetchUserProfile();
  }, [emailUser]);

  const logOut = () => {
    googleLogout();
    setEmailUser(initialUserProperties);
  };

  return { logOut, googleLogin };
}

export default useGoogleLoginAuth;
