import React, {useState} from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import Arrow from '../assets/arrow.png'
import { Fade } from 'react-reveal'

const questions =[
    {
        question: "What is the name of the company?",
        answers: "Jesste Construction and Survey",
        image: Arrow,
    },
    {
        question: "What is the vision of the company?",
        answers: " The vision of the company is to provide the best of service in the field of construction to all nations ",
        image: Arrow,
    },
    {
      
        question: "Where is the company situated?",
        answers: "The company is situated in Ashaiman",
        image: Arrow,
    }
]

function Questions() {

  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleHover = () => {
    setIsActive(true);
  };

  const handleLeave = () => {
    setIsActive(false);
  };

  const handleHover1 = () => {
    setIsOpen(true);
  };

  const handleLeave1 = () => {
    setIsOpen(false);
  };
  const handleHover2 = () => {
    setIsHover(true);
  };

  const handleLeave2 = () => {
    setIsHover(false);
  };

  return (
    <Container>
        <div className='title'>
          <h1>Questions</h1>
          <Typed strings={["Frequently Asked Questions"]} typeSpeed = {80} backSpeed={80} loop  className='typed'/>
        </div>
       
        <div className='question_container'>

              <div className='question' >
                <h2>{questions[0].question}</h2>
                <img src = {questions[0].image} alt='arrows' onMouseEnter={handleHover} onMouseLeave={handleLeave}/>
                <div className='main_answer'>
                  {
                    isActive && (
                      <Fade top duration={1000} distance="40px">
                        <div className='answers'>
                          <p>{questions[0].answers}</p>
                        </div>
                      </Fade>
                      
                    )
                  }
                </div>
              </div>
              
              <div className='question'>
                <h2>{questions[1].question}</h2>
                <img src = {questions[1].image} alt='arrows' onMouseEnter={handleHover1} onMouseLeave={handleLeave1}/>
                <div className='main_answer'>
                  {
                    isOpen && (
                      <Fade top duration={1000} distance="40px">
                      <div className='answers'>
                        <p>{questions[1].answers}</p>
                      </div>
                    </Fade>
                    )
                  }
                </div>
              </div>
              
              <div className='question'>
                <h2>{questions[2].question}</h2>
                <img src = {questions[2].image} alt='arrows' onMouseEnter={handleHover2} onMouseLeave={handleLeave2}/>
                <div className='main_answer'>
                  {
                    isHover && (
                      <Fade top duration={1000} distance="40px">
                        <div className='answers'>
                          <p>{questions[2].answers}</p>
                        </div>
                      </Fade>
                    )
                  }
                </div>
              </div>
        </div>

    </Container>
  )
}

const Container = styled.div`
.title{
  padding: 8% 1% 3% 1%;
}
.title h1{
  font-size: 2rem;
  text-align: center;
  padding-buttom: 6rem;
  color: #E3CD5A;
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
}
.typed{
  font-size: 3rem;
  text-align: center;
  font-weight: 700;
  padding-left: 27%;
  font-family: 'Rubik', sans-serif;
}
.question_container{
  padding: 0% 35%;
}
.question{
  display: flex;
  background-color: #FFD39F;
  padding: 5%;
  margin-top: 17%;
  border-radius: 10px;
  justify-content: space-between;
}
.question img {
  width: 25px;
  height: 20px;
  padding-top: 2%;
}
.question img: hover{
  transform: rotate(180deg);
  transition: all 1.0s ease;
}
.main_answer{
  position: absolute;
  margin-top: 3.5%;
}
.answers{
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: white;
  position: absolute;
  width: 410px;
}
.answers p{
  padding: 3% 2%;
  text alignment: center;
}
@media (max-width: 760px){
  .title h1{
    font-size: 31px;
  }
  .typed{
    font-size: 23px;
    text-align: center;
    font-weight: 700;
    padding-left: 7%;
    font-family: 'Rubik', sans-serif;
  }
  .question{
    margin-top: 20%;
  }
  .question_container{
    padding: 0% 5% 10% 5%;
  }
  .question h2{
    font-size: 15px;
  }
  .main_answer{
    position: absolute;
    margin-top: 12%;
  }
  .answers{
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: white;
    position: absolute;
    width: 310px;
  }
}
`
export default Questions