import { createFileRoute } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import { usePrimeAlea } from '../hooks/usePrimeAlea'
import usePrimeStore from '../stores/usePrimeStore'
import { Prime } from '../components/Prime'
import { Button } from '../components/ui/Button'
import { userInputSchema } from '../schemas/numberSchema'

export const Route = createFileRoute('/primes')({
  component: Primes,
})

function Primes() {
  const [userInput, setUserInput] = useState('')
  const [inputError, setInputError] = useState('')
  const { data, isLoading, error, refetch } = usePrimeAlea()
  const { currentNumber, isPrimeResult, checkUserNumber } = usePrimeStore()

  const handleGenerateRandom = () => {
    refetch()
  }

  const handleCheckUserNumber = () => {
    const num = parseInt(userInput, 10)
    const validation = userInputSchema.safeParse({ number: num })
    if (!validation.success) {
      setInputError('Veuillez entrer un nombre entier entre 1 et 1000.')
      return
    }
    setInputError('')
    checkUserNumber(num)
    setUserInput('')
  }

  const displayNumber = useMemo(() => {
    if (currentNumber !== null) return currentNumber
    if (data?.number) return data.number
    return null
  }, [currentNumber, data])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Nombres Premiers</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Générer un nombre aléatoire</h2>
        <Button onClick={handleGenerateRandom} disabled={isLoading}>
          {isLoading ? 'Génération...' : 'Générer'}
        </Button>
        {error && <p className="text-red-600 mt-2">Erreur: {error.message}</p>}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vérifier un nombre</h2>
        <input
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Entrez un nombre (1-1000)"
          className="border border-gray-300 rounded px-4 py-2 mr-4"
        />
        <Button onClick={handleCheckUserNumber}>Vérifier</Button>
        {inputError && <p className="text-red-600 mt-2">{inputError}</p>}
      </div>

      {displayNumber !== null && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Résultat</h2>
          <Prime number={displayNumber} />
        </div>
      )}
    </div>
  )
}