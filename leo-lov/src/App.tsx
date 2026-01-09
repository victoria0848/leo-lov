import {Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import { Cases } from "./components/Cases/Cases";
import { Team }  from "./components/Team/Team";
import { Location }  from "./components/Location/Location";
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <Services />
        <Cases />
        <Team />
        <Location />
      </main>
      <Footer />
    </>
  );
}
