import React from 'react'
import styled from 'styled-components'

export default props => <Row>{props.children}</Row>

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`
