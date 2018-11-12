import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

export default props => <div>
  <div>{props.data.hoge.hello} {props.data.hoge.gatsby} {props.data.fuga.starter}</div>
  <Img fixed={props.data.file.childImageSharp.fixed} />
</div>

export const news = graphql`
  query {
    hoge{
      hello
      gatsby
    }
    fuga{
      starter
    }
    file(relativePath:{eq:"image/sample.jpg"}){
      childImageSharp {
        fixed(width: 200, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
