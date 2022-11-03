import React, { useCallback, useEffect, useState } from "react";
import { getGifs } from "../../api/giphy";
import { TGif } from "../../api/giphy/types";
import { GifList } from "./styled";

const Gifs = () => {
  const [limit, setLimit] = useState(50);
  const [gifs, setGifs] = useState<TGif[]>();

  const getGifList = useCallback(async () => {
    const { data: gifList } = await getGifs({
      limit,
      api_key: process.env.REACT_APP_GIPHY_KEY,
    });

    setGifs(gifList);
  }, []);

  useEffect(() => {
    getGifList();
  }, []);

  if (!gifs) return <div>Loading...</div>;

  return (
    <GifList>
      {gifs.map((gif) => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
      ))}
    </GifList>
  );
};

export default Gifs;
