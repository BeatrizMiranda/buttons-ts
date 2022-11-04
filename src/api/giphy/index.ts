import axios from "..";

const getGifs = async () => {
    const response = await axios.get('gifs/trending/', {params: {limit: 50, api_key: process.env.REACT_APP_GIPHY_KEY} })

    console.log(response);
    return response.data
}