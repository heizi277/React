import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { testBackendConnection } from './services/api'

function App() {
  const [count, setCount] = useState(0)
  const [backendMessage, setBackendMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    testBackendConnection()
      .then(data => setBackendMessage(data.message))
      .catch(err => setError(err.message))
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {backendMessage && (
        <div className="backend-message">
          Backend says: {backendMessage}
        </div>
      )}
      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}
    </>
  )
}

export default App
