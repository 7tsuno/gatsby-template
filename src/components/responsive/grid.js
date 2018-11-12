import React from 'react'
import styled from 'styled-components'
import size from './size'

export default props => <Grid {...props}>{props.children}</Grid>

const Grid = styled.div`
  width: ${props => (props.pc ? (100 / 12) * props.pc + '%' : '100%')};
  margin-left: ${props =>
    props.pcOffset ? (100 / 12) * props.pcOffset + '%' : '0'};
  @media only screen and (max-width: ${size.sp}px) {
    width: ${props => (props.sp ? (100 / 12) * props.sp + '%' : '100%')};
    margin-left: ${props =>
      props.spOffset ? (100 / 12) * props.spOffset + '%' : '0'};
  }
`
