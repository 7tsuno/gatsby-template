import React from 'react'
import styled from 'styled-components'
import size from './size'

export default props => <Inner {...props} as={props.as}>{props.children && props.children}</Inner>

const Inner = styled.div`
  ${props =>
    props.backgroundColor
      ? 'background-color: ' + props.backgroundColor
      : ''};
  ${props => (props.lineHeight ? 'line-height: ' + props.lineHeight : '')};
  ${props => (props.border ? 'border: solid 1px #000' : '')};
  ${props => (props.borderBottom ? 'border-bottom: solid 1px #000' : '')};
  ${props => (props.borderTop ? 'border-top: solid 1px #000' : '')};
  ${props => (props.borderLeft ? 'border-left: solid 1px #000' : '')};
  ${props => (props.borderRight ? 'border-right: solid 1px #000' : '')};
  ${props => (props.borderColor ? 'border-color: ' + props.borderColor : '')};
  ${props => (props.borderWidth ? 'border-width: ' + props.borderWidth : '')};
  ${props => (props.size ? 'font-size: ' + props.size : '')};
  ${props => (props.bold ? 'font-weight: bold' : '')};
  ${props => (props.normal ? 'font-weight: normal' : '')};
  ${props => (props.center ? 'text-align: center' : '')};
  ${props => (props.color ? 'color : ' + props.color : '')};
  ${props => (props.margin ? 'margin: ' + props.margin : '')};
  ${props => (props.marginTop ? 'margin-top: ' + props.marginTop : '')};
  ${props => (props.marginLeft ? 'margin-left: ' + props.marginLeft : '')};
  ${props => (props.marginRight ? 'margin-right: ' + props.marginRight : '')};
  ${props =>
    props.marginBottom ? 'margin-bottom: ' + props.marginBottom : ''};
  ${props => (props.padding ? 'padding: ' + props.padding : '')};
  ${props => (props.paddingTop ? 'padding-top: ' + props.paddingTop : '')};
  ${props => (props.paddingLeft ? 'padding-left: ' + props.paddingLeft : '')};
  ${props =>
    props.paddingRight ? 'padding-right: ' + props.paddingRight : ''};
  ${props =>
    props.paddingBottom ? 'padding-bottom: ' + props.paddingBottom : ''};
  ${props => (props.textIndent ? 'text-indent: ' + props.textIndent : '')};
  ${props =>
    props.size
      ? ''
      : props.pcSize
        ? 'font-size : ' + props.pcSize
        : ''};
  @media only screen and (max-width: ${size.sp}px) {
    ${props =>
      props.size
        ? ''
        : props.spSize
          ? 'font-size : ' + props.spSize
          : ''};
  }
`
