import axios from "axios";

function useAxios() {
  const postData = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const fetchData = async (url) => {
    try {
      const response = await axios.get();
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  return { postData, fetchData };
}

export default useAxios;
