import { createContect, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This text is from context',
            rating: 10
        }
    ])


    return <FeedbackContext.Provider value={{


    }}>
        {children}
    </FeedbackContext.Provider>
}