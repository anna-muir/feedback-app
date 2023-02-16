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
// Import FeedBackProvider to use it
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {

    // You only need these states for number
    const [feedback] = useState(FeedbackData)
    const [length, setLength] = useState(feedback.length)

    // Minuses one from length of feedback each time clicked
    const number = () => {
        setLength(feedback.length - 1)
        console.log(length)
    }

    return (
        // Wrap FeedbackProvider around everything that you want to be included in children
        <FeedbackProvider>
            <Router>

                <Header />
                <div className='container'>

                    <Routes>
                        <Route
                            exact path='/'
                            element={
                                <>

                                    <FeedbackForm />
                                    <Stats />
                                    <FeedbackList number={number} />
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
