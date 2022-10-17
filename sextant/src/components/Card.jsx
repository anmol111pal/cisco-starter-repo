import React from 'react'

const styling={
    width: '25rem'
}

const Card = (props) => {
    return (
        <div class="card" style={styling} >
            <div class="card-body">
                <h5 class="card-title text-center"> {props.title} </h5>
                <p class="card-text text-center"> {props.value} </p>
            </div>
        </div>
    )
}

export default Card