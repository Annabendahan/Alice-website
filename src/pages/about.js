import React, {Component} from "react"
import { Link } from "gatsby"
import { FaInstagram } from 'react-icons/fa';
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/about.css'
import pic1 from '../images/metroqual.png';
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

      <div className="box">
          <div className="left">

            <svg className="LOGOabout" width="213" height="181" viewBox="0 0 307 260" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="77" width="18" height="89" fill="#C8C8C8"/>
<path d="M48.5 77V93H93V114.5H48.5V165.5H109V150H65.5V129H109V77H48.5Z" fill="#C8C8C8"/>
<path d="M121.5 125V108.5H137.5V125H121.5Z" fill="#C8C8C8"/>
<path d="M137.5 150H121.5V165.5H137.5V150Z" fill="#C8C8C8"/>
<path d="M210 77H151V129H194V150H151V165.5H210V114.5H167.5V93H210V77Z" fill="#C8C8C8"/>
<line x1="285" y1="84.5" x2="225" y2="84.5" stroke="#C8C8C8" stroke-width="15"/>
<line x1="285" y1="156.5" x2="225" y2="156.5" stroke="#C8C8C8" stroke-width="15"/>
<line x1="277.629" y1="91.0161" x2="277.5" y2="151.016" stroke="#C8C8C8" stroke-width="15"/>
<line x1="232.629" y1="91.0161" x2="232.5" y2="151.016" stroke="#C8C8C8" stroke-width="15"/>
</svg>


            <p> Alice Thonnier designer parisienne passionnée de mode et particulierement par le modélisme depuis toujours réalise ses études à Esmod Paris de 2015 à 2018. Elle commence à faire ses preuves durant un stage de modéliste chez Bleu Comme Gris, marque de luxe pour enfant en 2016. En 2017 elle lance sa marque <span className="squarefont"> 12:50 </span>. Sa marque vise un vestiaire collectif unisexe au style casualwear. Son objectif est de pouvoir habiller les femmes et les hommes avec les mêmes vêtements en obtenant un volume différent. Oversizes chez la femme et ajustés chez l’homme.
Diplomée en 2018 grâce à sa collection Heures de Pointe elle est repérée par la Galerie Lyncée qui lui propose d’exposer ses collections lors d’expositions temporaires.
A la suite de son diplôme Alice effectue un stage  de modélisme chez Balzac Paris et trouve ensuite un emploi dans le groupe GPE (Sergent Major , DPAM, Natalys). Durant sont temps libre elle continue tout de même de créer des collections. </p>

       <p className="phone" > <strong> Email - </strong> alicethonnier@live.fr </p>

          </div>



          <div className="right">
          <img  src={pic1} className="picAbout" alt="fireSpot" />
          </div>

          </div>

          </Layout>
          </div>


    )
}
}


export default About;
