import React, { useState } from 'react'
import styled from 'styled-components'
import Location from '../assets/subtract.png'
import Phone from '../assets/phone.png'
import Mail from '../assets/mail.png'
import '../index.css'
import Footer from './Footer'
import Header from './Header'
import { Fade } from 'react-reveal'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const info = [
    {
        image: Phone,
        title: 'Phone:',
        description: '(+233)54-361-9041',
    },
    {
        image: Mail,
        title: 'Mail:',
        description: 'jesseocloo1986@gmail.com',
    },
    {
        image: Location,
        title: 'Location:',
        description: 'Kofi Nimo, Official Town,Ashaiman, Ghana',
    },

];

function ContactInroduction() {

  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    let data = {
      fullname: fullname,
      email: email,
      message: message,
    }
    const result = await fetch ("http://localhost:6570/jesste/api/questions/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    let value = result.json();
    console.warn(value);
    if(fullname || email || message) {
      toast.success('Thanks for your question. We will get back to you shortly');
      setFullname('');
      setEmail('');
      setMessage('');
    }
    else {
      toast.error('Please fill all the fields');
      setFullname('');
      setEmail('');
      setMessage('');
      return false;
    }
  }

  return (
    <Container>

        <Header head = 'Contact Us' />

        <div className='contact-info'>

          <div className='question'>
            <h2>How can we help you?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="main-input">
                <input type='text' placeholder='Enter your fullname' className='input-box' name="fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
              </div>

              <div className="main-input">
                <input type='text' placeholder='Enter your email' className='input-box' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className="main-input">
                <textarea placeholder='Enter your message' name="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
              </div>
              <button className='submit'>Send</button>
            </form>
          </div>

          <div className='info-list'>
            {
              info.map((item, index) => (
                <Fade top duration={1000} distance="40px">
                  <div className='info-item' key={index}>
                  <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Fade>
              ))
            }
          </div>
        </div>

        <Footer />

    </Container>
  )
}

const Container = styled.div`
  .contact-info{
    display: flex;
    padding: 5% 0%;
  }
  .question{
    width: 50%;
    padding: 2% 5%;
  }
  .question h2{
    font-size: 40px;
    font-family: 'Poppins';
    font-weight: 700;
  }
  .question p{
    padding: 3% 30% 3% 0%;
    font-family: 'Rubik';
    font-size: 12px;
  }
  .main-input{
    padding: 2% 0%;
  }
  .input-box{
    width: 500px;
    height: 20px;
    padding: 1% 2%;
    border: 2px solid rgba(128, 128, 128, 0.36);
    outline: none;
    resize: none;
    border-radius: 10px;
    font-family: 'Rubik';
  }
  textarea{
    width: 500px;
    height: 80px;
    padding: 2%;
    border: 2px solid rgba(128, 128, 128, 0.36);
    outline: none;
    resize: none;
    border-radius: 10px;
    font-family: 'Rubik';
  }
  .submit{
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: rgba(128, 128, 128, 0.56);
    color: white;
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 700;
  }
  .submit: hover{
    background-color: rgba(128, 128, 128, 0.76);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
  .info-list{
    padding-top: 6%;
  }
  .info-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 100px;
    padding: 1% 2%;
    border: 2px solid rgba(128, 128, 128, 0.36);
    outline: none;
    resize: none;
    border-radius: 10px;
    font-family: 'Rubik';
  }
  @media(max-width: 760px){
    .contact-info{
      display: block;
      padding: 0%;
    }
    .question{
      width: 350px;
      padding: 10% 5%;
    }
    .question p{
      padding: 3% 1%;
    }
    .main-input{
      padding: 2% 0%;
    }
    .input-box{
      width: 330px;
      height: 40px;
    }
    textarea{
      width: 330px;
    }
    .info-list{
      padding: 10% 10%;
    }
    .info-item{
      display: flex;
      flex-direction: none;
      width: 300px;
      height: 90px;
    }
    
  }

`
export default ContactInroduction