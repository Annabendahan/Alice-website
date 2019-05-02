import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/knicks.png';
import pic2 from '../images/disc1.png';

class  Projet4 extends Component {
state = {
  mount: false
}



componentDidMount = () =>{
 this.setState({mount: true})
}



render() {


  return(

    <Link to= "/knicksQueens/">


      <div className="projet p4">
        <div style= {{
          zIndex: `7`,
          position: `relative`,
          transform: this.state.mount? `translateY(0px)` : `translateY(-140vh)`,
          transition: `all 2s ease-out`
        }}>

    <div className="picture4" >
    <img  src={pic1} className="pic4" alt="fireSpot" />
    <div className="voirP">  <span className="arrow"> <img  src={pic2} className="picShow" alt="fireSpot" /> </span> </div>
    </div>
          <h3 className="title4"> Knicks Queens </h3>
          <h4 className="subtitle"> Designer & Pattern Maker </h4>
        </div>

      </div>



    </Link>



    )
}

}


export default Projet4
