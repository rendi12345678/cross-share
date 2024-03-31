import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import useContextHook from "./useContextHook";

function useYoutubeVideos() {
  const [items, setItems] = useState();
  const { url } = useContextHook();
  const { fetchData } = useAxios();

  useEffect(() => {
    fetchData(url + "/youtube-videos")
      .then((data) => {
        console.log(`Videos :`, data[0]);
        setItems(data);
      })
      .catch((err) => {
        console.log(`Error :`, err);
      });
  }, []);

  return items;
}

export default useYoutubeVideos;
