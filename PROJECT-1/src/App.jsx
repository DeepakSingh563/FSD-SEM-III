import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero></Hero>
    </div>
  )
}

export default App
