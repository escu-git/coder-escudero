import React from 'react'

const Item = ({props}) => {
    return (
        <div>
            <img src={props.pictureUrl} alt={props.alt}/>
            <span className="title">{props.title}</span>
            <span className="price">{props.price}</span>
        </div>
    )
}

export default Item
