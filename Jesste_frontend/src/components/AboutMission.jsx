import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import Mission from '../assets/Mission.png'

function AboutMission() {
  return (
    <Container>
    <div className='mission_description_sub'>
        <h1>Mission</h1>
        <p> 
          Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. 
          Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque. 
          Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. 
          Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque
        </p>
      </div>
      <div className='mission_image'>
        <Fade right duration={3000} distance="40px">
          <img src={Mission} alt='image' />
        </Fade>
      </div>
       
      <div className='mission_description'>
        <h1>Mission</h1>
        <p> 
          Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. 
          Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque. 
          Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. 
          Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque
        </p>
      </div>
    </Container>
  )
}

const Container = styled.div`
display: flex;
background: #D9D9D9;
.mission_description{
  padding-top: 5%;
  padding-right: 5%;
}
.mission_description_sub{
  display: none;
}
.mission_description h1{
  font-family: 'Kanit';
  font-size: 60px;
  color: #5C5B5B;
  padding: 2% 0%;
}
.mission_description p{
  font-family: "Lato";
  color: #7C7C7A;
  text-align: justify;
  font-size: 14px;
  line-height: 25px;
  padding-right: 5%;
}
.mission_image{
  padding: 5% 10%;
}
.mission_image img{
  width: 500px;
}
@media(max-width: 760px){
  display: block;
  .mission_description{
    display: none;
  }
  .mission_description_sub{
    display: block;
    padding: 10%;
  }
  .mission_description_sub h1{
    font-family: 'Kanit';
    font-size: 60px;
    padding: 2% 0%;
  }
  .mission_description_sub p{
    font-family: "Lato";
    color: #7C7C7A;
    text-align: justify;
    font-size: 14px;
    line-height: 25px;
    padding-right: 5%;
  }
  .mission_image{
    padding: 0%;
    
  }
  .mission_image img{
      padding: left: 10px;
      width: 350px;
  }
}

`

export default AboutMission