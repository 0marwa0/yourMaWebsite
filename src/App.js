import React from "react";
import Contact from "./Components/contact";
import Experinence from "./Components/Experience";
import Services from "./Components/Services";
import "./Style/app.css";
import Footer from "./Components/footer";
function App() {
  return (
    <div>
      <Experinence />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
