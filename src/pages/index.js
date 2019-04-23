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
        <div className="voir">
    <Link to="/projets/">Voir les projets</Link>
    </div>
     </div>
     </div>


  </Layout>

      )
  }
}



export default IndexPage
