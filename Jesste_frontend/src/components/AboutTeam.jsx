import React from 'react'
import styled from 'styled-components'
import CEO from '../assets/Mr. Ocloo.png'
import COO from '../assets/Mrs. Ocloo.png'
import ITE from '../assets/Edem.png'
import { Fade } from 'react-reveal'

const members = [
    {
        name: 'Mr. Ocloo',
        image: CEO,
        title: 'Chief Executive Officer',
    },
    {
        name: 'Mrs. Ocloo',
        image: COO,
        title: 'Chief Operation Officer',
    },
    {
        name: 'Edem',
        image: ITE,
        title: 'IT Expert',
    }
]

function AboutTeam() {
  return (
    <Container>
        <div className='title'>
            <p>The brains behind our success</p>
            <h1>Meet The Team</h1>
        </div>
        <div className='members'>
        {
            members.map((each, index)=>(
                <Fade top duration={1000} distance="40px">
                    <div className='team_member'key={index}>
                        <img src={each.image} alt='Member' />
                        <h2>{each.name}</h2>
                        <p>{each.title}</p>
                    </div>
                </Fade>
            ))
        }
        </div>
        
    </Container>
  )
}

const Container = styled.div`
background: #D9D9D9;
.title{
    text-align: center;
    padding: 3% 0%;
    color: #5C5B5B;
    font-family: 'Kanit';
}
.title h1{
    font-size: 60px;
}
.members{
    display: flex;
    justify-content: space-around;
    padding: 2% 0% 8% 0%;
}
.team_member{
    background: white;
    padding: 2% 5% 5% 5%;
    border-radius: 20px;
    font-family: 'Kanit';
    text-align: center;
    color: #5C5B5B;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
}
@media (max-width: 760px) {
    .members {
        display: block;
    }
    .team_member{
        padding: 5% 0%;
        margin: 5% 10%;
    }
}
`
export default AboutTeam