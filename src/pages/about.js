import React, {Component} from "react"
import { Link } from "gatsby"
import { FaInstagram } from 'react-icons/fa';
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/about.css'
import pic1 from '../images/metro (8 sur 13).jpg';
import { Parallax } from 'react-scroll-parallax';



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

    <div className="background">
      <Layout>
          <div className="left">
            <h2> Alice Thonnier </h2>
            <a className="insta" target="_blank"  href="https://www.instagram.com/alice_thonnier/?hl=fr">
            < FaInstagram />
            </a>
            <h1> FASHION DESIGNER & PATTERN MAKER </h1>
            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
       deserunt mollit anim id est laborum." </p>
       <p className="phone" > <strong> Email - </strong> email@email.com </p>
       <p className="email"> <strong> Phone - </strong>  0612345678 </p>
          </div>

          <div style={{
            background: `#FFFBC6`,

          height: `140vh`,
          marginTop: `-115vh`,
          width: `200%`,
          transform: this.state.mount? `translateX(25%)` : `translateX(-50%)`,
          transition: ` all 2s ease-out`,
          }}>

           <Parallax className="" y={[-50,50]} tagOuter="figure">
          <img  src={pic1} className="picAbout" alt="fireSpot" />
          </Parallax>

          </div>

          </Layout>
          </div>


    )
}
}


export default About;
