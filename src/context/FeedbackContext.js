import { createContext, useState } from 'react'

// Set a variable FeedbackContext to createContext to create context
const FeedbackContext = createContext()

// You need to create a function provider, we pass children as a prop
// We pass children in because we will wrap all the components that need access to 
// the global state of feedback in the provider.
export const FeedbackProvider = ({ children }) => {



    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is review one',
            rating: 10
        },
        {
            id: 2,
            text: 'This is review two',
            rating: 7
        },
        {
            id: 3,
            text: 'Review 3',
            rating: 4
        }
    ])

    //Edit feedback state
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


    //Adds Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = 'id here'
        setFeedback([newFeedback, ...feedback])
    }

    // Deletes feedback
    const deleteItem = (id) => {
        setFeedback(feedback.filter((item) => {
            if (item.id !== id) {
                return true
            }
            else {
                return false;
            }
        }))

    }

    //Update feedback item after edit
    const updateFeedback = (id, updItem) => {
        // console.log(id, updItem);
        console.log('old array', feedback)
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
        console.log('new array', feedback)
    }

    //Edit Feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Value attribute is what we want to pass in (like state or functions)
    // Here, we are passing the feedback state in as a value
    // The components need access to the feedback state

    return <FeedbackContext.Provider value={{
        feedback,
        deleteItem,
        addFeedback,
        // function for feedback
        editFeedback,
        updateFeedback,
        // state for feedback
        feedbackEdit,

    }}>
        {children}
    </FeedbackContext.Provider>
}

// You have to export the contect
export default FeedbackContext