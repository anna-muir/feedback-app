import { createContext, useState, useEffect } from 'react'
// import { json } from 'react-router-dom'

// Set a variable FeedbackContext to createContext to create context
const FeedbackContext = createContext()

// You need to create a function provider, we pass children as a prop
// We pass children in because we will wrap all the components that need access to 
// the global state of feedback in the provider.
export const FeedbackProvider = ({ children }) => {


    // We made the initial state blank because we are prepping to
    // use the backend for data.
    const [feedback, setFeedback] = useState([])

    //Edit feedback state
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //Dependency array is blank because we want this feedback to load once when the page is loaded
    // On page load, fetch feedback
    useEffect(() => {
        fetchFeedback();
    }, [])

    //Fetch feedback
    // Gets data from the server to put on client side
    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc')
        const data = await response.json()
        setFeedback(data)
    }


    //Adds Feedback
    // posts new data to the server
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json();

        setFeedback([data, ...feedback])
    }

    const deleteItem = async (id) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'DELETE'
        })
        console.log(response)

        setFeedback(feedback.filter((item) => {
            if (item.id !== id) {
                return true
            } else {
                return false
            }
        }))

    }
    // Deletes feedback
    // const deleteItem = (id) => {
    //     setFeedback(feedback.filter((item) => {
    //         if (item.id !== id) {
    //             return true
    //         }
    //         else {
    //             return false;
    //         }
    //     }))

    // }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json();
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item))
    }

    //Update feedback item after edit
    // const updateFeedback = (id, updItem) => {
    //     // console.log(id, updItem);
    //     // console.log('old array', feedback)
    //     setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
    //     console.log('new array', updItem)
    // }

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