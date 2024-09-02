import { Dialog, TextField,Box, Typography, Button,styled } from '@mui/material'
import React from 'react'
import { useState } from 'react';
function LoginDialogue({open,setOpen}) {

    const accountInitialValues = {
        login:{
            view:'login',
            heading:'Login',
            subHeading:'Get access to your Orders, Whishlist and Recommendations'

        },
        signup:{
            view:'signup',
            heading:'Looks like you are new here!',
            subHeading:'SignUp with your mobile number'
        }

    }
    const [signUp ,toggleSignUp] = useState(accountInitialValues.login) 

    const SignUp = () =>{
        toggleSignUp(accountInitialValues.signup);
    }
    const Login = () =>{
        toggleSignUp(accountInitialValues.login);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const Component = styled(Box)`
        height:70vh;
        width:90vh;
    `
    const Image = styled(Box)`
        background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
        height:82%;
        width:28%;
        padding:45px 35px;
        
    `
    const Wrapper = styled(Box)`
        display:flex;
        flex-direction:column;
        padding:25px 35px;
        flex:1;
        & > div ,& > button ,& > p{
        margin-top:20px
        } 

    `


    const LoginButton = styled(Button)`
        background-color:orange;
        color:white;
        text-decoration:none;
        border-radius:2px;
        height:48px;


    `
    const RequestOtp = styled(Button)`
        text-transform:none;
        background:#fff;
        color:#2874f0;
        height:48px;
        border-radius:2px;
        box-shadow:0 2px 4px 0 black;

    `
    const PrivacyPolicy = styled(Typography)`
        font-size:12px;
        color:#878787;
    `

    const Createaccount = styled(Typography)`
        font-size:14px;
        text-align:center;
        color:#2874f0;
        font-weight:600;
        cursor:pointer;
    `
    const ExistingAccount = styled(Typography)`
        font-size:14px;
        text-align:center;
        color:#2874f0;
        font-weight:600;
        cursor:pointer;
    `
    const ContinueButton = styled(Button)`
        background-color:orange;
        color:white;
        text-decoration:none;
        border-radius:2px;
        height:48px;


    `

  return (
    <div>
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <Box style={{display:'flex',height:'100%' }}>
                    <Image>
                        <Typography variant='h5'>{signUp.heading}</Typography>
                        <Typography style={{marginTop:20}}>{signUp.subHeading}</Typography>

                    </Image>

                
                    
                {signUp.view === 'login'?
                    <Wrapper>
                        <TextField variant='standard' placeholder='Enter Email/Mobile Number'/>
                        <TextField variant='standard' placeholder='Enter Password'/>
                        <PrivacyPolicy>By continuing you agree to Flipkart's Terms of Policy and Privacy Policy</PrivacyPolicy>
                        <LoginButton>Login</LoginButton>
                        <Typography style={{textAlign:'center'}}>OR</Typography>
                        <RequestOtp>Request OTP</RequestOtp>
                        <Createaccount onClick={()=> SignUp()}>New to Flipkart? Create an account</Createaccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant='standard' placeholder='Enter username'/>
                        <TextField variant='standard' placeholder='Enter email'/>
                        <TextField variant='standard' placeholder='Enter mobile nummber'/>
                        <TextField variant='standard' placeholder='Enter password'/>
                        <ContinueButton>Continue</ContinueButton>
                        <ExistingAccount onClick={() =>Login()}>Already have an account? Login here</ExistingAccount>
                        
                        
            
                    </Wrapper>


                
                }
                </Box>
            </Component>

        </Dialog>
    </div>
  )
}

export default LoginDialogue