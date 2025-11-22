import { create } from 'zustand';
import { isPrime } from '../service/verifIsPrime';

const usePrimeStore = create((set, get) => ({
  currentNumber: null,
  isPrimeResult: null,
  displayMode: 'random', // 'random' or 'user'

  setNumber: (number) => {
    const result = isPrime(number);
    set({ currentNumber: number, isPrimeResult: result });
  },

  setDisplayMode: (mode) => set({ displayMode: mode }),

  checkUserNumber: (number) => {
    const result = isPrime(number);
    set({ currentNumber: number, isPrimeResult: result, displayMode: 'user' });
  },
}));

export default usePrimeStore;
