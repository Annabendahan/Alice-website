import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/IMG-20180422-WA0025.jpg';
import pic2 from '../images/disc1.png';

class  Projet3 extends Component {
state = {
  mount: false
}


componentDidMount = () =>{
 this.setState({mount: true})
}


render() {


  return(

<Link to= "/banlieueXprojet/">



      <div className="projet p3">
        <div style= {{
          zIndex: `10`,
          position: `relative`,

        }}>
           <div className="picture3" >
    <img  src={pic1} className="pic3" alt="fireSpot" />
    <div className="voirP">  <span className="arrow"> <img  src={pic2} className="picShow" alt="fireSpot" /> </span> </div>
    </div>
          <h3 className="title3"> Banlieue X</h3>
          <h4 className="subtitle"> Designer & Pattern Maker </h4>
        </div>

      </div>




    </Link>



    )
}

}


export default Projet3
