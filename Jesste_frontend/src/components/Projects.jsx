import React, {useState} from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import First from '../assets/First.png'
import Second from '../assets/Second.png'
import Third from '../assets/Third.png'
import Forth from '../assets/Forth.png'
import Fifth from '../assets/Fifth.png'
import Sixth from '../assets/Sixth.png'
import Seventh from '../assets/Seventh.png'
import Eight from '../assets/Eight.png'
import Fade from 'react-reveal'

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);


  const handleHover = () => {
    setIsOpen(true);
  };
  const handleLeave = () => {
    setIsOpen(false);
  };
  const handleHover1 = () => {
    setIsOpen1(true);
  };
  const handleLeave1 = () => {
    setIsOpen1(false);
  };
  const handleHover2 = () => {
    setIsOpen2(true);
  };
  const handleLeave2 = () => {
    setIsOpen2(false);
  };
  const handleHover3 = () => {
    setIsOpen3(true);
  };
  const handleLeave3 = () => {
    setIsOpen3(false);
  };
  const handleHover4 = () => {
    setIsOpen4(true);
  };
  const handleLeave4 = () => {
    setIsOpen4(false);
  };
  const handleHover5 = () => {
    setIsOpen5(true);
  };
  const handleLeave5 = () => {
    setIsOpen5(false);
  };
  const handleHover6 = () => {
    setIsOpen6(true);
  };
  const handleLeave6 = () => {
    setIsOpen6(false);
  };
  const handleHover7= () => {
    setIsOpen7(true);
  };
  const handleLeave7 = () => {
    setIsOpen7(false);
  };

  
  return (
    <Container>
      <h1>Our Projects</h1>
      <Typed strings={["Our Special Projects"]} typeSpeed = {80} backSpeed={80} loop  className='typed'/>
      <div className='main_project'>

        <Fade top duration={1000} distance="40px">

          <div className='main_first' onMouseLeave={handleLeave}>
          <img src={First} alt='' className='main' onMouseEnter={handleHover}/>
          {
            isOpen && (
              <Fade duration={800}>
                <div className='main_hover'>
                  <p>h1</p>
                </div>
              </Fade>
              
            )
          }
          </div>

        </Fade>
      
        <Fade buttom duration={1000} distance="40px">

      <div className='projects'>
        <div className='secondary_first' onMouseLeave={handleLeave2}>
        <img src={Second} alt='' className='secondary_main' onMouseEnter={handleHover2}/>
        {
          isOpen2 && (
            <Fade duration={800}>
              <div className='secondary_hover'>
                <p>h1</p>
              </div>
            </Fade>
          )
        }
        </div>

        <div className='secondary_first' onMouseLeave={handleLeave3}>
        <img src={Third} alt='' className='secondary_main' onMouseEnter={handleHover3}/>
        {
          isOpen3 && (
            <Fade duration={800}>
              <div className='secondary_hover'>
                <p>h1</p>
              </div>
            </Fade>
          )
        }
        </div>

        <div className='secondary_first' onMouseLeave={handleLeave4}>
        <img src={Forth} alt='' className='secondary_main' onMouseEnter={handleHover4}/>
        {
          isOpen4 && (
            <Fade duration={800}>
              <div className='secondary_hover'>
                <p>h1</p>
              </div>
            </Fade>
          )
        }
        </div>

        <div className='secondary_first' onMouseLeave={handleLeave5}>
        <img src={Fifth} alt='' className='secondary_main' onMouseEnter={handleHover5}/>
        {
          isOpen5 && (
            <Fade duration={800}>
              <div className='secondary_hover'>
                <p>h1</p>
              </div>
            </Fade>
          )
        }
        </div>

       <div className='secondary_first' onMouseLeave={handleLeave6}>
        <img src={Sixth} alt='' className='secondary_main' onMouseEnter={handleHover6}/>
        {
          isOpen6 && (
            <Fade duration={800}>
              <div className='secondary_hover'>
                <p>h1</p>
              </div>
            </Fade>
          )
        }
        </div>

        <div className='secondary_first' onMouseLeave={handleLeave7}>
        <img src={Seventh} alt='' className='secondary_main' onMouseEnter={handleHover7}/>
        {
          isOpen7 && (
            <Fade duration={800}>
              <div className='secondary_hover'>
                <p>h1</p>
              </div>
            </Fade>
            
          )
        }
        </div>
  
      
    </div>
    </Fade>

    <Fade top duration={1000} distance="40px">
    <div className='main_first' onMouseLeave={handleLeave1}>
    <img src={Eight} alt='' className='main' onMouseEnter={handleHover1}/>
    {
      isOpen1 && (
        <Fade duration={800}>
          <div className='main_hover'>
            <p>h1</p>
          </div>
        </Fade>
      )
    }
    </div>

  </Fade>

      </div>
    </Container>
  )
}

const Container = styled.div`
  h1{
    font-size: 2rem;
    text-align: center;
    padding-top: 6rem;
    padding-buttom: 6rem;
    color: #E3CD5A;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
  }
  .typed{
    font-size: 3rem;
    text-align: center;
    font-weight: 700;
    padding-left: 35%;
    font-family: 'Rubik', sans-serif;
  }
  .main_project{
    display: flex;
    padding: 3% 17%;
    justify-content: space-between;
  }
  .main_first{
    width: 200px;
    height: 585px;
    display: flex;
  }
  .main{
    width: 200px;
    height: 585px;
  }
  .main_hover{
    position: absolute;
    width: 200px;
    height: 585px;
    background-color: rgba(255, 252, 252, 0.590);
  }
  .projects{
    display: flex;
    flex-wrap: wrap;
    width: 55%;
    padding-top: 2%;
    justify-content: space-around;
  }
  .secondary_first{
    width: 230px;
    height: 160px;  
    display: flex;
  }
  .secondary_main{
    width: 230px;
    height: 160px;
  }
  .secondary_hover{
    position: absolute;
    width: 230px;
    height: 160px;
    background-color: rgba(255, 252, 252, 0.590);
  }
  @media (max-width: 760px){
    h1{
      font-size: 30px;
    }
    .typed{
      font-size: 30px;
      padding-left: 12%;
    }
    .main_project{
      display: block;
      padding: 3% 0%;
      justify-content: space-between;
    }
    .main_first{
      width: 230px;
      height: 160px;  
      display: flex;
      padding: 7% 20%;
    }
    .main{
      width: 230px;
      height: 160px;
    }
    .main_hover{
      width: 230px;
      height: 160px;
    }
    .projects{
      display: flex;
      flex-wrap: wrap;
      width: 55%;
      padding: 0% 22%;
      justify-content: space-around;
    }
    .secondary_first{
      padding: 7% 0%;
    }
  }
`
export default Projects
