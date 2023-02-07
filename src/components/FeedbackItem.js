import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const FeedbackItem = ({ item, rev, deleteItem, number }) => {




    return (

        <Card rev={rev}>
            <div className='num-display'>{item.rating}</div>
            <button className='close' onClick={() => {
                deleteItem(item.id); number()
            }}><FaTimes color='purple' /></button>
            <div className='text-display'>{item.text}</div>
        </Card>


    )
}

export default FeedbackItem
