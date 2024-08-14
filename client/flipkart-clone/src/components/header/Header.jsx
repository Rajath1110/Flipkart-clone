import React from 'react'
import {AppBar,Toolbar,styled,Box, Typography} from '@mui/material'
import App from '../../App'
import Search from './Search'
import HeaderButtons from './HeaderButtons'

const StyledHeader = styled(AppBar)`
    background:#2874f0;
    height:55px
    ` 
const LogoComponent = styled(Box)`
    margin-left:12%;
    line-height:0;
    `
const SubHeading = styled(Typography)`
    font-size:10px;
    font-style:italic;
    `   
const PlusLogo = styled('img')({
    width:10,
    height:10,
    marginLeft:4
}) 

const CustomButtonWraper = styled(Box)`
        margin-left: 48px;
        
    `

    
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
function Header() {
  return (
    <div>
        
      <StyledHeader>
        <Toolbar  style={{ minHeight: '55px', display: 'flex', justifyContent: 'space-between' }}>
        
            <LogoComponent>
                <img src={logoURL} alt="Flipkart Logo" style={{width:75}}/>
                <Box style={{display:'flex'}}>
                    <SubHeading>Explore&nbsp;
                        <Box component="span" style={{color:'#FFF500'}}>Plus</Box> 
                    </SubHeading>
                    <PlusLogo src={subURL} alt='sub logo' />
                </Box>
                
            </LogoComponent>
            <Search/>
            <CustomButtonWraper>
                <HeaderButtons/>
            </CustomButtonWraper>
          
        </Toolbar>
      </StyledHeader>
    

      
    </div>
  )
}
export default Header
