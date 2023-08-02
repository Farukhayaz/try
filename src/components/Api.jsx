import { GiHamburgerMenu } from "react-icons/gi";
import { TbArrowsCross } from "react-icons/tb";
import Airpro from "../assets/Airpro.png"
const Data = {
  navbar: {
    logo: Airpro,
    list: [
      "Home","Indoor Air Quality Solutions","News","Federal Tax Credits"
    
    ], 
    icon: <GiHamburgerMenu size={30} />,
    icon2: <TbArrowsCross size={30} />,
  },
  home:{
    h1:"Financing Available!",
    p1:"With over 40 years of combined industry experience, the team at AirPro is available and willing to help with all of your HVACR needs in the Northwest Arkansas region.",
 p2:"We know that finding a reliable and experienced HVAC technician can be difficult.  We want to provide you with the absolute best service or HVAC equipment changeout possible.  We service and replace residential HVAC systems of all kinds.  We also service all brands and specialize in high end systems whether it’s a geo thermal or a communicating zone system the team at AirPro is happy to come to you anywhere in Northwest Arkansas.  Give us a call or fill out the form below for a quote today.  "
  },
  quote:{
    h1:"GET A QUOTE",
    p:"Fill out the for below and one of our technicians will get back with as soon as possible.  Try to provide as much information as possible in the comments."
  }  ,
  service:{
    h1:"SERVICE REQUEST",
    p:"Do you have a project in mind? Get in touch today to ensure you get the job done well. Guaranteed!",
    addre:<p> PO Box 1148 Farmington, AR 72730  <br/> AR HVACR License #: 0000940</p>,
    email:"info@airpronwa.com",
    call:"4796010711 Call or Text!"
  }
};

export default Data;
