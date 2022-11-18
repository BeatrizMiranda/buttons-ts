import { useEffect, useState, useCallback, memo } from "react"
import { getGifs } from "../../api/giphy"
import { TGif } from "../../api/giphy/types"

const GifList = () => {
    const [gifs, setGifs] = useState<TGif[]>()
    
    const getGifsList = useCallback(async () => {
      const response = await getGifs()
      setGifs(response.data)
    }, [])

    console.log(gifs)

    useEffect(() => {
      getGifsList()  
    }, [getGifsList])
    
  if (!gifs) return <div>Carregando...</div>
  
  return (
    <div>
        <h1>GifList</h1>
        {gifs.map((gif) => <img src={gif.images.fixed_height.url} alt={gif.title} key={gif.id} />)}
    </div>
  )
}

export default memo(GifList)