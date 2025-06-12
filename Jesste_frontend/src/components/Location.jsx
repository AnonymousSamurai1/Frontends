import React from 'react'
import styled from 'styled-components'
import LocationImage from '../assets/Location.png'
import Loader1 from '../assets/Loader1.png'
import Loader2 from '../assets/Loader2.png'
import Loader3 from '../assets/Loader3.png'
import '../index.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-reveal'


const ImageSlide = [
  {
    image: Loader1,
    title: 'Reliable',
  },
  {
    image: Loader2,
    title: 'Effective',
  },
  {
    image: Loader3,
    title: 'Efficient',
  },
]

function Location() {


  const slideProperties = {
    duration: 3500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  };

  return (
    <Container>
        <div className='location_description'>
          <Fade top duration={1000} distance="40px">
            <div className='main_location_description'>
              <p>Company Address</p>
              <h2>Kofi Nimo, Official Town,Ashaiman, Ghana</h2>
            </div>
          </Fade>
        </div>

        <div className='background'>
        <img src={LocationImage} alt='location' />
          <div className = 'main_background'>
          </div>
        </div>

        <div className='main_slide'>
          <Slide {...slideProperties}>
          {ImageSlide.map((each, index)=>(
              <div key={index} className = 'secondary_slide'>
                <img src={each.image} alt='slider' className='secondary_slider'/>
                <div className='secondary_slider_description'>
                  <p>{each.title}</p>
                </div>
              </div>
          ))
          }
          </Slide>
        </div>

    </Container>
  )
}

const Container = styled.div`
padding-top: 10%;

.location_description{
  position: absolute;
  width: 30%;
  padding-top: 28%;
  padding-left: 10%;
  z-index: 2;
}
.main_location_description{
  background-color: white;
  width: 100%;
  height: 40vh;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
}
.main_location_description p{
  font-family: Kanit;
  padding: 3% 4%;
  color: gray;
}
.main_location_description h2{
  color: #00215B;
  font-family: Kanit;
  padding: 5% 20%;
  font-size: 30px;
}
.background{
  display: flex;
  height: 50vh;
  width: 100%;
}
.background img{
    height: 70vh;
    width: 100%;
}
.main_background{
  position: absolute;
  height: 70vh;
  width: 100%;
  background: rgba(53, 52, 52, 0.182);
}
.main_slide{
  padding-top: 15%;
}
.secondary_slide{
  display: flex;
}
.secondary_slider_description{
  background: rgba(53, 52, 52, 0.182);
  height: 70vh;
  width: 100%;
  position: absolute;
  text-align: center;
  color: white;
  font-family: Poppins;
  font-size: 70px;
  padding-top: 2%;
}
.secondary_slider{
  height: 70vh;
  width: 100%;
}
@media (max-width: 760px){
  .location_description{
    position: absolute;
    width: 90%;
    padding-left: 5%;
  }
  .background{
    display: flex;
    height: 68vh;
    width: 100%;
  }
  .main_slide{
    display: none;
  }
}
`
export default Location