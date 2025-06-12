import React from 'react'
import styled from 'styled-components'
import Facebook from '../assets/facebookBlack.png'
import Instagram from '../assets/instagramBlack.png'
import Twitter from '../assets/twitterBlack.png'
import LinkedIn from '../assets/linkedinBlack.png'
import { Fade } from 'react-reveal'

const media = [
    Facebook,
    Instagram,
    Twitter,
    LinkedIn
]

function AboutMedia() {
  return (
    <Container>
        <div className="title">
            <h1>Join</h1>
            <p>Join us on our various social media platforms</p>
        </div>
        <div className='media'>
            {
               media.map((each)=>(
                <Fade top duration={1000} distance="40px">
                <div className="media_main">
                    <img src={each} alt= 'media' />
                </div>
                </Fade>
               )) 
            }
        </div>
    </Container>
  )
}
const Container =  styled.div`
.title{
    text-align: center;
    padding: 3% 0%;
    color: #5C5B5B;
    font-family: 'Kanit';
}
.title h1{
    font-size: 60px;
}
.media{
    display: flex;
    justify-content: space-around;
    padding: 2% 25%;

}
@media(max-width: 760px){
    .media{
        justify-content: space-between;
        padding: 10% 10%;
    
    }
    .media_main img{
        width: 50px;
        height: 50px;
    
    }
}
`

export default AboutMedia