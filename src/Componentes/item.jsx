import {React, useState, useEffect} from 'react'

const item = (img, alt, title, description) => {
    return (
        <div>
            <img src="img" alt="alt"/>
            <span className="title">{title}</span>
            <span className="description">{description}</span>
            <span className="price">{price}</span>
        </div>
    )
};

export default item


