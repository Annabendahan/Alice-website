import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/about.css'
import pic1 from '../images/square.png';
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
      background:`#FFFBC6`,
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
      <img  src={pic1} className="picS" alt="fireSpot" />
      <img  src={pic1} className="picS" alt="fireSpot" />
      <img  src={pic1} className="picS" alt="fireSpot" />
      <img  src={pic1} className="picS" alt="fireSpot" />
      <img  src={pic1} className="picS" alt="fireSpot" />
      <img  src={pic1} className="picS" alt="fireSpot" />
      <img  src={pic1} className="picS" alt="fireSpot" />
      <img  src={pic1} className="picS" alt="fireSpot" />

      </div>
      </div>

      <div style={{
      background: `#263654`,
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
