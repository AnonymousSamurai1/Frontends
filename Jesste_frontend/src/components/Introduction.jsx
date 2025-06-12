import React from 'react'
import styled from 'styled-components'
import IntroPage from '../assets/IntroPage.mp4'
import Navbar from './Navbar'
import IntroDescription from './IntroDescription'

function Introduction() {
  
  return (
    <Container>

      <div class="introduction">
        <video src={IntroPage} autoPlay loop muted/>

        <div className='description'>
        <Navbar />
        <IntroDescription />
        </div>
        
      </div>

    </Container>
  )
}

const Container = styled.div`
  .introduction {
    width: 100%;
    height: 100vh; 
    display: flex;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .description{
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color:  rgba(0, 0, 0, 0.74);
  }
  @media (max-width: 900px){
    .introduction{
      height: 105vh;
    }
    .description{
      width: 100.50%;
      height: 105vh;
    }
  }
  
`

export default Introduction
