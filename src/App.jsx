

import Navbar from "../components/Navbar/Navbar"
import Description from "../components/descrtptions/ProjectDescription"
import Projects from "../components/projects/Projects"
import Footer from "../components/footer/Footer"
import WeatherApp from "../components/weather/WeatherApp"
function App() {
  

  return (
    <>
     <section id="Homepage">
         <Navbar />
         <WeatherApp />
     </section>
     <section id="Description">
        <Description />
     </section>
     <section id="Projects">
     <Footer />
     </section>
     
    
    </>
  )
}

export default App
