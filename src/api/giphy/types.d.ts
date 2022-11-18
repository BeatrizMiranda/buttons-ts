export type TGif = {
    id: string;
    title: string;
    images: {
      fixed_height: {
        url: string;
      };
    };
};

export type TGifList = {
    data: TGif[]
}