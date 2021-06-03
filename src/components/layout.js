import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'


const Layout = ({ pageTitle, children, children2 }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>Take me home</Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
      {children2}
    </main>
  )
}

export default Layout