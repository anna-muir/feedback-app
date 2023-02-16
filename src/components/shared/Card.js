import React from 'react'

const Card = ({ children, onClick, rev }) => {
    //console.log(rev)
    return (
        <div className={`card ${!rev && 'reverse'}`}>
            {children}
        </div>
    )
}

export default Card
