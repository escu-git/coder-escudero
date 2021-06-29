import {React} from 'react'
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const Item = ({item}) => {
    return (
        <div className ="itemBox">
        <NavLink to={`/item/${item.id}`} style={{textDecoration:'none', color:'inherit'}}>
                <img src={item.image} alt={item.alt}/>
        </NavLink>
            <span className="title">{(item.title).toUpperCase()}</span>
            <span className="price">{item.price}</span>
            <NavLink to={`/item/${item.id}`} style={{textDecoration:'none', color:'inherit'}}>
                <Button variant="outlined">Details</Button>
            </NavLink> 
        </div>
    )
}

export default Item;
