import { useCatImageUrl } from '../hooks/useCatImage'

export const CatImage = () => {
  const { imageUrl } = useCatImageUrl({ fact: 'cat' })

  return (
    <img src={imageUrl} alt='image extracted from https://cataas.com' />
  )
}
