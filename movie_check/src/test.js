import React from 'react'

const Test = (props)    =>{
    const test_props = [...props.array]
    return (
        <div>
            <h3>{test_props[0]}</h3>
        </div>
    )
}

export default Test