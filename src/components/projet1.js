import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/metro (20 sur 7).jpg';
import pic2 from '../images/disc1.png';

class  Projet1 extends Component {
state = {
  scrolled: false,
  scrolling: 0,
  show: 1
}

render() {


  return(

<Link to= "/heuredepointe/">

 <div className="picture1" >
    <img  src={pic1} className="pic1" alt="fireSpot" />
     <div className="voirP"> <span className="arrow"> <img  src={pic2} className="picShow" alt="fireSpot" />


 </span> </div>

   </div>


   </Link>
    )
}

}


export default Projet1
