import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'

class  Projet2 extends Component {
state = {
  mounted: false
}

componentDidMount = () =>{
 this.setState({mounted: true})
}



render() {


  return(

    <div style={{
      background: `transparent`,
      marginBottom: `1.45rem`,
      position: `relative`,
      zIndex: `15`,
      transition: `all 3s ease-out`
    }} > PROJET 2 </div>



    )
}

}


export default Projet2
