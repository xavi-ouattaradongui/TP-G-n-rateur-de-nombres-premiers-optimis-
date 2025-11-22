
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Générateur de Nombres Premiers</h1>
        <p className="text-lg text-gray-600 mb-8">
          Découvrez si un nombre est premier ou générez des nombres aléatoires et vérifiez leur primalité.
        </p>
        <Link to="/primes" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
          Aller à la page des nombres premiers
        </Link>
      </div>
    </div>
  )
}