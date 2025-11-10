import React from 'react'
import styled from 'styled-components'

function MobileNavigation() {
  return (
    <Container>
      <nav>
        <ul>
            <li>Services</li>
            <li>Resources</li>
            <li>Products</li>

        </ul>
      </nav>
    </Container>
  )
}

const Container = styled.div`

`
export default MobileNavigation
