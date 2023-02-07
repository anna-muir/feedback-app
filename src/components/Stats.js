import React from 'react'
import { useState } from 'react'

const Stats = ({ length, feedback }) => {

    //Calc ratings average
    let avg = feedback.reduce((acc, cur) => {
        return acc + cur.rating / feedback.length
    }, 0)
    console.log(avg)

    avg = avg.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'>
            <div>
                {length} {length === 1 ? 'review' : 'reviews'}

            </div>
            <div>
                Average Rating: {avg}
            </div>


        </div>
    )
}

export default Stats
