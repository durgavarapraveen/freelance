import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import OurHappyCustomers from "./OurHappyCustomers";
import Services from "./Section3";
import Forms from "../components/form";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-full h-screen overflow-y-scroll">
      <Section1 />
      <Section2 />
      <Services />
      <OurHappyCustomers />
      <Forms />
      <Footer />
    </div>
  );
}

export default Home;
