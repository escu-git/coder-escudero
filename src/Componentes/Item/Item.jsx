import {React} from 'react'
import '../../Styles/itemBox.css'
import Button from '@material-ui/core/Button';
import buttonStyle from '../material-ui/Buttons'
import ItemCount from './ItemCount';

const Item = ({pictureUrl, description, category, alt, title, price}) => {
    const classes = buttonStyle();
    return (
        <div className ="itemBox">
            <img src={pictureUrl} alt={alt}/>
            <span className="title">{title}</span>
            <span className="price">{price}</span>
            <ItemCount className='itemCount'/>
            <div className={classes.root}>
                <Button onClick={() => {console.log({pictureUrl,description, alt, title, price})}} variant="outlined">Detalles</Button>
            </div>
        </div>
    )
}

export default Item;
