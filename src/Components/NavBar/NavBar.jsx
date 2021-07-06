import React from 'react';
import {
    AppBar,
    Toolbar,
} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Logo from '../Cart/CartWidget'
import MainLogo from './MainLogo'
import MenuContainer from './navBarMenu/MenuContainer';
import { useCart } from '../../Contexts/CartContext';
import {useAuth} from '../../Contexts/AuthContext'
import Drawer from './navBarMenu/Drawer'
import {getFirebase} from '../../firebase';
import '../../Styles/styles.css'


const NavBar =  ()=> {
const cart = useCart()
const auth = useAuth();
const firebase = getFirebase();

return(
    <AppBar className="appBar">
        <Toolbar className="toolBar" position='relative'>
            <NavLink to="/" style={{textDecoration:'none', color:'inherit'}}><MainLogo/></NavLink>
            <div className='responsiveNavBar'>
                <MenuContainer classNamed='menuContainer'/>
                {auth.currentUser && <h2 className="userName">{auth.currentUser.displayName}</h2>}
            </div>
                <NavLink to='/cart' style={{display: cart.cart.addedItems.length === 0 ? 'none' : 'block', textDecoration: 'none', color:'inherit'}} >
                    <Logo/>
                </NavLink>
            <Drawer/>
        </Toolbar>
    </AppBar>
);
};

export default NavBar;