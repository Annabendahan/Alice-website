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
            <img  src={pic1} className="pic3" alt="fireSpot" />

            </Parallax>
            </div>


      <div style={{
        background: `transparent`,
        padding: `60px 5%`,
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
      <h2 className="PTitle"> BANLIEUE X  </h2>


      <h3 className="PDesc" > Designer & Pattern maker </h3>

      <p className="desc"> What do young people do in a post-apocalyptic world, where perfection is not wanted anymore and borders are abolished? They start creating. They do fashion. They dance. They put their forces together and build something new. A story about a group of friends that is not afraid of the future. The timeless Banlieue serves as setting, under the artistic direction of Oana von Rave – in exclusive for The Flow House. - Karim Coppola </p>

<div className="credits">
       <p> <strong className="strong"> Designer - </strong> Alice Thonnier   </p>
       <p> <strong className="strong"> Photographer - </strong> Jean Marc Jaleel </p>
       <p> <strong className="strong" > Starring - </strong> Yamine Khiar, Paul Huet, Helmy El Wakil (Williams Management), Stephanie Arnaud, Julienne I., Laura Ung</p>
       <p> <strong className="strong" > Hair & Make up - </strong>  Antoine L'Hebrellec / Chloé Badeau </p>
        <p> <strong className="strong"> Dancers - </strong>  Perkins Kelley, Mr. Boma </p>
       <p> <strong className="strong"> Styled by - </strong> Oana Von Raven </p>
       <p> <strong className="strong"> Brands - </strong> Alice Thonnier, ASOS, La Perla, American Apparel, Nike, Dr. Martens, Tod’s, Acne Studios, Vintage Army
In exclusive for: The Flow House</p>
       </div>
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
