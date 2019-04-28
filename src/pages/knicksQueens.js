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

      height: `110vh`,
      transform: this.state.mount? `translateX(50%)` : `translateX(100%)`,
      transition: ` all 2s ease-out`
    }}></div>






            <div style={{

            transition: ` all 2s ease-out`,
            width: this.state.mount? `450px`: `350px`,
            position: `relative`,
            top: `-600px`,
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
         transform: this.state.mount? `translateY(-188vh)` : `translateY(800vh)`,
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

      <h3 className="PDesc" > Design & Pattern making </h3>

      <p className="desc"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
       deserunt mollit anim id est laborum." </p>


       <p> <strong className="strong"> Photographer - </strong> CARA Photographies </p>
       <p> <strong className="strong"> Model - </strong> Monique Andrew / Arnaud Pagnaro </p>
       <p> <strong className="strong"> Make up - </strong>  Maria M Zola </p>
       <p> <strong className="strong"> Studio - </strong> Studio Valmy </p>
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
