// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>I'm making this by following the Gatsby Tutorial.</p>
    <StaticImage
        alt="just a fancy pic"
        src="../images/fancy-pic.jpg"
      />
    <p>Second Words</p>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage