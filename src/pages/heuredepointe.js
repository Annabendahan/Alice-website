import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/metro (20 sur 7).jpg';
import pic2 from '../images/metro (10 sur 13).jpg';
import pic3 from '../images/metro (10 sur 13).jpg';
import pic4 from '../images/metro (18 sur 7).jpg';
import pic5 from '../images/metro (20 sur 7).jpg';
import pic6 from '../images/metro (6 sur 13).jpg';
import pic7 from '../images/metro (8 sur 13).jpg';
import pic8 from '../images/FB_IMG_1530209047707.jpg';
import pic9 from '../images/FB_IMG_1530655578109.jpg';

import pic11 from '../images/Heures de Pointe 01.jpg';
import pic12 from '../images/Heures de Pointe 02.jpg';
import pic13 from '../images/Heures de Pointe 03.jpg';
import pic14 from '../images/Heures de Pointe 04.jpg';
import pic15 from '../images/Heures de Pointe 09.jpg';
import pic16 from '../images/Heures de Pointe 10.jpg';
import pic17 from '../images/Heures de Pointe 11.jpg';
import pic18 from '../images/Heures de Pointe 13.jpg';





import pic10 from '../images/nextppng.png';
import { Parallax } from 'react-scroll-parallax';

class  HeuredePointe extends Component {
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
       <img  src={pic5} className="pic1" alt="fireSpot" />
    </div>

    <div style={{
      transform: this.state.mount? `translateY(-300px)`: `translateY(0px)`,
        transition: ` all 1s ease-out`,
      background: `white`,
      padding: `150px 100px`,
      Zindex: `1`
    }}>

      <h3 className="Year"> 2018 </h3>
      <h2 className="PTitle"> HEURES DE POINTE </h2>


      <h3 className="PDesc" > Designer & Pattern maker </h3>

      <p className="desc"> Heures de Pointe est une collection unisexe
      inspirée du métro aux Heures les plus fréquentées. Le concept de
      la collection est de fusionner des vêtements de personnes positionnées
      côte à côte pour obtenir des vêtements à pluri-apparence. </p>

      <div className="credits">
       <p> <strong className="strong"> Designer - </strong> Alice Thonnier   </p>
       <p> <strong className="strong" > Photographer - </strong> CARA Photographies </p>
       <p> <strong className="strong" > Model - </strong> Monique Andrew / Arnaud Pagnaro </p>
       <p> <strong className="strong"> Make up - </strong>  Maria M Zola </p>
       <p> <strong className="strong"> Studio -</strong> Studio Valmy </p>
       </div>





       <img  src={pic3} className="picDisplay" alt="fireSpot" />
       <img  src={pic4} className="picDisplay" alt="fireSpot" />
       <img  src={pic5} className="picDisplay" alt="fireSpot" />
       <img  src={pic9} className="picDisplay" alt="fireSpot" />
       <img  src={pic6} className="picDisplay" alt="fireSpot" />
       <img  src={pic7} className="picDisplay" alt="fireSpot" />
       <img  src={pic8} className="picDisplay" alt="fireSpot" />

       <img  src={pic11} className="picDisplay" alt="fireSpot" />
       <img  src={pic12} className="picDisplay" alt="fireSpot" />
       <img  src={pic13} className="picDisplay" alt="fireSpot" />
       <img  src={pic14} className="picDisplay" alt="fireSpot" />
       <img  src={pic15} className="picDisplay" alt="fireSpot" />
       <img  src={pic16} className="picDisplay" alt="fireSpot" />
       <img  src={pic17} className="picDisplay" alt="fireSpot" />
       <img  src={pic18} className="picDisplay" alt="fireSpot" />

<div className="nextP">
      <Link to='/ninaCollection/'>
      <img  src={pic10} className="picNext" alt="fireSpot" />
      </Link>
      </div>

        </div>






    </Layout>
    </div>


    )

}

}


export default HeuredePointe
