import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SwipeableTemporaryDrawer() {
    const [open,setOpen] = useState(false)


    return (
        <div>

            <IconButton onClick={()=> setOpen(true)} ><MenuRoundedIcon className='link'/></IconButton>
            <SwipeableDrawer anchor='right' open={open} onClose={()=> setOpen(false)} >
            <div className='drawer-div'>
                <Link to='/'>
                    <p className='link'>Home</p>
                </Link>
                <Link to='/compare'>
                    <p className='link'>Compare</p>
                </Link>
                
                <Link to='/dashboard'>
                    <p className='link'>Dashboard</p>
                </Link>
            </div>
            </SwipeableDrawer>
            {/* <Button onClick={()=>setOpen(true)}</Button>
            <SwipeableDrawer
                anchor={"right"}
                open={open}
                onClose={()=>setOpen(false)}
                // onOpen={toggleDrawer(anchor, true)}
            >
                <h1>Hi</h1>
            </SwipeableDrawer> */}
        </div>
        
    );
}