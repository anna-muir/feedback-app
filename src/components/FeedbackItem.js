import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ item, rev, number }) => {

    const { deleteItem, editFeedback } = useContext(FeedbackContext)


    return (


        <Card rev={rev}>
            <div className='num-display'>{item.rating}</div>
            <button className='close' onClick={() => {
                deleteItem(item.id); number()
            }}><FaTimes color='purple' /></button>
            <button onClick={() => editFeedback(item)} className='edit'>
                <FaEdit color='purple' />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>


    )
}

export default FeedbackItem
