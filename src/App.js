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

const App = () => {

    const [feedback, setFeedback] = useState(FeedbackData)
    const [length, setLength] = useState(feedback.length)


    const deleteItem = (id) => {
        setFeedback(feedback.filter((item) => {
            if (item.id !== id) {
                return true
            }
        }))

    }

    const number = () => {
        setLength(feedback.length - 1)
        console.log(length)
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = 'id here'
        setFeedback([newFeedback, ...feedback])
    }

    return (
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
                                <FeedbackList feedback={feedback} deleteItem={deleteItem} number={number} />
                            </>
                        }>
                    </Route>

                    <Route path='/about' element={<About />} />
                </Routes>
                <AboutIconLink />
            </div>

        </Router>
    )
}



export default App
