import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/knicks.png';
import pic2 from '../images/knicks2.png';
import pic3 from '../images/modif 3.jpg';
import pic4 from '../images/modif 5.jpg';
import pic5 from '../images/modif 7.jpg';
import pic6 from '../images/modif 6.jpg';
import pic10 from '../images/nextppng.png';
import { Parallax } from 'react-scroll-parallax';

class  KnicksQueens extends Component {
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
      <h2 className="PTitle"> KNICKS QUEENS </h2>

      <h3 className="PDesc" > Designer & Pattern maker </h3>

      <p className="desc"> Knicks Queens est une collection de mode inspirée du monde du basketball . Elle rappelle les couleurs de l’équipe des Knicks Queens, le bleu, le orange et le blanc.
Le sweat en résille fait écho aux filets et aux grillages des terrains de basket de rue américains. Les poches rondes sur la veste et le pantalon rappellent la forme du ballon de basket. </p>

        <div className="credits">
        <p> <strong className="strong"> Designer - </strong> Alice Thonnier - Heloise Sauvet - Marie Fournier - Roxane de Korody  </p>
       <p> <strong className="strong"> Photographer - </strong> Roxane de Korody  </p>
       <p> <strong className="strong"> Model - </strong> Athéna Lisnyj </p>
       <p> <strong className="strong"> Place - </strong> Pigalle Basketball </p>
       </div>



       <img  src={pic3} className="picDisplayV" alt="fireSpot" />
       <img  src={pic4} className="picDisplayV" alt="fireSpot" />
        <img  src={pic5} className="picDisplayV" alt="fireSpot" />
       <img  src={pic6} className="picDisplayV" alt="fireSpot" />




<div className="nextP">
      <Link to='/heuredepointe/'>
      <img  src={pic10} className="picNext" alt="fireSpot" />
</Link>
      </div>
       </div>



    </Layout>
    </div>


    )

}

}


export default KnicksQueens
