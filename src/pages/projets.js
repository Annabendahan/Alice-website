import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import Projet1 from  '../components/projet1'
import Projet2 from  '../components/projet2'
import Projet3 from  '../components/projet3'
import Projet4 from  '../components/projet4'

class  Projets extends Component {
state={
    display:1,
    mount: false
  }

componentDidMount(){
  this.setState({mount: true})
}



handleProjetPlus= () =>{
  let display = this.state.display
this.setState({ display : display + 1})
}


handleProjetMoins= () =>{
  let display = this.state.display
this.setState({ display : display - 1})
}

resetHandle = () =>{
  let display = this.state.display
this.setState({ display : 1})
}

resetHandle2 = () =>{
  let display = this.state.display
this.setState({ display : 4})
}




  render() {

     let projet = <Projet1 />

  if (this.state.display === 1) {
     projet = <Projet1 />
  } else if (this.state.display === 2 ) {
    projet = <Projet2 />
  } else if (this.state.display === 3 ) {
    projet = <Projet3 />
  } else if (this.state.display === 4 ) {
    projet = <Projet4 />
  } else if  (this.state.display === 5 ) {
    this.resetHandle()
  } else if (this.state.display === 0 ) {
    this.resetHandle2()
  }

console.log(projet)



    return(
<div className="background">

        <Layout >


    <SEO title="Page two" />


      <div onClick={this.handleProjetPlus}>
       <svg className="Next" width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="71" height="70" fill="none"/>
<circle cx="36" cy="35" r="18" stroke="#33405D" stroke-width="2"/>
<path d="M42.3536 35.3536C42.5488 35.1583 42.5488 34.8417 42.3536 34.6464L39.1716 31.4645C38.9763 31.2692 38.6597 31.2692 38.4645 31.4645C38.2692 31.6597 38.2692 31.9763 38.4645 32.1716L41.2929 35L38.4645 37.8284C38.2692 38.0237 38.2692 38.3403 38.4645 38.5355C38.6597 38.7308 38.9763 38.7308 39.1716 38.5355L42.3536 35.3536ZM29 35.5H42V34.5H29V35.5Z" fill="#33405D"/>
</svg>
      </div>
      <div className="Previous" onClick={this.handleProjetMoins}>
       <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="71" height="70" fill="none"/>
<circle cx="36" cy="35" r="18" stroke="#33405D" stroke-width="2"/>
<path d="M42.3536 35.3536C42.5488 35.1583 42.5488 34.8417 42.3536 34.6464L39.1716 31.4645C38.9763 31.2692 38.6597 31.2692 38.4645 31.4645C38.2692 31.6597 38.2692 31.9763 38.4645 32.1716L41.2929 35L38.4645 37.8284C38.2692 38.0237 38.2692 38.3403 38.4645 38.5355C38.6597 38.7308 38.9763 38.7308 39.1716 38.5355L42.3536 35.3536ZM29 35.5H42V34.5H29V35.5Z" fill="#33405D"/>
</svg>
       </div>


    <div className="projets">




 {projet}





    </div>

  <div style={{
      background: `#263654`,
      position: `relative`,
      zIndex: `50`,
      width: `100%`,
      height: `120vh`,

            transform: this.state.mount? `translateY(-500vh)` : `translateY(0vh)`,
    transition: ` all 6s ease-out`}}>
     </div>


 <div style={{
      background:`#FFFBC6`,
      width: `100%`,
      height: `400px`,
      transform: this.state.mount? `translateY(-87vh)` : `translateY(-10vh)`,
      transition: ` all 2s ease-out`
    }}></div>






  </Layout>

    </div>

      )
  }
}



export default Projets
