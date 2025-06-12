import React from 'react'
import styled from 'styled-components'
import '../index.css'
import Typed from 'react-typed'
import Services from './Services'
import Construction from '../assets/construction-logo.png'
import Architecture from '../assets/architecture-logo.png'
import LandSurvey from '../assets/land-surveying-logo.png'
import Building from '../assets/building-logo.png'
import LandScape from '../assets/landscape-logo.png'
import { Fade } from 'react-reveal'

const service = [
  {
    image: Architecture,
    description: 'Lorem ipsum dolor sit consectetur adipiscing.',
    title: 'Architecture'
  },
  {
    image: LandSurvey,
    description: 'Lorem ipsum dolor sit consectetur adipiscing.',
    title: 'Survey'
  },
  {
    image: Construction,
    description: 'Lorem ipsum dolor sit consectetur adipiscing.',
    title: 'Civil Engineering'
  },
  {
    image: Building,
    description: 'Lorem ipsum dolor sit consectetur adipiscing.',
    title: 'Construction'
  },
  {
    image: LandScape,
    description: 'Lorem ipsum dolor sit consectetur adipiscing.',
    title: 'Land Sale'
  },
  
]

function Introduction() {
  return (
    <Container>
      <div className='beginner'>
      <div className='title'>
       <Fade duration={1000} distance="40px">
          <h1>
         
            <span className='span'>JESSTE ENGINEERING</span>,<br /> 
          
          THE MOST <Typed strings={["RELIABLE","EFFECTIVE",]} typeSpeed = {80} backSpeed={80} loop  className='typed'/>
         <br />COMPANY IN GHANA
         </h1>
      </Fade>
         <p>
         In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis non. Suspendisse sodales nulla sit amet sem 
         condimentum, ac euismod nibh elementum. Praesent eu urna at sem sodales venenatis. Mauris efficitur dapibus enim in posuere
         </p>

         <div className="button-container">
            <button> GET STARTED</button>
         </div>

      </div>

      <div className='main_services'>
        <div className='services'>
          <div className="services_title">
            <h1>Our services</h1>
          </div>

          {
            service.map ((each, index)=>(
              <div className='special_services' key={index}>
              <img src={each.image} alt="construction" />
              <Services title={each.title} statement={each.description}/>
              </div>
            ))
          }

        </div>
      </div>
      </div>

      <div className='title1'>
       <Fade duration={1000} distance="40px">
          <h1>
            <span className='span'>JESSTE ENGINEERING</span>,<br /> 
  
          THE MOST <br />
           <Typed strings={["RELIABLE","EFFECTIVE",]} typeSpeed = {80} backSpeed={80} loop  className='typed'/>
         <br />COMPANY IN GHANA
         </h1>
      </Fade>
         <p>
         In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis non. Suspendisse sodales nulla sit amet sem 
         condimentum, ac euismod nibh elementum. Praesent eu urna at sem sodales venenatis. Mauris efficitur dapibus enim in posuere
         </p>

         <div className="button-container">
            <button> GET STARTED</button>
         </div>

      </div>
    </Container>
  )
}

const Container = styled.div`
.beginner{
  display: flex;
}
.title {
  width: 60%;
  padding: 5% 5%;
}

.title h1{
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 49px;
  line-height: 76px;
  color: rgba(230, 227, 227, 0.989)
}
.span{
  color: #FFD39F;
  font-weight: bold;
}
.typed{
  font-size: 49px;
  background: linear-gradient(97.24deg, #FFE6C8 44.37%, rgba(243, 193, 95, 0) 113.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.title p{
  color: white;
  padding-top: 2%;
  padding-right: 20%;
  text-align: justify;
  font-family: 'Kanit';
  font-size: 15px;
}
.button-container{
  padding-top: 5%
}
button{
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background: rgba(255, 251, 251, 0.45);
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 36px;
}
button:hover{
  background: transparent;
  cursor: pointer;
  color: rgba(230, 227, 227, 0.989);
  border: 3px solid rgba(230, 227, 227, 0.989);
  transition: 1s;
  transform: scale(1.1);
}

.main_services {
  width: 50%;
  padding-left: 12%;
  padding-top: 1%
  
}
.services {
  width: 90%;
  border-radius: 20px;
  background: rgba(89, 89, 89, 0.81);
  border-radius: 20px;
  border: 2px solid white;
  padding-top: 10px;
  padding-bottom: 10px;
}
.services_title{
  border-bottom: 2px solid #F9EDD7;
  margin: 0% 25%;
}
.services_title h1{
  color: white;
  font-size: 35px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(97.24deg, #F9EDD7 44.37%, rgba(243, 193, 95, 0) 113.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.special_services{
  display: flex;
  padding: 2.5% 3%;
  justify-content: space-around;
}
.special_services img{
  width: 60px;
  height: 64px;
}
.title1{
  display: none;
}
@media (max-width: 760px){
  .beginner{
    display: none;
  }
  .title1{
    display: block;
    padding: 4%;
  }
  .title1 h1{
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 49px;
    line-height: 76px;
    color: rgba(230, 227, 227, 0.989)
  }
  .typed{
    font-size: 49px;
    background: linear-gradient(97.24deg, #FFE6C8 44.37%, rgba(243, 193, 95, 0) 113.02%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .title1 p{
    color: white;
    padding-top: 2%;
    padding-right: 0%;
    text-align: justify;
    font-family: "Calibri";
    font-size: 17px;
  }
  .button-container{
    padding-top: 5%
  }
  button{
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background: rgba(255, 251, 251, 0.45);
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 36px;
  }
  button:hover{
    background: transparent;
    cursor: pointer;
    color: rgba(230, 227, 227, 0.989);
    border: 3px solid rgba(230, 227, 227, 0.989);
    transition: 1s;
    transform: scale(1.1);
  }
}
`
export default Introduction
