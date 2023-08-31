export const getImageUrl = async (fact) => {
  const firstWord = fact.split(' ', 1)[0]

  const res = await fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
  const { url } = await res.json()
  return url
}
