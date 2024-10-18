import { useCallback, useRef } from 'react'

export const useDebounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, delay: number): (...args: Parameters<T>) => void => {
  const timeoutRef = useRef<number | null>(null)
  
  return useCallback((...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  
    timeoutRef.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])
}
