import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const Stats = () => {

    // We are getting feedback through FeedbackContext, which is state that can now be used in this component
    const { feedback } = useContext(FeedbackContext)

    //Calc ratings average
    let avg = feedback.reduce((acc, cur) => {
        return acc + cur.rating / feedback.length
    }, 0)
    // console.log(avg)

    avg = avg.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'>
            <div>

                {feedback.length} {feedback.length === 1 ? 'Review' : 'Reviews'}

            </div>
            <div>
                Average Rating: {avg}
            </div>


        </div>
    )
}

export default Stats
