import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import Experience from '../assets/Experience.png'
function AboutYears() {
  return (
    <Container>

        <div className='experience_description'>
            <h1>Years of Experience</h1>
            <p>
                Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. 
                Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque. 
                Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. 
                Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque
            </p>
        </div>

        <div className='experience_image'>
            <Fade left duration={3000} distance="40px">
                <img src={Experience} alt='image' />
            </Fade> 
        </div>
    </Container>
  )
}

const Container = styled.div`
display: flex;
padding: 4% 0%;
.experience_description{
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 6%;
}
.experience_description h1{
    font-family: 'Kanit';
    font-size: 60px;
    padding: 2% 0%;
    color: #5C5B5B;
}
.experience_description p{
    font-family: "Lato";
    color: #7C7C7A;
    text-align: justify;
    font-size: 14px;
    line-height: 25px;
}
.experience_image{
    padding: 0% 10%;
}
.experience_image img{
    width: 400px;
    height: 450px;
}
@media(max-width: 760px){
display: block;
  .experience_description{
      padding: 10%;
  }
  .experience_image{
      padding-left: 5%;
  }
  .experience_image img{
      width: 350px;
      height: 350px;
  }
}
`

export default AboutYears