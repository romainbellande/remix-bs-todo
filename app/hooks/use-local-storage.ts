import { useEffect, useLayoutEffect, useState } from 'react'

export default function useLocalStorage<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(defaultValue);

  useLayoutEffect(() => {
    try {
      const result = JSON.parse(window.localStorage.getItem(key) || '')
      setState(result || undefined);
    } catch (error) {
      console.error(error)
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  // const setWithLocalStorage = (nextState: T) => {
  //   return setState(nextState);
  // };

  return [state, setState];
}