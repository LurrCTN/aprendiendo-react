import { useCatImageUrl } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'
import { CatImage } from './components/CatImage'

export function App () {
  const { fact, getNewFactAndRefresh } = useCatFact()
  const { imageUrl } = useCatImageUrl({ fact })

  const handleRandomFact = async () => {
    getNewFactAndRefresh()
  }

  return (
    <main>
      <h1>Cat app</h1>
      <button onClick={handleRandomFact}>random fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`imagen extraida del fact: ${fact} usando la primera palabra`} />}
    </main>
  )
}
