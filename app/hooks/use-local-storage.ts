import { useEffect, useLayoutEffect, useState } from 'react'

export default function useLocalStorage<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(defaultValue);

  useLayoutEffect(() => {
    try {
      const result = JSON.parse(localStorage.getItem(key) || '')
      setState(result || undefined);
    } catch (error) {
      console.error(error)
    }
  }, [key]);

  // const setWithLocalStorage = (nextState: T) => {
  //   return setState(nextState);
  // };

  return [state, setState];
}