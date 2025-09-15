import './ThankYou.css'

const ThankYou = ({ selectedRating }) => {
    return (
        <div className="thank-you">
            <img
                src="/src/assets/images/illustration-thank-you.svg"
                alt="Thank you illustration"
                className="thank-you__image"
            />
            <div className="thank-you__badge" >
                You selected {selectedRating} out of 5
            </div>
            <div className="thank-you__content">
                <h2 className="thank-you__title">Thank you!</h2>
                <p className="thank-you__description">
                    We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    )
}
export default ThankYou