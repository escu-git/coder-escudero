import React from 'react'

const Item = ({pictureUrl, alt, title, price}) => {
    return (
        <div>
            <img src={pictureUrl} alt={alt}/>
            <span className="title">{title}</span>
            <span className="price">{price}</span>
        </div>
    )
}

export default Item
