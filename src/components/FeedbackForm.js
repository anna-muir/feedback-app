import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {


    const [text, setText] = useState('')
    //characters state was for previous way of disabling button
    const [characters, setCharacters] = useState(0)
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('Entry needs to be at least 10 characters to submit.')



    // We want: when feedbackEdit is changed, we want that to fill in the form based on the feedback
    // that was clicked to be edited. We use useEffect for this.
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    // useEffect is called with a function. Good for HTTP requests.
    // It takes in a callback
    // It also takes an array of dependencies (if you put something in there and it changes, the function will run. If you leave it blank, the function will run on component load.)
    // In this case, we want this to run whenever we click on one of the edit buttons
    // feedbackEdit changes whenever we click an edit button, so we need to put feedbackEdit as the array of dependencies
    useEffect(() => {
        // If statement checks to see if there is anything in feedbackEdit state. If you don't include this statement, the function will run on page load and we only want it to run when an edit button is clicked.
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text) //set text to text of clicked item
            setRating(feedbackEdit.item.rating) // set rating to rating of clicked item
        }
    }, [feedbackEdit])

    // Grabs value of text typed in input & 
    // Gets number of characters type in input
    const handleTextChange = (e) => {
        console.log(text.length)
        setText(e.target.value);
        setCharacters(e.target.value.trim().length)

        if (text.trim().length >= 10) {
            setBtnDisabled(false);
            setMessage('');
        }
        else {
            setBtnDisabled(true);
            setMessage('Entry needs to be at least 10 characters to submit.')
        }
        // console.log(characters)

    }

    // Enables/disables submit button based on number of characters
    // If there are 10 or more characters, button is NOT disabled
    // If there are less than 10 characters, button is disabled
    // const isDisabled = (characters) => {
    //     if (characters >= 10) {
    //         return false
    //     }
    //     else {
    //         return true
    //     }
    // }


    // Submit for function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (characters >= 10) {
            const newFeedback = {
                text,
                rating
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)

            }
            setText()
        }
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input type='text' onChange={handleTextChange} placeholder='Write a review' value={text === undefined ? '' : text} style={{ backgroundColor: 'transparent', color: 'white' }} />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                <div>
                    {message}
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
//f
