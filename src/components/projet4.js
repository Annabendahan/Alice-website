import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/picKnicks.png';

class  Projet4 extends Component {
state = {
  scrolled: false,
  scrolling: 0,
  show: 1
}

render() {


  return(

    <div className="picture4" >
    <img  src={pic1} className="pic3" alt="fireSpot" />
    </div>



    )
}

}


export default Projet4
