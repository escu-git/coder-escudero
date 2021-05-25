import React from 'react'
import '../Styles/itemBox.css'

const Item = ({pictureUrl, alt, title, price}) => {
    return (
        <div className ="itemBox">
            <img src={pictureUrl} alt={alt}/>
            <span className="title">{title}</span>
            <span className="price">{price}</span>
        </div>
    )
}

export default Item
