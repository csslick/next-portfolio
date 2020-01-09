import Link from 'next/link'
import Layout from "./comps/Layout"

const About = () => (
  <Layout title="about">
    <h1>About</h1>
    <p>A Web Creator</p>
    <img 
      width="100%"
      src="imgs/logo.png" alt="logo"/>
  </Layout>
)

export default About