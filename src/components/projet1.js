import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/image 5.png';
import pic2 from '../images/disc1.png';

class  Projet1 extends Component {
state = {
  mount: false
}



componentDidMount(){
  this.setState({mount: true})
}



render() {


  return(

<Link to= "/heuredepointe/">



 <div className="projet p1">
        <div style= {{
          zIndex:  `20`,
          position: `relative`,

        }}>
           <div className="picture1" >
    <img  src={pic1} className="pic1" alt="fireSpot" />
     <div className="voirP"> <span className="arrow"> <img  src={pic2} className="picShow" alt="fireSpot" />


 </span> </div>

   </div>

           <h3 className="title"> Heures de pointe </h3>
           <h4 className="subtitle"> Designer & Pattern Maker </h4>

        </div>

      </div>




   </Link>
    )
}

}


export default Projet1
