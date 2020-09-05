import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about"
      background="black"
      category="Misc"
      date="05 de setembro de 2020"
      timeToRead="7"
      title="PropsTypes"
      description="Utilizando props"
    />
    <PostItem
      slug="/about"
      background="red"
      category="JS"
      date="06 de setembro de 2020"
      timeToRead="4"
      title="PropsTypes"
      description="Utilizando props 2"
    />
    <PostItem
      slug="/about"
      category="CSS"
      date="07 de setembro de 2020"
      timeToRead="4"
      title="PropsTypes"
      description="Utilizando props 3"
    />
  </Layout>
)

export default IndexPage
