import React from 'react'
import styled from 'styled-components'
import size from './size'

export default props => <Container {...props}>{props.children}</Container>

const Container = styled.div`
  ${props =>
    props.backgroundColor
      ? 'background-color: ' + props.backgroundColor
      : ''};
  padding:0 2em;
  ${props => (props.padding ? 'padding: ' + props.padding : '')};
  @media only screen and (max-width: ${size.sp}px) {
    padding:0;
    ${props => (props.paddingTop ? 'padding-top: ' + props.paddingTop : '')};
    ${props => (props.padding ? 'padding: ' + props.padding : '')};
  }
  ${props => (props.paddingTop ? 'padding-top: ' + props.paddingTop : '')};
  ${props => (props.marginTop ? 'margin-top: ' + props.marginTop : '')};
  ${props => (props.max ? 'width: 95%' : 'width: 90%')};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`
