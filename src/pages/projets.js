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
           <h3 className="title"> Heure de pointe </h3>

        </div>
        <div style= {{
          zIndex: `21`,
         visibility: this.state.p1? `visible`: `hidden`,
          position: `relative`
        }} className="next" onClick={this.handleProjet1}>
              NEXT1
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
          <h3 className="title2"> Nina</h3>
        </div>
        <div style= {{
          zIndex: `16`,
          visibility: this.state.p2? `visible`: `hidden`,
          position: `relative`
        }} className="next" onClick={this.handleProjet2}>
              NEXT2
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
        </div>
        <div style= {{
          zIndex: `10`,
          visibility: this.state.p3? `visible`: `hidden`,
          position: `relative`
        }} className="next" onClick={this.handleProjet3}>
              NEXT3
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
          <h3 className="title3"> Knicks Queens </h3>
        </div>
        <div style= {{
          zIndex: `7`,
          visibility: this.state.p4? `visible`: `hidden`,
          position: `relative`
        }} className="next" onClick={this.handleProjet4}>
              NEXT3
            </div>
      </div>


    </div>

  <div style={{
      background: `yellow`,
      position: `relative`,
      zIndex: `50`,
      width: `100%`,
      height: `110vh`,
            transform: this.state.mount? `translateY(-500vh)` : `translateY(0vh)`,
    transition: ` all 6s ease-out`}}> Projets
     </div>





  </Layout>
    </div>

      )
  }
}



export default Projets
