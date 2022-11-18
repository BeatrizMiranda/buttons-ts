import axios from "..";
import { TGifList } from "./types";

export const getGifs = async () => {
    const response = await axios.get<TGifList>('gifs/trending', {params: {limit: 10, api_key: process.env.REACT_APP_GIPHY_KEY} })

    return response.data
}