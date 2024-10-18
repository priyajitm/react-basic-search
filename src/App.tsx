import './App.css'
import { useNameSearch } from './hooks/useNameSearch'

const App = () => {
  
  const { searchTerm, suggestions, handleInputChange, handleSuggestionClick } = useNameSearch()

  return (
    <div className="App">
      <h1>Name Search</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for a name..."
        />
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((name) => (
              <li key={name}>
                <button onClick={() => handleSuggestionClick(name)}>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
