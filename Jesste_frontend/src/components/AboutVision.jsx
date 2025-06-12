import React from 'react'
import styled from 'styled-components'
import VisionImage from '../assets/Vision.png'
import { Fade } from 'react-reveal'

function AboutVision() {
  return (
    <Container>

        <div className='vision_description'>
            <h1 id='vision'>Vision</h1>
            <p>
                Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. 
                Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque. 
                Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. 
                Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque
            </p>
        </div>

        <div className='vision_image'>
            <Fade left duration={3000} distance="40px">
                <img src={VisionImage} alt='image' />
            </Fade> 
        </div>
    </Container>
  )
}

const Container = styled.div`
display: flex;
padding: 4% 0%;
.vision_description{
    padding-top: 5%;
    padding-left: 10%;
}
.vision_description h1{
    font-family: 'Kanit';
    font-size: 60px;
    padding: 2% 0%;
    color: #5C5B5B;
}
.vision_description p{
    font-family: "Lato";
    color: #7C7C7A;
    text-align: justify;
    font-size: 14px;
    line-height: 25px;
}
.vision_image{
    padding: 0% 10%;
}
.vision_image img{
    width: 500px;
}
@media(max-width: 760px){
display: block;
    .vision_description{
        padding: 10%;
    }
    .vision_image{
        padding: 0%;
    }
    .vision_image img{
        padding: left: 10px;
        width: 350px;
        height: 300px;
    }
}

`
export default AboutVision