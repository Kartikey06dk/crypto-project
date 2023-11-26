import React, { useState } from 'react'
import './styles.css'
import TemporaryDrawer from './drawer'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import Switch from '@mui/material/Switch'
// import { Drawer} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Header({ changeTheme, setChangeTheme }) {


    // const [drawer, setDrawer] = useState(false);

    // const handleToggle = () => {
    //     setChangeTheme(!changeTheme); // Toggle the state
    // };

    // const backgroundColor = changeTheme ? 'white' : 'black';
    // const textColor = changeTheme ? 'black' : 'white';

    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <h1 className='logo' style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                CryptoTracker<span style={{ color: 'var(--blue)' }}>.</span>
            </h1>
            <div className='links'>
                <Link to='/'>
                    {/* <Switch {...label} checked={changeTheme} onClick={handleToggle} /> */}
                    <p className='link'>Home</p>
                </Link>
                <Link to='/compare'>
                    <p className='link'>Compare</p>
                </Link>
                
                <Link to='/dashboard'>
                    <Button text={"Dashboard"} onClick={() => navigate('/dashboard')} />
                </Link>
                {/* <Button text={"Share"} outlined={true} onClick={()=>console.log("clicked!!")}/> */}
            </div>

            

            <div className='mobile-drawer'>
                <TemporaryDrawer />
            </div>
        </div>
    )
}

export default Header