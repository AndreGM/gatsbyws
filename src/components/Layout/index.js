import React from "react"
import {Link} from "gatsby"
import { title } from './layout.module.css'
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({children, pageTitle}) => {
  return(
    <div>
      <Link to='/'> Go to Home page </Link>
      <Link to='/about'> Go to About page </Link>
      <hr/>
      <h1 className={title}>{pageTitle}</h1>
      <StaticImage src="https://pbs.twimg.com/media/Evkn6fRWgAgxOWe?format=jpg&name=small" alt="image" />
      { children }
    </div>
  )
}
export default Layout