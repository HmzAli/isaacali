import { useState } from 'react'
import './App.css'
import { Link } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Isaac Ali portfolio</h1>
      <Link to="/privacy-policy">Privacy Policy</Link>
    </>
  )
}

export default App
