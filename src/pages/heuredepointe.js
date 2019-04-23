import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/picHDP.png';
import pic2 from '../images/picHDP2.png';
import pic3 from '../images/metro (10 sur 13).jpg';
import pic4 from '../images/metro (18 sur 7).jpg';
import pic5 from '../images/metro (20 sur 7).jpg';
import pic6 from '../images/picHDP2.png';

class  HeuredePointe extends Component {
  state={
    mount: false
  }


componentDidMount() {
  this.setState({mount: true})
}

render() {


  return(

    <Layout>
      <div className="projets">
        <div className="projet">

            <div className="picture1" >
            <div style={{
            transform: this.state.mount? `translateX(100px)` : `translateY(0vh)`,
            transition: ` all 2s ease-out`,
            height: `200px`,
            position: `relative`,
            zIndex: 30
          }}>
            <img  src={pic1} className="picShow" alt="fireSpot" />
            </div>
            <div style={{
            transform: this.state.mount? `translate(400px, -20px)` : `translate(0vh)`,
            transition: ` all 2s ease-out`,
            height: `200px`,
            position: `relative`,
            zIndex: 25
          }}>
            <img  src={pic2} className="picShow2" alt="fireSpot" />
            </div>

          </div>
        </div>
      </div>


      <div style={{
        background: `white`,
        padding: `150px 10%`,
         transform: this.state.mount? `translateY(200px)` : `translateY(800vh)`,
         transition: ` all 2s ease-out`,
         position: `relative`,
            zIndex: 5
      }}>

      <h2> HEURE DE POINTE </h2>

      <h3> Collection de fin d'études </h3>

      <p className="desc"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
       deserunt mollit anim id est laborum." </p>


       <img  src={pic3} className="picDisplay" alt="fireSpot" />
       <img  src={pic4} className="picDisplay" alt="fireSpot" />


      </div>






    </Layout>


    )

}

}


export default HeuredePointe
