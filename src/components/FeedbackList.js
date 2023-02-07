import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useState, useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackList = ({ deleteItem, number }) => {

    const { feedback } = useContext(FeedbackContext)


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
            {feedback.map((item) => <FeedbackItem deleteItem={deleteItem} rev={reverse} key={item.id} item={item} number={number} />)}
            <button onClick={reverseHandler}>Dark Mode</button>

        </div>
    )
}

export default FeedbackList
