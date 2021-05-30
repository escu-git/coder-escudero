import {React} from 'react'
import '../../Styles/itemBox.css'
import Button from '@material-ui/core/Button';
import buttonStyle from '../material-ui/Buttons'
import ItemCount from './ItemCount';
import { useHistory } from 'react-router';

const Item = ({key, pictureUrl, description, category, alt, title, price}) => {

    const handleClick=(id)=>{
        // let history = useHistory();
        // history.push(`/detail/${id}`)
    };
    const classes = buttonStyle();
    return (
        <div className ="itemBox">
            <img src={pictureUrl} alt={alt}/>
            <span className="title">{title}</span>
            <span className="price">{price}</span>
            <ItemCount className='itemCount'/>
            <div className={classes.root}>
                <Button onClick={() => {handleClick(key)}} variant="outlined">Detalles</Button>
            </div>
        </div>
    )
}

export default Item;
