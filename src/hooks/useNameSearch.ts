import { useState, useCallback } from 'react'
import { useDebounce } from './useDebounce'
import names from '../mockData.json'

export const useNameSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  const updateSuggestions = useCallback((term: string) => {
    if (term.trim() === '') {
      setSuggestions([])
    } else {
      const filteredNames = names.filter(name =>
        name.toLowerCase().includes(term.toLowerCase())
      )
      setSuggestions(filteredNames)
    }
  }, [])

  const debouncedUpdateSuggestions = useDebounce(updateSuggestions, 300)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)
    debouncedUpdateSuggestions(newSearchTerm)
  }

  const handleSuggestionClick = (name: string) => {
    setSearchTerm(name)
    setSuggestions([])
  }

  return {
    searchTerm,
    suggestions,
    handleInputChange,
    handleSuggestionClick,
  }
}