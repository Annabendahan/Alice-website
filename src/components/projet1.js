import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'

class  Projet1 extends Component {
state = {
  scrolled: false,
  scrolling: 0,
  show: 1
}

render() {


  return(
 <div style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
      position: `relative`,
      zIndex: `10`,
      transition: `all 3s ease-out`
    }} > PROJET 1 </div>
    )
}

}


export default Projet1
