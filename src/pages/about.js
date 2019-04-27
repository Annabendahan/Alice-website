import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/about.css'
import pic1 from '../images/metro (20 sur 7).jpg';



class About extends Component {

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
          <div className="left">
            <h2> Alice Thonnier </h2>
            <h1> FASHION DESIGNER & PATTERN MAKER </h1>
            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
       deserunt mollit anim id est laborum." </p>
          </div>

          <div style={{
            background: `#FFFBC6`,

          height: `140vh`,
          marginTop: `-110vh`,
          width: `200%`,
          transform: this.state.mount? `translateX(25%)` : `translateX(-50%)`,
          transition: ` all 2s ease-out`,
          }}>

          <img  src={pic1} className="picAbout" alt="fireSpot" />

          </div>

          </Layout>


    )
}
}


export default About;
