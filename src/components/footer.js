import React, {Component} from "react"
import { Link } from "gatsby"
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/projets.css'
import pic1 from '../images/metro (20 sur 7).jpg';
import pic2 from '../images/disc1.png';
import './footer.css'

class Footer extends Component {
state = {
  scrolled: false,
  scrolling: 0,
  show: 1
}

render() {


  return(

<div className="footer">


<div className="copy">

  <p> © ALICE THONNIER 2019 - ALL RIGHT RESERVED - WEBSITE BY
  <a href="http://annabdh.com" > ANNABDH </a> </p>
</div>


<div className="social">

  <a className="insta" target="_blank"  href="https://www.instagram.com/alice_thonnier/?hl=fr">
              < FaInstagram />
              </a>

  <a className="insta" target="_blank"  href="https://www.linkedin.com/in/alice-thonnier-815247134/?originalSubdomain=fr">
              < FaLinkedinIn />
              </a>


</div>

</div>
    )
}

}


export default Footer
