import {React} from 'react'
import '../../Styles/itemBox.css'
import Button from '@material-ui/core/Button';
import buttonStyle from '../material-ui/Buttons'
import ItemCount from './ItemCount';
import {NavLink} from 'react-router-dom';

const Item = ({item}) => {
    const classes = buttonStyle();
    return (
        <div className ="itemBox">
                <img src={item.pictureUrl} alt={item.alt}/>
            <span className="title">{item.title}</span>
            <span className="price">{item.price}</span>
            <ItemCount className='itemCount'/>
            <NavLink to={`/item/${item.id}`} style={{textDecoration:'none', color:'inherit'}}>
                <Button variant="outlined" onClick={()=>{console.log(item.id)}}>Details</Button>
            </NavLink>
        </div>
    )
}

export default Item;
