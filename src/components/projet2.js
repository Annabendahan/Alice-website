import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/Gabrielle_Riouah_Web_18_01_24_Test Nina_Supreme0001.jpg';
import pic2 from '../images/discoverPNG.png';

class  Projet2 extends Component {
state = {
  mounted: false
}

componentDidMount = () =>{
 this.setState({mounted: true})
}



render() {


  return(

    <Link to= "/ninaCollection/">

    <div className="picture2" >
    <img  src={pic1} className="pic2" alt="fireSpot" />
     <div className="voirP">  <span className="arrow"> <img  src={pic2} className="picShow" alt="fireSpot" /> </span> </div>
  </div>

  </Link>



    )
}

}


export default Projet2
