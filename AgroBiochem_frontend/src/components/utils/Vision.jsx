import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import { Fade } from 'react-reveal'


function Vision(props) {
  return (
    <Container>
      <div className="main-vision">
        <div className="vision-description">
            <Typed strings={["Vision"]} typeSpeed = {80} backSpeed={80} loop  className='typed1'/>
            <h6>
                AGROBIOCHEM aims to become a leading force in advancing sustainable agriculture 
                across Africa and beyond by harnessing innovative biochemical technologies that 
                enhance crop productivity, improve soil health, and reduce environmental impact.
                We envision a future where farmers thrive, food systems are resilient, and the 
                natural environment is preserved through science-driven, eco-conscious agricultural solutions.
            </h6>
        </div>
        <div className="vision-image">
            <Fade right duration={2000}>
                <img src={props.mis} alt="vision" />
            </Fade>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
.main-vision{
    display: flex;
    width: 100%;
    height: 60vh;
}
.vision-image{
    width: 100%;
    height: 100%;
    img{
        padding: 10% 7% 20% 0%;
        width: 90%;
        height: 70%;
    }
}
.vision-description{
    width: 70%;
    padding: 10% 5%;
    .typed1{
        font-size: 49px;
        background: linear-gradient(97.24deg,rgb(63, 212, 50) 44.37%, rgba(160, 207, 167, 0.25) 113.02%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: bolder;
        font-family: 'Poppins', sans-serif;
        padding: 25%;
    }
    h6{
        color: rgb(71, 71, 71);
        font-size: 12px;
        padding: 5% 0%;
        text-align: justify;
        font-family: 'Poppins', sans-serif;
    }
}
`
export default Vision
