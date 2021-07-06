import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContext';
import firebase from 'firebase';
import logo from '../../../assets/images/deco.logo.jpg';
import MenuContainer from './MenuContainer';

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
                <Button className='btn' variant="outlined">REGISTER</Button>
            </NavLink>}
            {auth.currentUser ?
            <Button className='btn' variant="outlined" onClick={()=>handleLogOut()}>LOGOUT</Button> : 
            <NavLink className='drawerBtn' to='/signin'>
                <Button className='btn' variant="outlined">LOGIN</Button>
            </NavLink>  }
      </List>
      {auth.currentUser?
      <List className='drawerList'>
        <NavLink className='drawerBtn' to="/purchase-history" style={{textDecoration: 'none', color:'inherit'}}>
            <Button className='btn' variant="outlined">Your buys</Button>
        </NavLink>
        <NavLink className='drawerBtn' to="/item/custom-items" style={{textDecoration: 'none', color:'inherit'}}>
            <Button className='btn' variant="outlined">CUSTOMIZED</Button>
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
