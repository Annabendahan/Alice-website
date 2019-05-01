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
          <Parallax className="" y={[-15,0]} tagOuter="figure">
            <img  src={pic1} className="picShow" alt="fireSpot" />
            </Parallax>
            </div>



      <div style={{
        background: `transparent`,
        padding: `80px 5%`,
         transform: this.state.mount? `translateY(-1250px)` : `translateY(-500px)`,
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
      <h2 className="PTitle"> NINA COLLECTION </h2>

      <h3 className="PDesc" > Designer & Pattern maker </h3>

      <p className="desc">  </p>

        <div className="credits">
       <p> <strong className="strong"> Photographer -  </strong> Gabrielle Riouah </p>
       <p> <strong className="strong"> Model - </strong> Nina Steimel </p>
       <p> <strong className="strong"> Make up - </strong>  Caroline Madison</p>
        </div>
       </div>

      <div style={{
        marginTop: `300px`}} className="pics">
        <img  src={pic2} className="picDisplay" alt="fireSpot" />
       <img  src={pic3} className="picDisplay" alt="fireSpot" />
      </div>


       <div className="nextP">
      <Link to='/banlieueXprojet/'>
      <img  src={pic10} className="picNext" alt="fireSpot" />
</Link>
      </div>



      </div>









    </Layout>
    </div>


    )

}

}


export default NinaCollection
