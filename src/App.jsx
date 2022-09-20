import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionFour from "./components/SectionFour/SectionFour";
import Shops from "./Pages/Shops/Shops";
import Groups from "./Pages/Groups/Groups";
import Cards from "./Pages/Cards/Cards";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionSix from "./components/SectionSix/SectionSix";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Routes>
        <Route path="/" element={<SectionFour />}></Route>
        <Route path="/shops" element={<Shops />}></Route>
        <Route path="/groups" element={<Groups />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
      </Routes>
      <SectionFive />
      <SectionSix />
      <Footer />
    </Router>
  );
};

export default App;
