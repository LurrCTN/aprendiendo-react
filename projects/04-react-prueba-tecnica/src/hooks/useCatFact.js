import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState('')

  const getNewFactAndRefresh = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(getNewFactAndRefresh, [])

  return { fact, getNewFactAndRefresh }
}
