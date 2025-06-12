import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/Ellipse.svg'
import {motion} from 'framer-motion';
import Background from '../assets/Background.png'
import { Fade } from 'react-reveal';
import Typed from 'react-typed';
import AdminSign from './AdminSign';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminLogin() {

    const [sign, setSign] = useState(false);

    const handleSign = ()=>{
        setSign(true);
    }
    const handleLeaveSign = ()=>{
        setSign(false);
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secretcode, setSecretcode] = useState('')

    const navigate = useNavigate();

    const handleLogin = async(event)=>{
        event.preventDefault();
        let data = {
            email: email,
            password: password,
            secretcode: secretcode,
        }
        let result = await fetch('http://localhost:6570/jesste/api/admins/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data)
        });
        let value =  await result.json();

        if(email || password || secretcode){
            if(value.success){
              localStorage.setItem('token', value.token)
              toast.success('Login successful')
              navigate('/dashboard')
            }
            else{
              toast.error("Invalid email, password or secretcode");
              setEmail('');
              setPassword('');
              setSecretcode('');
            }
          }
          else{
            toast.error("Email, password or secretcode must be provided")
            return false;
          }
    }
  return (
    <Container>
       <div className='container_main'>
            <div className='admin_intro'>
                <div className='admin_intro_container'>
                    <motion.img src={Logo} alt='Logo'
                    animate={{scale: 1.2}} 
                    initial={{scale:1}} 
                    transition={{repeat: 2, duration: 1}}
                    className='logo'
                    />
                </div>
            </div>
            <div className='logins'>
            <Fade top duration={1000} distance="40px">
                <div className='login-title'>
                    <Typed strings={["Login"]} typeSpeed = {80} backSpeed={80} loop  className='typed'/>
                </div>
                <form onSubmit={handleLogin}>
                    <div className='info'>
                        <label for='Username'>Username: </label>
                        <br />
                        <input type='email' name='Email' id='username' placeholder='Enter username' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='info'>
                        <label for='password'>Password:</label>
                        <br />
                        <input type='password' name='Password' id='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className='info'>
                        <label for='secretcode'>SecretCode:</label>
                        <br />
                        <input type='password' name='SecretCode' id='secretcode' placeholder='Enter your code' value={secretcode} onChange={(e)=>setSecretcode(e.target.value)}/>
                    </div>
                    <div className='button'>
                        <button>Sign In</button>
                    </div>
                </form>
                <div className='sign'>
                    <div className='main-sign'>
                        <p>New as an admin? </p>
                        <span onClick={handleSign}>Sign Up</span>
                        <div className='sign-container'>
                        {
                            sign && (
                                
                                <div className='signups'>
                                    <div className='login-title'>
                                        <Typed strings={["Sign Up"]} typeSpeed = {80} backSpeed={80} loop  className='typed-sign'/>
                                    </div>
                                    <AdminSign />
                                    <div className='main-sign'>
                                    <p>New as an admin? </p>
                                    <span onClick={handleLeaveSign}>Sign In</span>
                                    </div>
                                </div> 
                            )
                        }
                        </div>
                        
                    </div>
                </div>
                
            </Fade>
            </div>

        </div>
    </Container>
  )
}

const Container = styled.div`
    .container_main{
        display: flex;
    }
    .admin_intro{
        background-image: url(${Background});
        background-size: cover;
        background-repeat: no-repeat;
        height: 100vh;
        width: 55%;
    }
    .admin_intro_container{
        display: flex;
        position: absolute;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.505);
        width: 45%;
    }
    .logo{
        width: 300px;
        padding-left: 27%;
    }
    .logins{
        width: 50%;
        padding: 5% 7%;
    }
    .login-title{
        padding: 2% 30%;
    }
  .typed{
      padding: 10% ;
      font-size: 70px;
      font-weight: bold;
      background: linear-gradient(97.24deg, #f4ca98 50.37%, rgba(243, 194, 95, 0.233) 113.02%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent; 
      font-family: 'Poppins', sans-serif;
  }
  .info{
    padding: 1% 9%;
  }
  label{
    padding: 2% 0%;
    font-family: "Rubik";
    font-size: 14px;
    color: grey;
  }
  input{
    width: 470px;
    height: 60px;
    border-radius: 10px;
    border: 3px solid rgba(154, 154, 154, 0.404);
    padding-left: 5%;
    outline: none;
  }
  .button{
      padding: 6% 9%;
  }
  .button button{
    width: 500px;
    height: 60px;
    font-size: 25px;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    background-color: rgba(255, 228, 196, 0.866);
  }
  .button button:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
  }
  .main-sign{
    display: flex;
    font-family: "Rubik", sans-serif;
    justify-content: center;
    color: grey;
  }
  span{
    color: #f4ca98;
    padding-left: 2%;
    cursor: pointer;
  }
  span:: hover{
    transition: all 0.3 ease-in-out;
    transform: scale(1.1);
  }
  .signups{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 85vh;
    width: 100%;
    background: white;
    border-radius: 10px;
  }
  .typed-sign{
    font-size: 50px;
    font-weight: bold;
    background: linear-gradient(97.24deg, #f4ca98 50.37%, rgba(243, 194, 95, 0.233) 113.02%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent; 
    font-family: 'Poppins', sans-serif;
}

`
export default AdminLogin
