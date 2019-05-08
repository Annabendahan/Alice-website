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

        <h2><svg  width="31" height="30" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="9" y1="33.5" x2="62" y2="33.5" stroke="#263654" stroke-width="2"/>
</svg> FASHION DESIGNER & PATTERN MAKER </h2>

<svg className="LOGO" width="320" height="272" viewBox="0 0 307 260" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="77" width="18" height="89" fill="#2D3036"/>
<path d="M48.5 77V93H93V114.5H48.5V165.5H109V150H65.5V129H109V77H48.5Z" fill="#2D3036"/>
<path d="M121.5 125V108.5H137.5V125H121.5Z" fill="#2D3036"/>
<path d="M137.5 150H121.5V165.5H137.5V150Z" fill="#2D3036"/>
<path d="M210 77H151V129H194V150H151V165.5H210V114.5H167.5V93H210V77Z" fill="#2D3036"/>
<line x1="285" y1="84.5" x2="225" y2="84.5" stroke="#2D3036" stroke-width="15"/>
<line x1="285" y1="156.5" x2="225" y2="156.5" stroke="#2D3036" stroke-width="15"/>
<line x1="277.629" y1="91.0161" x2="277.5" y2="151.016" stroke="#2D3036" stroke-width="15"/>
<line x1="232.629" y1="91.0161" x2="232.5" y2="151.016" stroke="#2D3036" stroke-width="15"/>
</svg>


<div className="voir">
    <Link to="/projets/"> SEE PROJECTS </Link>
    </div>
     </div>
     </div>



     <div style={{
      background:`#FFFBC6`,
      marginTop: `-110vh`,

      height: `110vh`,
      transform: this.state.mount? `translateX(30%)` : `translateX(100%)`,
      transition: ` all 2s ease-out`
    }}></div>







  </Layout>
  </div>

      )
  }
}



export default IndexPage
