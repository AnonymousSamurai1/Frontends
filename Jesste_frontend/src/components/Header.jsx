import React from 'react'
import styled from 'styled-components'
import Typed from 'react-typed'
import Construction from '../assets/Construction.mp4'
import Navbar from './Navbar'

function Header(props) {
  return (
    <Container>
        <div className='introduction'>
            <video src ={Construction} autoPlay loop muted/>
            <div className='description'>
              <Navbar />
              <div className='description-text'>
                <Typed strings={[`${props.head}`]} typeSpeed = {80} backSpeed={80} loop  className='title'/>
                <p>
                In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis non. Suspendisse sodales nulla sit amet sem 
                condimentum, ac euismod nibh elementum. Praesent eu urna at sem sodales venenatis. Mauris efficitur dapibus enim in posuere
                
                </p>
              </div>
            </div>    
        </div>
    </Container>
  )
}
const Container = styled.div`
.introduction {
    width: 100%;
    height: 90vh; 
    display: flex;
  }
  video {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
  .description{
    position: absolute;
    width: 100%;
    height: 90vh;
    background-color:  rgba(0, 0, 0, 0.55);
  }
  .description-text{
    justify-content: center;
    color: white;
    padding: 10% 15%;
  }
  .title{
    padding-left: 22%;
    font-size: 100px;
    font-family: 'Poppins';
    font-weight: 700;
  }
  .description-text p{
    padding: 1% 20%;
    font-family: 'Rubik';
    line-height: 30px;
  }
  @media (max-width: 760px) {
    .introduction {
      height: 80vh; 
    video {
      height: 80vh;
    }
    .description{
      height: 80%;
    }
    .description-text{
        justify-content: center;
        color: white;
        padding: 20% 11%;
    }
    .description-text p{
        padding: 5% 0%;
        font-family: 'Rubik';
        line-height: 30px;
        text-align: justify;
      }
    .title{
        padding-left: 0%;
        font-size: 60px;
        font-family: 'Poppins';
        font-weight: 700;
      }
      
  }
`

export default Header