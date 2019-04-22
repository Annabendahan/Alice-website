import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/picHDP.png';

class  Projet1 extends Component {
state = {
  scrolled: false,
  scrolling: 0,
  show: 1
}

render() {


  return(
 <div className="picture1">
    <img  src={pic1} className="pic1" alt="fireSpot" />

   </div>
    )
}

}


export default Projet1
