import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/Gabrielle_Riouah_Web_18_01_24_Test Nina_Supreme0001.jpg';
import pic2 from '../images/Gabrielle_Riouah_Web_18_01_24_Test Nina_Supreme0068 1.jpg';
import pic3 from '../images/Gabrielle_Riouah_Web_18_01_24_Test Nina_Supreme0046.jpg';
import pic4 from '../images/metro (18 sur 7).jpg';
import pic5 from '../images/metro (20 sur 7).jpg';
import pic6 from '../images/picHDP2.png';
import pic10 from '../images/nextppng.png';
import { Parallax } from 'react-scroll-parallax';


class  NinaCollection extends Component {
  state={
    mount: false
  }


componentDidMount() {
  this.setState({mount: true})
}

render() {


  return(
<div className="background">
    <Layout>
    <div className="projets">
       <img  src={pic1} className="pic1" alt="fireSpot" />
    </div>

    <div style={{
      transform: this.state.mount? `translateY(-300px)`: `translateY(0px)`,
        transition: ` all 1s ease-out`,
      background: `white`,
      padding: `150px 100px`,
      Zindex: `1`
    }}>
      <h3 className="Year"> 2018 </h3>
      <h2 className="PTitle"> NINA COLLECTION </h2>

      <h3 className="PDesc" > Designer & Pattern maker </h3>

      <p className="desc">  </p>

        <div className="credits">
       <p> <strong className="strong"> Photographer -  </strong> Gabrielle Riouah </p>
       <p> <strong className="strong"> Model - </strong> Nina Steimel </p>
       <p> <strong className="strong"> Make up - </strong>  Caroline Madison</p>
        </div>


      <div style={{
        marginTop: `300px`}} className="pics">
        <img  src={pic2} className="picDisplay" alt="fireSpot" />
       <img  src={pic3} className="picDisplay" alt="fireSpot" />



       <div className="nextP">
      <Link to='/banlieueXprojet/'>
      <img  src={pic10} className="picNext" alt="fireSpot" />
</Link>
      </div>

      </div>



      </div>









    </Layout>
    </div>


    )

}

}


export default NinaCollection
