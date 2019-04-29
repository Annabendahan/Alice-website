import React, {Component} from "react"
import { Link } from "gatsby"
import '../components/index.css'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import video from "../images/backstage shoot anna .mp4"

class  IndexPage extends Component {
state={
  mount: false
}



componentDidMount() {
  this.setState({ mount: true})
}

  render() {
    return(
      <div className="background">
<Layout>

    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />



    <div
    style={{
        transform: this.state.mount? `translateX(0px)`: `translateX(-50vh)`,
        transition: ` all 2s ease-out`,
        margin:`auto`,
  position: `relative`,
  zIndex: 20,
    }} >
      <video className="video" autoPlay loop muted>
      <source src={video} type="video/mp4"/>
       </video>

       <div class="titles">

        <h2> Alice Thonnier </h2>
        <h1> FASHION DESIGNER & PATTERN MAKER </h1>

<div className="voir">
    <Link to="/projets/"> Discover the projects <svg width="51" height="50" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="71" height="70" />
<circle cx="36" cy="35" r="18" stroke="#263654" stroke-width="2"/>
<path d="M42.3536 35.3536C42.5488 35.1583 42.5488 34.8417 42.3536 34.6464L39.1716 31.4645C38.9763 31.2692 38.6597 31.2692 38.4645 31.4645C38.2692 31.6597 38.2692 31.9763 38.4645 32.1716L41.2929 35L38.4645 37.8284C38.2692 38.0237 38.2692 38.3403 38.4645 38.5355C38.6597 38.7308 38.9763 38.7308 39.1716 38.5355L42.3536 35.3536ZM29 35.5H42V34.5H29V35.5Z" fill="#263654"/>
</svg> </Link>
    </div>
     </div>
     </div>



     <div style={{
      background:`#FFFBC6`,
      marginTop: `-110vh`,

      height: `110vh`,
      transform: this.state.mount? `translateX(27%)` : `translateX(100%)`,
      transition: ` all 2s ease-out`
    }}></div>


  </Layout>
  </div>

      )
  }
}



export default IndexPage
