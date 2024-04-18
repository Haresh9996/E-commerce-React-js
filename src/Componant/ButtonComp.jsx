import React from 'react'

const ButtonComp = ({ background, color, content }) => {

    return (
        <>
            <button className='px-5 py-2 font-semibold text-xl' style={{ backgroundColor: background, color: color}}>{content}</button>
        </>
    )
}

export default ButtonComp