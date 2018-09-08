import React from 'react'
import styled from 'styled-components'
import size from './size'

export default props => <Container>{props.children}</Container>

const Container = styled.div`
  width: 1200px;
  @media only screen and (max-width: ${size.pc}px) {
    width: 90%;
  }
  margin-left: auto;
  margin-right: auto;
`
