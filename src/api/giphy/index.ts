import api from "..";
import { TGetGifsParams, TGifList } from "./types";

export const getGifs = async (params: TGetGifsParams) => {
  const response = await api.get<TGifList>("gifs/trending", {
    params,
  });

  return response.data;
};
