import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
      <Layout pageTitle="Welcome to Inghelbrecht Agency!">
      <p>Lorem ipsum2</p>
      <StaticImage src="../images/aloha.jpg" alt="griet met paard" />
      </Layout>
  )
}

export default IndexPage