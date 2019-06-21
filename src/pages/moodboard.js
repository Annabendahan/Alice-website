import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/about.css'
import pic1 from '../images/moodb1.png';
import pic2 from '../images/moodb2.png';
import pic3 from '../images/moodb3.png';
import pic4 from '../images/moodb4.png';
import pic5 from '../images/moodb5.png';
import pic6 from '../images/moodb6.png';
import pic7 from '../images/moodb7.png';
import pic8 from '../images/moodb8.png';
import pic9 from '../images/moodb9.png';
import pic10 from '../images/moodb10.png';
import pic11 from '../images/moodb11.png';
import pic12 from '../images/moodb12.png';
import pic13 from '../images/moodb13.png';
import pic14 from '../images/moodb14.png';
import pic15 from '../images/moodb15.png';
import pic16 from '../images/moodb16.png';
import pic17 from '../images/moodb17.png';
import pic18 from '../images/moodb18.png';

import '../components/moodboard.css'



class Moodboard extends Component {

  state={
    mount: false
  }


componentDidMount() {
  this.setState({ mount: true})
}

render(){
  console.log(this.state.mount)

  return(




      <Layout>


    <div style={{
      background:`#111E37`,
      width: `100%`,
      height: `400px`,
      transform: this.state.mount? `translateY(-20vh)` : `translateY(-80vh)`,
      transition: ` all 3s ease-out`
    }}></div>


      <div style={{
        transform: this.state.mount? `translateY(0vh)` : `translateY(80vh)`,
        transition: ` all 2s ease-out`
      }}>
      <div className="moodboard">


      <img  src={pic1} className="picS" alt="fireSpot" />
      <img  src={pic2} className="picS" alt="fireSpot" />
      <img  src={pic3} className="picS" alt="fireSpot" />
      <img  src={pic4} className="picS" alt="fireSpot" />
      <img  src={pic5} className="picS" alt="fireSpot" />
      <img  src={pic6} className="picS" alt="fireSpot" />
      <img  src={pic7} className="picS" alt="fireSpot" />
      <img  src={pic8} className="picS" alt="fireSpot" />
      <img  src={pic9} className="picS" alt="fireSpot" />
       <img  src={pic10} className="picS" alt="fireSpot" />
      <img  src={pic11} className="picS" alt="fireSpot" />
      <img  src={pic12} className="picS" alt="fireSpot" />
      <img  src={pic13} className="picS" alt="fireSpot" />
      <img  src={pic14} className="picS" alt="fireSpot" />
      <img  src={pic15} className="picS" alt="fireSpot" />
      <img  src={pic16} className="picS" alt="fireSpot" />
      <img  src={pic17} className="picS" alt="fireSpot" />
      <img  src={pic18} className="picS" alt="fireSpot" />

      </div>
      </div>

      <div style={{
      background: `#111E37`,
      position: `relative`,
      zIndex: `50`,
      width: `100%`,
      height: `120vh`,

            transform: this.state.mount? `translateY(-500vh)` : `translateY(0vh)`,
    transition: ` all 3s ease-out`}}>
     </div>



          </Layout>



    )
}
}


export default Moodboard;
