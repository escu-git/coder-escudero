import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContext';
import firebase from 'firebase';
import logo from '../../../assets/images/deco.logo.jpg';
import MenuContainer from './MenuContainer';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarsIcon from '@material-ui/icons/Stars';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


const handleLogOut = () =>{

    firebase.auth().signOut().then(() => {
        console.log('Log out succesfull')
      }).catch((err) => {
        console.log(err)
      });
}

export default function TemporaryDrawer() {
const auth = useAuth();
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
      
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='drawerList'>
      <NavLink className='drawerLogo' to="/">
        <img src={logo} alt='Deco.etc logo' className='drawerLogo'/>
      </NavLink>
      <MenuContainer classNamed='menuContainerDrawer'/>
        {auth.currentUser?null : 
            <NavLink className='drawerBtn' to="/register">
                <div className='btn' variant="outlined">
                  <PersonAddIcon id='registerIcon'/>
                  <span>REGISTER</span>
                </div>
            </NavLink>}
            {auth.currentUser ?
            <div className='drawerBtn'>
              <div className='btn' variant="outlined" onClick={()=>handleLogOut()}>
                <ExitToAppIcon id='exitIcon'/>
                <span>LOGOUT</span>
              </div>
            </div>
             : 
            <NavLink className='drawerBtn' to='/signin'>
                <div className='btn' variant="outlined">
                <VpnKeyIcon id='loginIcon'/>
                <span>LOGIN</span>  
                </div>
            </NavLink>  }
      </List>
      {auth.currentUser?
      <List className='drawerList'>
        <NavLink className='drawerBtn' to="/purchase-history" style={{textDecoration: 'none', color:'inherit'}}>
            <div className='btn' variant="outlined">
              <ShoppingCartIcon id='shoppingCartIcon'/>
              <span>PURCHASES</span>
              </div>
        </NavLink>
        <NavLink className='drawerBtn' to="/item/custom-items" style={{textDecoration: 'none', color:'inherit'}}>
            <div className='btn' variant="outlined">
              <StarsIcon id='starIcon'/>
              <span>CUSTOMIZED</span>
              </div>
        </NavLink>
      </List>:null}
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}/>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
