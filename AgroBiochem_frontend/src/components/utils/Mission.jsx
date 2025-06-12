import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import { Fade } from 'react-reveal'


function Mission(props) {
  return (
    <Container>
      <div className="main-mission">
            <div className="mission-image">
            <Fade left duration={2000}>
                <img src={props.mis} alt="mission" />
            </Fade>
        </div>
        <div className="mission-description">
            <Typed strings={["Mission"]} typeSpeed = {80} backSpeed={80} loop  className='typed1'/>
            <h6>
                AGROBIOCHEM is dedicated to advancing sustainable agriculture through 
                the development of eco-friendly biochemical products that improve crop 
                health, boost yields, and enrich soil fertility. We support farmers with 
                innovative, science-based solutions that reduce dependence on synthetic chemicals, 
                protect the environment, and enhance food security. Our mission is to empower agricultural 
                communities and drive resilient, green farming systems for a better future.
            </h6>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
.main-mission{
    display: flex;
    width: 100%;
    height: 60vh;
}
.mission-image{
    width: 100%;
    height: 100%;
    img{
        padding: 20% 10%;
        width: 95%;
        height: 70%;
    }
}
.mission-description{
    width: 80%;
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
export default Mission
