import { useState } from 'react'
import './App.css'
import RatingCard from './components/RatingCard/RatingCard'
import ThankYou from './components/ThankYou/ThankYou'

function App() {
  const [selectedRating, setSelectedRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleRatingSubmit = (rating) => {
    setSelectedRating(rating)
    setIsSubmitted(true)
  }

  return (
    <div className='app'>
      {!isSubmitted ? (
        <RatingCard onSubmit={handleRatingSubmit} />
      ) : (
        <ThankYou selectedRating={selectedRating} />
      )}
    </div>
  )
}

export default App
