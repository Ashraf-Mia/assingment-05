import { Suspense } from "react";
import "./App.css";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Technologies from "./component/Technologies";
import type { Technology } from "./type";

const technologyFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologiesProps = technologyFetch();
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<h2>Loading technologies...</h2>}>
        <Technologies technologiesProps={technologiesProps} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
