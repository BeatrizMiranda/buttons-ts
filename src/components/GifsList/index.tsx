import { useEffect, useState } from "react"
import { getGifs } from "../../api/giphy"

const GifList = () => {

    const [gifs, setGifs] = useState([])
    console.log(gifs)
    const getGifsList = async () => {
        const response = await getGifs()
        setGifs(response.data)
    }

    useEffect(() => {
      getGifsList()
    }, [])
    
  return (
    <div>
        <h1>GifList</h1>
        {gifs.map((gif) => <img src={gif.images.fixed_height} />)}
    </div>
  )
}

export default GifList