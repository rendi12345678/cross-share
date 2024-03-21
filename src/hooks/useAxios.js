import axios from "axios";

function useAxios() {
  const postData = async (url, data, options) => {
    try {
      const response = await axios.post(url, data, options);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const fetchData = async (url, options) => {
    try {
      const response = await axios.get(url, options);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  return { postData, fetchData };
}

export default useAxios;
