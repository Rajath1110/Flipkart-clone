import React from 'react'
import { InputBase,Box,styled } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Search() {

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;   
    margin-left: 20px; // Adjust this value if needed
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width:100%

    `
const SearchIconWrapper = styled(Box)`
    color:blue;
    padding:5px;
    display:flex;
    `
  return (
    
        <SearchContainer>
            <InputSearchBase placeholder='Search for products, brands and more'/>
            <SearchIconWrapper>
                <SearchSharpIcon/>
            </SearchIconWrapper>
            
        </SearchContainer>
        
      
    
  )
}

export default Search
