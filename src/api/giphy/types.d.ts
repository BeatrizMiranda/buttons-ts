export type TGetGifsParams = {
  limit: number;
  api_key: key;
};

type TGifList = {
  data: TGif[];
};

export type TGif = {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
};
