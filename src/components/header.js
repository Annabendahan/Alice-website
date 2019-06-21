import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: `.45rem`,
      position: `relative`,
      zIndex: `10`
    }}
  >
    <div className="tabs-container"

    >
      <div> <h1 style={{ margin: `15px` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `1rem`,
          }}
        >

         <h1> ALICE THONNIER </h1>


        </Link>  </h1> </div>
        <div className='tabs'>
          <Link
          to="/projets/"
          style={{
            padding: `0px 30px`,
            color: `white`,
            fontWeight: `400`,
            fontSize: `.7rem`,
            textDecoration: `none`,
          }}
        > <span className="proj"> PROJECTS </span> <svg  className="svg1" width="31" height="30" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="9" y1="33.5" x2="62" y2="33.5" stroke="white" stroke-width="2"/>
</svg>
 </Link>

        <Link
          to="/moodboard/"
          style={{
            padding: `0px 30px`,
            fontWeight: `400`,
            color: `white`,
            fontSize: `.7rem`,
            textDecoration: `none`,
          }}
        > <span className="md"> MOODBOARD </span>  <svg className="svg2" width="31" height="30" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="9" y1="33.5" x2="62" y2="33.5" stroke="white" stroke-width="2"/>
</svg>
</Link>

        <Link
          to="/about/"
          style={{
            padding: `0px 30px`,
            fontWeight: `400`,
            color: `white`,
            fontSize: `.7rem`,
            textDecoration: `none`,
          }}
        > <span className="ab"> ABOUT </span>  <svg className="svg3" width="31" height="30" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="9" y1="33.5" x2="62" y2="33.5" stroke="white" stroke-width="2"/>
</svg>
</Link>

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
