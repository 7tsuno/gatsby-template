import React from 'react'
import styled from 'styled-components'

export default props => <Wrap>
{props.children}
</Wrap>


const Wrap = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
