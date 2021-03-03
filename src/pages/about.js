import * as React from "react"
import {Link} from "gatsby"

// markup
const AboutPage = () => {
  return (
    <>
      <Link to='/'> Go to Home page </Link>
      <Link to='/about'> Go to About page </Link>
      <h1> About</h1>
    </>
  )
}

export default AboutPage