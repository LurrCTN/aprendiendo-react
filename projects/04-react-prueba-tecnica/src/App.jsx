import { useEffect, useState } from 'react'
import './App.css'

const CAT_FACT_ENDPOINT = 'https://catfact.ninja/fact'
// const CAT_IMAGE_ENDPOINT = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_FACT_ENDPOINT)
      .then(res => res.json())
      .then(({ fact }) => {
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 1)[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(({ url }) => {
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>Cat app</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`imagen extraida del fact: ${fact} usando la primera palabra`} />}
    </main>
  )
}
