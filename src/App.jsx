import React from "react";
import About from "./Components/About";
import Announcement from "./Components/Announcement";
import Collection from "./Components/Collection";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Review from "./Components/Review";

const App = () => {
  return (
    <div>
      <Announcement />
      <Hero />
      <Collection />
      <Review />
      <About />
      <Footer />
    </div>
  );
};

export default App;
