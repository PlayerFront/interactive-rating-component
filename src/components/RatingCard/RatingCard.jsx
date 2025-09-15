import { useState } from 'react'
import './RatingCard.css'

const RatingCard = ({ onSubmit }) => {

    const [selectedRating, setSelectedRating] = useState(0)
    const handleRatingSelect = (rating) => {
        setSelectedRating(rating)
    }
    const handleSubmit = () => {
        if (selectedRating > 0) {
            onSubmit(selectedRating)
        }
    }
    return (
        <div className="rating-card">
            <div className="rating-card__icon">
                <img src="/src/assets/images/icon-star.svg" alt="icon-star" />
            </div>
            <div className="rating-card__content">
                <h2 className="rating-card__title">How did we do?</h2>
                <p className="rating-card__description">
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <div className="rating-card__numbers">
                {[1, 2, 3, 4, 5].map((number) => (
                    <button
                        key={number}
                        className={`rating-card__number ${selectedRating === number ? 'rating-card__number--selected' : ''
                            }`}
                        onClick={() => handleRatingSelect(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
            <button
                className={`rating-card__submit> ${selectedRating === 0 ? 'rating-card__submit--disabled' : 'rating-card__submit'
                    }`}
                onClick={handleSubmit}
                disabled={selectedRating === 0}
            >
                SUBMIT
            </button>
        </div >
    )
}

export default RatingCard