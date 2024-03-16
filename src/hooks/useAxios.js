import axios from "axios";
import useContextHook from "./useContextHook";

function useAxios() {
  const { url } = useContextHook();

  const postData = async (endpoint, data) => {
    try {
      const response = await axios.post(url + endpoint, data);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(url + endpoint);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  return { postData, fetchData };
}

export default useAxios;
