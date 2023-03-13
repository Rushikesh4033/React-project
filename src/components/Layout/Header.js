import React, { useState } from 'react'
import { AppBar, Icon, Toolbar, Typography, Drawer } from '@mui/material'
import { Box } from '@mui/system'
import { NavLink } from "react-router-dom"
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';

import Divider from '@mui/material/Divider';
import logo from "../../Images/logo.svg"
const Header = () => {
  const [mobileopen, setmobileopen] = useState(false)
  // handle menu click
  const handleDrawerToggle = () => {
    setmobileopen(!mobileopen)
  }
  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={'goldenrod'}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, mb: 1 }}
      >
        <img src={logo} alt="logo" height={'50px'} width={'200px'}/>
      </Typography>
      <Divider />
      <Box sx={{ display: { xs: 'none', sm: 'block' } }} onClick={handleDrawerToggle}
        sx={{ textAlign: "center" }}>
        <ul className='mobile-nav-menu'>
          <li>
            <NavLink ClassName="active" to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/menu'}>Menu</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>

      </Box>
    </Box>
  )
  return (
    <div>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <Icon color='inherit' aria-label='open-drawer' edge='start' sx={{
              mr: 2, display: { sm: 'none' }
            }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </Icon>


            <Typography
              color={'goldenrod'}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
             
              <img src={logo} alt="logo" height={'50px'} width={'200px'}/>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='nav-menu'>
                <li>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/contact'}>Contact</NavLink>
                </li>
              </ul>

            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer varient="temporary" open={mobileopen} onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              "& .MuiDrawer-paper":
              {
                boxSizing: 'border-box',
                width: "240px"
              }
            }}>

            {drawer}
          </Drawer>

        </Box>
      </Box>
    </div>
  )
}

export default Header