import React from 'react'
import styled from 'styled-components'
import Background from '../assets/Background.png'
import Fade from 'react-reveal'
import '../index.css'

function IntroductionEmail() {
  return (
    <Container>
      <div className= "email_background">
      <div className='main_email_background'>
        <div className="main">
          <Fade right duration={1000} distance="40px">
          <h1>JESSTE ENGINEERING</h1>
          </Fade>
          <p>
            Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo
             consectetur accumsan.Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. 
             Phasellus faucibus pellentesque
          </p>
        <div className="input_main">
          <input type="text" name="" id="" placeholder='Enter your email' className='email_input'/>
          <br />
          <input type="submit" name="" id="" value='Get Started' className='button'/>
        </div>
        </div>

      </div>   
      </div>
    </Container>
  )
}
const Container = styled.div`
padding-top: 15%;
  .email_background{
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    height: 80vh;
    width: 100%;
  }
  .main_email_background{
    height: 100%;
    width: 100%;
    background: rgba(23, 23, 23, 0.65);
  }
  .main h1{
    font-size: 70px;
    color: #fff;
    text-align: center;
    font-family: "Poppins";
    font-weight: 600;
    padding-top: 6%;
  }
  .main p{
    color: #fff;
    text-align: justify;
    font-family: "Calibri";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    padding: 1% 30%;
  }
  .input_main{
    padding-top: 2% ;
    padding-left: 24%;
    display: flex;
  }
  .email_input{
    width: 550px;
    height: 60px;
    border: 1px solid #fff;
    background: rgba(255, 253, 253, 0.69);
    border-radius: 10px 0px 0px 10px;
    border: none;
    padding-left: 30px;
    font-size: 16px;
  }
  .button{
    height: 60px;
    width: 200px;
    background: rgba(255, 220, 152, 0.69);
    border-radius: 0px 10px 10px 0px;
    border: none;
    color: #fff;
    font-size: 16px;
  }
  .button: hover{
    cursor: pointer;
  }
  @media (max-width: 760px){
    .email_background{
      height: 60vh;
    }
    .main h1{
      font-size: 31px;
      text-align: left;
      padding: 20% 5% 8% 5%;
    }
    .main p{
      text-align: justify;
      font-family: "Calibri";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 22px;
      padding: 0% 5% 6% 5%;
    }
    .input_main{
      justify-content: space-between;
      padding-top: 2% ;
      padding-left: 5%;
      display: block;
    }
    .email_input{
      width: 320px;
      border-radius: 10px;
    }
    .button{
      width: 350px;
      margin-top: 4%;
      border-radius: 10px;
      
    }
  }
`

export default IntroductionEmail
