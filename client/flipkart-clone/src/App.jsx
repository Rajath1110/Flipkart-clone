import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import {Box } from '@mui/material'

function App() {
  
  return (
    <>
      <Header/>
      <Box style={{marginTop:55}}>
        <Home/>
      </Box>
      
    </>
  )
}

export default App
