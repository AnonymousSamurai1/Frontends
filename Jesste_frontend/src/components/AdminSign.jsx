import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import RiseLoader from "react-spinners/RiseLoader";
import { Fade } from 'react-reveal'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from 'react-router-dom';

function AdminSign() {

    const [number, setNumber] = useState('');

  const generateRandomNumbers = (event) => {
    event.preventDefault(); 
    const newNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    setNumber("Jesste"+newNumber);
  }
  const [loading, setLoading] = useState();
  useEffect(() => {   
  setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 5000);

  }, [])

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretcode, setSecretcode] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    let data = {
      fullname: fullname,
      email: email,
      password: password,
      secretcode: secretcode,

    };
    let result = await fetch('http://localhost:6570/jesste/api/admins/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    let value = await result.json();
    console.warn(value);
    if(fullname || email|| secretcode|| password)
    {
     if(password.length < 8){
        toast.error("Password must be at least 8 characters long");
      }
      else if(secretcode < 12){
        toast.error("Secretcode is incorrect");
      }
      else if(value.success){
        toast.success('Signup successful!');
        navigate('/adminlogin');
      }
      else{
        toast.error(value.message);
        return false;
      }
      
    }
    else{
      toast.error('Please fill all fields');
      return false;
    }
  }

  return (
    <Container>
        <form onSubmit={handleSubmit}>
            <div className='info-main'>
                <label for='Fullname'>Fullname:</label>
                <br />
                <input type='text' name='Fullname' id='fullname' placeholder='Enter fullname' value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
            </div>
            <div className='info-main'>
                <label for='Username'>Username:</label>
                <br />
                <input type='email' name='Email' id='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='info-main'>
                <label for='Username'>Password:</label>
                <br />
                <input type='password' name='Password' id='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='info-main'>
            <div className="generate">
            <button onClick={generateRandomNumbers} className='generate-button'>Generate</button>
            {
                number && (
                    <div className="number-info">
                    {
                        loading ?
                        <RiseLoader color={"#F37A24"} loading={loading} size={13} />
        
                        :
                        <Fade>
                            <p>{number}</p>
                        </Fade>
                    }
                    </div>
                )
                                  

            }
            </div>
            </div>
            <div className='info-main'>
                <label for='Username'>SecretCode:</label>
                <br />
                <input type='password' name='SecretCode' id='secretcode' placeholder='Enter yourcode' value={secretcode} onChange={(e)=>setSecretcode(e.target.value)}/>
            </div>
            <div className='button'>
                <button>Sign In</button>
            </div>
            </form>
    </Container>
  )
}

const Container = styled.div`
.info-main{
    padding: 1.5% 9%;
  }
  label{
    padding: 2% 0%;
    font-family: "Rubik";
    font-size: 14px;
  }
  input{
    width: 470px;
    height: 50px;
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
  .generate{
    display: flex;
    justify-content: space-around;
    padding: 0% 20%;
    align-items: center;
  }
  .generate-button{
    width: 100px;
    height: 40px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    background-color: rgba(255, 228, 196, 0.866);
  }
`
export default AdminSign
