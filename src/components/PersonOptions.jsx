import React from 'react'

function PersonOptions({ handleClick }) {
    return (
        <>
            <div>PersonOptions</div>
            <button onClick={handleClick}>Select gender</button>
        </>
    )
}

export default PersonOptions