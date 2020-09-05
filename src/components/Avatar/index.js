import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          fixed(height: 60, width: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      fixed={avatarImage.childImageSharp.fixed}
      alt="avatar picture"
      className="foo"
    />
  )
}

export default Avatar
