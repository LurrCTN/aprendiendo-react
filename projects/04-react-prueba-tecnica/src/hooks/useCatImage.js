import { useState, useEffect } from 'react'
import { getImageUrl } from '../services/imageUrl'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImageUrl ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return

    getImageUrl(fact).then(newUrl => setImageUrl(newUrl))
  }, [fact])
  console.log(imageUrl)

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
