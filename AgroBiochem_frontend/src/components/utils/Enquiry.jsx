import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'


function Enquiry (props) {
  return (
    <Container>
      <div className="main-location">
        <div className='contact-info'>
          <div className='question'>
            <h2>How can we help you?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <form>
              <div className="main-input">
                <input type='text' placeholder='Enter your fullname' className='input-box' name="fullname" />
              </div>

              <div className="main-input">
                <input type='text' placeholder='Enter your email' className='input-box' name="email" />
              </div>

              <div className="main-input">
                <textarea placeholder='Enter your message' name="message" />
              </div>
              <button className='submit'>Send</button>
            </form>
          </div>

          <Fade right duration={2000}>
            <img src={props.farmer} alt="Farmer" className='farmer'/>
          </Fade>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
.main-location{
    display: flex;
    width: 100%;
    height: 60vh;
}
  .contact-info{
    display: flex;
    padding: 1% 0%;
  }
  .question{
    width: 100%;
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
    color: gray;
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
  .farmer{
    width: 250px;
    height: 250px;
    padding: 6% 2%;
  }
`
export default Enquiry;
