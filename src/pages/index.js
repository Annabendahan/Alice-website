import React, {Component} from "react"
import { Link } from "gatsby"
import '../components/index.css'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import video from "../images/backstage shoot anna .mp4"

class  IndexPage extends Component {
state={
  mount: true
}



componentWillUnmount() {
  this.setState({ mount: false})
}

  render() {
    return(
      <div className="background-i">
<Layout>

    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />


    <div style={{
        transform: this.state.mount? `translateY(0deg)`: `translateY(-400deg)`,
        transition: ` all 0s ease-out`,
    }}>
    <div className="videoDiv">
      <video className="video" autoPlay loop muted>
      <source src={video} type="video/mp4"/>
       </video>

       <div class="titles">

        <h2> Alice Thonnier </h2>
        <h1> FASHION DESIGNER & PATTERN MAKER </h1>

<div className="voir">
    <Link to="/projets/"> Discover the projects <svg width="61" height="60" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="71" height="70" />
<circle cx="36" cy="35" r="18" stroke="white" stroke-width="2"/>
<path d="M42.3536 35.3536C42.5488 35.1583 42.5488 34.8417 42.3536 34.6464L39.1716 31.4645C38.9763 31.2692 38.6597 31.2692 38.4645 31.4645C38.2692 31.6597 38.2692 31.9763 38.4645 32.1716L41.2929 35L38.4645 37.8284C38.2692 38.0237 38.2692 38.3403 38.4645 38.5355C38.6597 38.7308 38.9763 38.7308 39.1716 38.5355L42.3536 35.3536ZM29 35.5H42V34.5H29V35.5Z" fill="white"/>
</svg> </Link>
    </div>
     </div>
     </div>
     </div>


  </Layout>
  </div>

      )
  }
}



export default IndexPage
