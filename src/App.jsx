
import AboutMe from "./components/AboutMe"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ProjectSlider from "./components/ProjectSlider"
import Services from "./components/Services"
import {Helmet} from "react-helmet";

function App() {

  const imageUrl = './assets/briefcase-solid.svg';

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title> Khadiza Jarin Roza</title>
        <meta property="og:image" content={imageUrl} /> 
        
      </Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Services></Services>
      <ProjectSlider></ProjectSlider>
      <Contact></Contact>
      <Footer></Footer>
      
     
    </div>
  )
}

export default App
