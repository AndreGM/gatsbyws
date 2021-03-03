import React from "react"
import {Link} from "gatsby"
import { title } from './layout.module.css'

const Layout = ({children, pageTitle}) => {
  return(
    <div>
      <Link to='/'> Go to Home page </Link>
      <Link to='/about'> Go to About page </Link>
      <hr/>
      <h1 className={title}>{pageTitle}</h1>
      { children }
    </div>
  )
}
export default Layout