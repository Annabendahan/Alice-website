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
state = {
  scrolled: false,
  scrolling: 0,
  p1: true,
  p2: true,
  p3: true,
  p4: true,
  mount: false
}

componentDidMount(){
  this.setState({mount: true})
}




handleProjet1 = () =>{
this.setState({ p1: false});
console.log(this.state.p1)
}


handleProjet2 = () =>{
this.setState({ p2: false });
console.log(this.state.p2)
}

handleProjet3 = () =>{
this.setState({ p3: false});
console.log(this.state.p3)
}

handleProjet4 = () =>{
this.setState({ p4: false, p3: true, p1: true, p2: true, p4: true});
console.log(this.state.p3)
}


  render() {

    let toShow = ' '



    return(
<div className="background">

        <Layout >


    <SEO title="Page two" />




    <div className="projets">

      <div className="projet p1">
        <div style= {{
          zIndex:  `20`,
          position: `relative`,
          transform: this.state.p1? `translateY(0px)` : `translateY(-140vh)`,
          transition: ` all 2s ease-out`
        }}>
          <Projet1 />
           <h3 className="title"> Heures de pointe </h3>
           <h4 className="subtitle"> Designer & Pattern Maker </h4>

        </div>
        <div style= {{
          zIndex: `21`,
         visibility: this.state.p1? `visible`: `hidden`,
          position: `relative`
        }} className="next" onClick={this.handleProjet1}>
              <p className='transparent'>

              </p>

            </div>
      </div>

      <div className="projet p2">
        <div style= {{
          zIndex: `15`,
          position: `relative`,
          transform: this.state.p2? `translateY(0px)` : `translateY(-140vh)`,
          transition: `all 2s ease-out`
        }}>
          <Projet2 />
          <h3 className="title2"> Nina Collection</h3>
          <h4 className="subtitle"> Designer & Pattern Maker </h4>
        </div>
        <div style= {{
          zIndex: `16`,
          visibility: this.state.p2? `visible`: `hidden`,
          position: `relative`
        }} className="next" onClick={this.handleProjet2}>
             <p className='transparent'>

              </p>

            </div>
      </div>

      <div className="projet p3">
        <div style= {{
          zIndex: `10`,
          position: `relative`,
          transform: this.state.p3? `translateY(0px)` : `translateY(-140vh)`,
          transition: `all 2s ease-out`
        }}>
          <Projet3 />
          <h3 className="title3"> Banlieue x projet</h3>
          <h4 className="subtitle"> Designer & Pattern Maker </h4>
        </div>
        <div style= {{
          zIndex: `10`,
          visibility: this.state.p3? `visible`: `hidden`,
          position: `relative`
        }} className="next" onClick={this.handleProjet3}>
              <p className='transparent'>

              </p>

            </div>
      </div>


      <div className="projet p4">
        <div style= {{
          zIndex: `7`,
          position: `relative`,
          transform: this.state.p4? `translateY(0px)` : `translateY(-140vh)`,
          transition: `all 2s ease-out`
        }}>
          <Projet4 />
          <h3 className="title4"> Knicks Queens </h3>
          <h4 className="subtitle"> Designer & Pattern Maker </h4>
        </div>
        <div style= {{
          zIndex: `7`,
          visibility: this.state.p4? `visible`: `hidden`,
          position: `relative`
        }} className="next" onClick={this.handleProjet4}>
              <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="71" height="70" fill="none"/>
<circle cx="36" cy="35" r="18" stroke="#33405D" stroke-width="2"/>
<path d="M42.3536 35.3536C42.5488 35.1583 42.5488 34.8417 42.3536 34.6464L39.1716 31.4645C38.9763 31.2692 38.6597 31.2692 38.4645 31.4645C38.2692 31.6597 38.2692 31.9763 38.4645 32.1716L41.2929 35L38.4645 37.8284C38.2692 38.0237 38.2692 38.3403 38.4645 38.5355C38.6597 38.7308 38.9763 38.7308 39.1716 38.5355L42.3536 35.3536ZM29 35.5H42V34.5H29V35.5Z" fill="#33405D"/>
</svg>

            </div>
      </div>


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
