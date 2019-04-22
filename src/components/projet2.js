import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/picNina.png';

class  Projet2 extends Component {
state = {
  mounted: false
}

componentDidMount = () =>{
 this.setState({mounted: true})
}



render() {


  return(

    <div className="picture2" >
    <img  src={pic1} className="pic2" alt="fireSpot" />
  </div>



    )
}

}


export default Projet2
