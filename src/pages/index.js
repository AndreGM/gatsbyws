import * as React from "react"
import { Link } from "gatsby"


// markup
const IndexPage = () => {
  return (
    <>
      <Link to='/'> Go to Home page </Link>
      <Link to='/about'> Go to About page </Link>
      <h1> Welcome to my site</h1>
    </>
  )
}

export default IndexPage


