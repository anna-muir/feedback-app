import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useState } from 'react'


const FeedbackList = ({ feedback, deleteItem, number }) => {


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
