import React from 'react'
import styled from 'styled-components'

export default props => <Wrap>
{props.children}
</Wrap>


const Wrap = styled.div`
  @media only screen and (min-width: 769px) {
    display: none;
  }
`
