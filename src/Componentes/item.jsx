import React from 'react'
import '../Styles/itemBox.css'
import Button from '@material-ui/core/Button';
import buttonStyle from '../Componentes/material-ui/Buttons'


const Item = ({pictureUrl, alt, title, price}) => {
    const classes = buttonStyle();
    return (
        <div className ="itemBox">
            <img src={pictureUrl} alt={alt}/>
            <span className="title">{title}</span>
            <span className="price">{price}</span>
            <div className={classes.root}>
                <Button onClick={() => { alert('pulsado') }} variant="outlined">Detalles</Button>
            </div>
        </div>
    )
}

export default Item
