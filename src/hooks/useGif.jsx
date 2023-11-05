import { useEffect, useState } from "react";

export const useGif = () => {
  const [gif, setGif] = useState(null);

  useEffect(() => {
    async function getGif() {
      try {
        const response = await fetch(
          "https://api.giphy.com/v1/gifs/search?api_key=YcSHMDEScRhRpZHYliQiNwvtEnLkP4Iw&q=goodjob&limit=1&offset=0"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const gifData = await response.json();
        console.log(gifData);
        const url = gifData.data[0].images.fixed_height.url;
        

        setGif(url);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // getGif();
  }, []);

  return { gif };
};
