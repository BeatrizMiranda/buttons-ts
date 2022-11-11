import axios from "..";

// export type TGif = {
//     id: string;
//     title: string;
//     images: {
//       fixed_height: {
//         url: string;
//       };
//     };
//   };
  

export const getGifs = async () => {
    const response = await axios.get('gifs/trending', {params: {limit: 10, api_key: process.env.REACT_APP_GIPHY_KEY} })

    return response.data
}