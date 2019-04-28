import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/knicks.png';
import pic2 from '../images/disc1.png';

class  Projet4 extends Component {
state = {
  scrolled: false,
  scrolling: 0,
  show: 1
}

render() {


  return(

    <Link to= "/knicksQueens/">

    <div className="picture4" >
    <img  src={pic1} className="pic4" alt="fireSpot" />
    <div className="voirP">  <span className="arrow"> <img  src={pic2} className="picShow" alt="fireSpot" /> </span> </div>
    </div>

    </Link>



    )
}

}


export default Projet4
