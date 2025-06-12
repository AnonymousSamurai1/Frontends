import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Loader from '../assets/Ellipse.svg';
import { BarLoader } from 'react-spinners';
import Fade from 'react-reveal';
import Logo from '../assets/Ellipse.svg'
import Background from '../assets/Background.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminLogin() {

    const [loading, setLoading] = useState();
    useEffect(() =>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [])


  const [password, setPassword] = useState('')

  const navigate = useNavigate();

    const handleSecret = async(event)=>{
      event.preventDefault()
      let data = {
        password: password
      };
      let result = await fetch('http://localhost:6570/jesste/api/keys/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      let value = await result.json(); 

    if(password){
        if(value.success){
          localStorage.setItem('token', value.token)
          toast.success('Login successful')
          navigate('/adminlogin')
          setPassword('');

        }
        else{
          toast.error("Invalid password")
          setPassword('');
        }
      }
      else{
        toast.error("Password must be provided")
        setPassword('');
        return false;
      }
    }
    

  return (
    <Container>
    {
        loading ?

        <div className='loader'>

        <div className='main_loader'>
        <motion.img src={Loader}
        animate={{rotate:360}} 
        initial={{scale:1}} 
        transition={{repeat: 5, duration: 1}}
        class= "imageloader"
        /> 
        </div>

        <BarLoader 
          color={"#FFD39F"} 
          loading={loading} size={20} 
          className='barloader'
        />
        </div>
      
        :

        <Fade>
          <div className='secret_page_main'>
                <div className='secret_page'>
                    <img src={Logo} alt='background'/>
                    <div className='secret'>
                        <form className='secret_key' onSubmit={handleSecret}>
                            <h1>Welcome to the Jesste Administrator Page</h1>
                            <p>Please provide the secret code, to progress to the login or registration page</p>
                            <input type='password' name='Password' id='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <br />
                            <button>Proceed</button>
                        </form>
                    </div>   
                </div>
            </div>
        </Fade>
      

   }  
    </Container>
  )
}

const Container = styled.div`
  .loader{
    position: absolute;
    top: 25%;
    left: 40%;
  }
  .main_loader{
    margin-bottom: 30%;
  }
  .imageloader{
    width: 300px;
  }
  .barloader{
    position: absolute;
    left: 30%;
  }
  .secret_page_main{
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
}
.secret_page{
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.505);
}
.secret_page img{
    padding: 1%;
}
.secret{
    padding: 5% 30%;
}
.secret_key{
    background-color: rgba(255, 255, 255, 0.616);
    height: 40vh;
    border-radius: 20px;   
    text-align: center; 
}
.secret_key h1{
    color: rgb(64, 63, 63);
    font-size: 25px;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
    padding: 2%;
}
.secret_key p{
    padding: 2% 10%;
}
.secret_key input{
    width: 400px;
    height: 60px;
    border-radius: 10px;
    border: 3px solid rgba(154, 154, 154, 0.904);
    text-align: center;
    outline: none;
}
.secret_key button{
    background-color: gray;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    padding: 2% 9%;
    cursor: pointer;
}
.secret_key button:hover{
  scale: 1.1;
  transition: all 0.3s ease-in-out;
}
@media (max-width: 760px){
  .loader{
    top: 30%;
    left: 25%;
  }
  .imageloader{
    width: 200px;
  }
}
`

export default AdminLogin
