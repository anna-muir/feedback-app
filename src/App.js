import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import Stats from './components/Stats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {

    const [feedback, setFeedback] = useState(FeedbackData)
    const [length, setLength] = useState(feedback.length)

    // If selected id equals item id, delete the item
    const deleteItem = (id) => {
        setFeedback(feedback.filter((item) => {
            if (item.id !== id) {
                return true
            }
        }))

    }

    // Gets length of feedback
    const number = () => {
        setLength(feedback.length - 1)
        console.log(length)
    }

    // Appends entered feedback data to existing data
    const addFeedback = (newFeedback) => {
        newFeedback.id = 'id here'
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <FeedbackProvider>
            <Router>

                <Header />
                <div className='container'>

                    <Routes>
                        <Route
                            exact path='/'
                            element={
                                <>

                                    <FeedbackForm handleAdd={addFeedback} />
                                    <Stats length={length} feedback={feedback} />
                                    <FeedbackList deleteItem={deleteItem} number={number} />
                                </>
                            }>
                        </Route>

                        <Route path='/about' element={<About />} />
                    </Routes>
                    <AboutIconLink />
                </div>

            </Router>
        </FeedbackProvider>
    )
}



export default App
