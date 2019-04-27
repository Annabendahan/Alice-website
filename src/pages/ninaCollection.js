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
        <div className="projet">

            <div className="picture1" >
            <div style={{
            transform: this.state.mount? `translate(320px, 50px)` : `translateY(0vh)`,
            transition: ` all 2s ease-out`,
            width: this.state.mount? `450px`: `300px`,
            height: `200px`,
            position: `relative`,
            zIndex: 30
          }}>
            <img  src={pic1} className="picShow" alt="fireSpot" />
            </div>


          </div>
        </div>
      </div>


      <div style={{
        background: `white`,
        padding: `80px 5%`,
         transform: this.state.mount? `translateY(0px)` : `translateY(800vh)`,
         transition: ` all 2s ease-out`,
         position: `relative`,
            zIndex: 5
      }}>

      <div style={{
          borderLeft: `20px solid rgba(250, 238, 89, .51)`,
          padding: `0px 20px`,
          marginBottom: `150px`
      }}>
      <h2 className="PTitle"> NINA COLLECTION </h2>
      <h3 className="Year"> 2018 </h3>

      <h3 className="PDesc" > Modelism </h3>

      <p className="desc"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
       deserunt mollit anim id est laborum." </p>


       <p> <strong> Photographer: </strong> Gabrielle Riouah </p>
       <p> <strong> Model: </strong> Nina Steimel </p>
       <p> <strong> Make up: </strong>  Caroline Madison</p>

       </div>

        <img  src={pic2} className="picDisplay" alt="fireSpot" />
       <img  src={pic3} className="picDisplay" alt="fireSpot" />


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
