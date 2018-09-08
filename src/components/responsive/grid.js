import React from 'react'
import styled from 'styled-components'
import size from './size'

export default props => {
  return <Grid {...props}>{props.children}</Grid>
}

const Grid = styled.div`
  width: ${props => (props.pc ? (100 / 12) * props.pc + '%' : '100%')};
  margin-left: ${props =>
    props.pcOffset ? (100 / 12) * props.pcOffset + '%' : '0'};
  @media only screen and (max-width: ${size.pc}px) {
    width: ${props => (props.tab ? (100 / 12) * props.tab + '%' : '100%')};
    margin-left: ${props =>
      props.tabOffset ? (100 / 12) * props.tabOffset + '%' : '0'};
  }
  @media only screen and (max-width: ${size.tab}px) {
    width: ${props => (props.sp ? (100 / 12) * props.sp + '%' : '100%')};
    margin-left: ${props =>
      props.spOffset ? (100 / 12) * props.spOffset + '%' : '0'};
  }
`
