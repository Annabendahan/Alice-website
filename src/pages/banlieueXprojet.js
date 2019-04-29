import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/IMG-20180422-WA0025.jpg';
import pic2 from '../images/IMG-20180422-WA0026.jpg';
import pic3 from '../images/IMG-20180422-WA0057.jpg';
import pic4 from '../images/IMG-20180422-WA0033.jpg';
import pic5 from '../images/IMG-20180422-WA0043.jpg';
import pic6 from '../images/IMG-20180422-WA0060.jpg';
import pic7 from '../images/IMG-20180422-WA0053.jpg';
import pic10 from '../images/nextppng.png';
import { Parallax } from 'react-scroll-parallax';


class  BanlieueXProjet extends Component {
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
            <img  src={pic1} className="pic3" alt="fireSpot" />

            </Parallax>
            </div>


      <div style={{
        background: `transparent`,
        padding: `60px 5%`,
         transform: this.state.mount? `translateY(-185vh)` : `translateY(800vh)`,
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
      <h2 className="PTitle"> BANLIEUE X PROJET </h2>


      <h3 className="PDesc" > Designer & Pattern maker </h3>

      <p className="desc"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
       deserunt mollit anim id est laborum." </p>


       <p> <strong className="strong"> Photographer - </strong> Adem Photographie / Djoka photographie </p>
       <p> <strong className="strong" > Starring - </strong> Williams Agency's boys / Julienne / Arnaud Steph</p>
       <p> <strong className="strong" > Make up - </strong>  Antoine L'Hebrellec / Chloé Badeau </p>
        <p> <strong className="strong"> Dancers - </strong>  Antoine L'Hebrellec / Chloé Badeau </p>
       <p> <strong className="strong"> Styled by - </strong> Oana Von Raven </p>
       </div>


       <img  src={pic3} className="picDisplayV" alt="fireSpot" />
       <img  src={pic2} className="picDisplay" alt="fireSpot" />
       <img  src={pic4} className="picDisplay" alt="fireSpot" />
        <img  src={pic5} className="picDisplay" alt="fireSpot" />
       <img  src={pic6} className="picDisplay" alt="fireSpot" />
        <img  src={pic7} className="picDisplay" alt="fireSpot" />

          <div className="nextP">
      <Link to='/knicksQueens/'>
      <img  src={pic10} className="picNext" alt="fireSpot" />
</Link>
      </div>

      </div>






    </Layout>
    </div>


    )

}

}


export default BanlieueXProjet
