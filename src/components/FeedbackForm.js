import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useState } from 'react'

const FeedbackForm = ({ handleAdd }) => {

    const [text, setText] = useState('')
    const [characters, setCharacters] = useState(0)
    const [rating, setRating] = useState(10)

    // Grabs value of text typed in input & 
    // Gets number of characters type in input
    const handleTextChange = (e) => {
        setText(e.target.value);
        setCharacters(e.target.value.trim().length)
        // console.log(characters)

    }

    // Enables/disables submit button based on number of characters
    // If there are 10 or more characters, button is NOT disabled
    // If there are less than 10 characters, button is disabled
    const isDisabled = (characters) => {
        if (characters >= 10) {
            return false
        }
        else {
            return true
        }
    }


    // Submit for function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (characters >= 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => console.log(rating)} />
                <div className='input-group'>
                    <input type='text' onChange={handleTextChange} placeholder='Write a review' value={text} style={{ backgroundColor: 'transparent', color: 'white' }} />
                    <Button type='submit' isDisabled={isDisabled(characters)}>Send</Button>
                </div>
                <div>
                    {isDisabled(characters) === true ? <p>Your entry must contain at least 10 characters.</p> : <p>Submit when ready.</p>}
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
