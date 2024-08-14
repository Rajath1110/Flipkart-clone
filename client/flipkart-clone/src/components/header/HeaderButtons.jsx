import React from 'react'
import { Box,Button,styled,Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function HeaderButtons() {

const Wrapper = styled(Box)`
    display:flex;
    margin:0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right:40px;
        font-size:16px
    }
    `
const Container = styled(Box)`
       display:flex; 
    `
const LoginButton = styled(Button)`
        color:#2874fe;
        background:#FFFFFF;
        text-transform:none;
        padding:5px 40px;
        border-radius:2px;
        box-shadow:none;
        font-weight:600;
        height:32px;
        align-items:center;
    `
  return (
    <Wrapper>
        <LoginButton variant="contained">Login</LoginButton>
        <Typography style={{marginTop:3, width:135}}>Become a seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>
        <Container>
            <ShoppingCartIcon/>
            <Typography>Cart</Typography>
        </Container>
      
    </Wrapper>
  )
}

export default HeaderButtons
