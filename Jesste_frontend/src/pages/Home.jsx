import React from 'react'
import styled from 'styled-components'
import Introduction from '../components/Introduction'
import IntroProfile from '../components/IntroProfile'
import Projects from '../components/Projects'
import About from '../components/IntroductionAbout'
import IntroductionEmail from '../components/IntroductionEmail'
import Testimonies from '../components/Testimonies'
import Questions from '../components/Questions'
import Location from '../components/Location'
import Footer from '../components/Footer'

function Home() {
  
  return (
    <Container>

        <Introduction />

        <About />

        <IntroProfile />

        <Projects />

        <IntroductionEmail />
        
        <Testimonies />

        <Questions />

         <Location />

         <Footer />


    </Container>
  )
}

const Container = styled.div`
width: 100%;
`

export default Home
