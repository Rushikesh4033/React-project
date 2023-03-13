import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <>

      <Box sx={{ textAlign: 'center', bgcolor: "#1A1A19", color: 'white', p: 3 }}>
        <Box sx={{
          m: 3, "& svg": {
            fontSize: '60px',
            cursor: 'pointer',
            mr: 2,
          },
          '& svg : hover' :{
            color: 'goldenrod',
            transform : 'translateX(0.8px)',
            transition : 'all 400ms',
          }
        }}>
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <GitHubIcon />
        </Box>
        <Typography variant='h5' sx={{
          '@mediac(max-width : 600px)':
          {
            fontSize: '1rem',
          },
        }}
        >
          All Rights Reserved
        </Typography>
      </Box>
    </>
  )
}

export default Footer