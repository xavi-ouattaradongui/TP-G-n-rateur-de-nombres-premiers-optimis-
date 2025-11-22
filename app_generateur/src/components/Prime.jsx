import { useMemo } from 'react';
import { isPrime } from '../service/verifIsPrime';

export function Prime({ number }) {
  const isPrimeResult = useMemo(() => isPrime(number), [number]);

  return (
    <div className="text-center">
      <p className="text-2xl font-semibold">Nombre: {number}</p>
      <p className={`text-xl ${isPrimeResult ? 'text-green-600' : 'text-red-600'}`}>
        {isPrimeResult ? 'Est premier' : 'N\'est pas premier'}
      </p>
    </div>
  );
}

