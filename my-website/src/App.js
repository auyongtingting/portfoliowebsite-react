// Components
import Navbar from "./components/Nav.js"
import Home from "./components/Home.js"
import Work from "./components/workExperience.js"
import Education from "./components/education.js"
import ContactMe from "./components/contactMe.js"
import Footer from "./components/footer.js"
import "./styles/styles.css"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Work />
      <Education />
      <ContactMe /> 
      <Footer />
    </div>
  );
}

export default App;