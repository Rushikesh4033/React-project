import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Box } from '@mui/system'
import React from 'react'
import Layout from '../components/Layout/Layout'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        p: 5,

        textAlign: "center",
        "& h3": {
          fontWeight: "bold",
          my: 2
        },
        "& p": {
          textAlign: "justify",
        },
        "@media only screen and (max-width:600px)": {
          mt: "30px",
          mb: "0px",
          "& h3": {
            fontSize: "28px"
          },
        },

      }}>
        <Typography variant='h3'>
          Contact My Restaurant
        </Typography>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        </p>
      </Box>
      <Box sx={{
        m:3,
        backgroundColor:'whitesmoke',
      }}>
        <TableContainer>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"black", color:"white",}}align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", }} /> 1234567890 (toll free)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <EmailIcon sx={{ color: "skyblue", }}/> food@123.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <ContactsIcon sx={{ color: "blue", }}/> +918888888858
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact