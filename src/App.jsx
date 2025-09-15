import { useState } from 'react'
import './App.css'
import RatingCard from "./components/RatingCard/RatingCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <RatingCard />
    </div>
  )
}

export default App
