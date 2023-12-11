


import AboutMe from "./components/AboutMe"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import ProjectSlider from "./components/ProjectSlider"
import Services from "./components/Services"

function App() {


  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      
      <AboutMe></AboutMe>
      <Services></Services>
      <ProjectSlider></ProjectSlider>
      
     
    </div>
  )
}

export default App
