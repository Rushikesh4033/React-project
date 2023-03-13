import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Card } from 'react-bootstrap'
import Layout from '../components/Layout/Layout'
import { MenuList } from "../data/data"
import "../styles/menu.css"
const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:"flex", flexWrap:"wrap", mt: "60px",mb:"0px", justifyContent:'center'}}>
        {
          MenuList.map(menu => (
            <Card className='menu-card'>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "420px" }}
                  component={'img'}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant='h4' sx={{textAlign:"justify",}}>
                    {
                      menu.name
                    }
                  </Typography>
                  <Typography sx={{textAlign:"justify"}}>
                    {
                      menu.description
                    }
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Menu