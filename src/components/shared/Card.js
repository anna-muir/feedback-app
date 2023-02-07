import React from 'react'
import FeedbackList from '../FeedbackList'

const Card = ({ children, onClick, rev }) => {
    //console.log(rev)
    return (
        <div className={`card ${!rev && 'reverse'}`}>
            {children}
        </div>
    )
}

export default Card
