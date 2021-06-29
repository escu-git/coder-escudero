import React from 'react'
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Custom = () => {
    return (
        <>
        <div className ="itemBox">
            <NavLink to={'/custom-design'} style={{textDecoration:'none', color:'inherit'}}>
                <img src={'https://firebasestorage.googleapis.com/v0/b/deco-etcetera.appspot.com/o/custom.jpg?alt=media&token=d5e20ae5-aeee-4309-b82e-3e19bf6d709b'} alt={'Custom design'}/>
            </NavLink>
            <span className="title">{'Choose your own design'}</span>
            <span className="price">$450</span>
            <NavLink to={'/custom-design'} style={{textDecoration:'none', color:'inherit'}}>
                <Button variant="outlined">CHOOSE YOUR DESIGN</Button>
            </NavLink> 
        </div>
        </>
    )
}

export default Custom