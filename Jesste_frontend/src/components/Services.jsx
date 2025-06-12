import React from 'react'
import styled from 'styled-components'

function Services(props) {
  return (
    <Container>
        <h3>{props.title}</h3>
        <p>{props.statement}</p>
    </Container>
  )
}

const Container = styled.div`
  color: white;
  h3{
    padding-top: 4%;
    font-family: 'Poppins';
    font-weight: bold;
  }
  p{
    font-size: 15px;
  }
`
export default Services
