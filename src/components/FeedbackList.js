import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useState, useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackList = ({ number }) => {

    // Now we can access the feedback state from FeedbackContext.js
    // Feedback doesn't need to be a prop in this component
    const { feedback } = useContext(FeedbackContext)

    // Rervse cards black and white
    const [reverse, setReverse] = useState('false')
    const reverseHandler = () => {
        setReverse(!reverse)
        console.log(reverse)
    }

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet.</p>
    }


    // console.log(feedback)
    return (
        <div className='feedback-list'>
            {feedback.map((item) => <FeedbackItem rev={reverse} key={item.id} item={item} number={number} />)}
            <button onClick={reverseHandler}>Dark Mode</button>

        </div>
    )
}

export default FeedbackList
