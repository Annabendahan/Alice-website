import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
      position: `relative`,
      zIndex: `10`
    }}
  >
    <div className="tabs-container"

    >
      <div> <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          {siteDescription}
        </Link>  </h1> </div>
        <div className='tabs'>
          <Link
          to="/projets/"
          style={{
            padding: `0px 20px`,
            color: `white`,
            textDecoration: `none`,
          }}
        > Projets </Link>
        <Link
          to="/projets/"
          style={{
            padding: `0px 20px`,
            color: `white`,
            textDecoration: `none`,
          }}
        > About </Link>

        </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
