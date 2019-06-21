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
