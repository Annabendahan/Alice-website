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
<div className="background-pr">
    <Layout>
<div style={{
      background:`#FFFBC6`,
      marginTop: `-20vh`,
      marginBottom: `0px`,

      height: `120vh`,
      transform: this.state.mount? `translateX(50%)` : `translateX(100%)`,
      transition: ` all 2s ease-out`
    }}></div>






            <div style={{

            transition: ` all 2s ease-out`,
            width: this.state.mount? `370px`: `350px`,
            position: `relative`,
            top: `-640px`,
            marginLeft:`25px`,
            left: this.state.mount? '60%' : '40%',
            zIndex: 30
          }}>
          <Parallax className="" y={[-20,10]} tagOuter="figure">
            <img  src={pic1} className="pic4" alt="fireSpot" />
          </Parallax>
            </div>



      <div style={{
        background: `transparent`,
        padding: `80px 5%`,
         transform: this.state.mount? `translateY(-1300px)` : `translateY(-500px)`,
         transition: ` all 2s ease-out`,
         position: `relative`,
            zIndex: 5
      }}>

      <div style={{
          borderLeft: `15px solid rgba(250, 238, 89, .31)`,
          padding: `0px 20px`,
          marginBottom: `150px`
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
       </div>


       <img  src={pic3} className="picDisplayV" alt="fireSpot" />
       <img  src={pic4} className="picDisplayV" alt="fireSpot" />
        <img  src={pic5} className="picDisplayV" alt="fireSpot" />
       <img  src={pic6} className="picDisplayV" alt="fireSpot" />


      </div>


<div className="nextP">
      <Link to='/heuredepointe/'>
      <img  src={pic10} className="picNext" alt="fireSpot" />
</Link>
      </div>



    </Layout>
    </div>


    )

}

}


export default KnicksQueens
