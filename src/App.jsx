import React, { useEffect, useState } from "react";
import "./fonts.css";
import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navigation/Navigation";
import Pay from "./Components/Pay/Pay";
import Save from "./Components/Save/Save";
import Bank from "./Components/Bank/Bank";
import Believe from "./Components/Believe/Believe";
import Slide from "./Components/Slide/Slide";
import Download from "./Components/Download/Download";
import Footer from "./Components/Footer/Footer";
import PreLoader from "./Components/PreLoader/PreLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Hero />
          <Navigation />
          <Pay />
          <Save />
          <Bank />
          <Believe />
          <Slide />
          <div className="download_div">
            <Download />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
