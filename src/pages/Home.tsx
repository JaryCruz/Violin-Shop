import { Link } from "react-router-dom";
import instrumentImg from '../assets/instrument.png'
import accessoryImg from '../assets/accesory.png'
import lessonsImg from '../assets/lessons.png'
import showcaseImg from '../assets/shocase.png'

export function Home() {
  return (
    <>
      <header className="home-header">
        <div className="home-header-img"></div>
        <div>
          <h1>YOUR FRIENDLY SHOP FOR</h1>
          <h2>Quality String Instruments</h2>
          <Link to='/store' className="btn-cta">Shop Now</Link>
        </div>
      </header>
      <section>
        <div className="container services-container">
          <div className="service-card">
            <h3>Find your next instrument</h3>
            <img src={instrumentImg} alt="" />
            <p>We have many options to choose from.</p>
            <Link to='/store' className="btn-cta">Browse Instruments</Link>
          </div>
          <div className="service-card">
            <h3>Fine tune your playing</h3>
            <img src={accessoryImg} alt="" />
            <p>We have the best perks to help you.</p>
            <Link to='/store' className="btn-cta">Find Accessory</Link>
          </div>
          <div className="service-card">
            <h3>Find a Teacher</h3>
            <img src={lessonsImg} alt="" />
            <p>We are happy to help you find a teacher</p>
            <Link to='/store' className="btn-cta">Find Teacher</Link>
          </div>
        </div>
      </section>
      <section className="showcase-container">
        <div className="container">
          <img src={showcaseImg} alt="" />
          <div>
            <h3>Marko Dobresovitch Cello 1930</h3>
            <p>Marko Dobresovitch was born in Montenegro in 1891. He studied violin making with Pollastri in the 1920's and returned to Alexandria finally setting up shop in Cairo in 1941.  Modelling very Stradivairian inexecution, he was not a fan of any new-fangled ideas or experimentations. Arching is flawless as is the wood selection.  This cello features a onePiece back which is exceedingly rare.</p>
            <p>
            Beautifully clear varnish leavingthe texture and grain of the wood very accessible. Instruments highly praisedby many great artists.  Marko Dobresovitch presented King Farouk of Egyptwith a quartet.  A Professional Cello by any ones standard suited for Solowork. The tone is penetrating with incredible projection andclarity.  The condition is excellent and is free of any major damage or repairs, professionally played and owned. Made in Alexandria Egypt 1930.
            </p>
            <Link to='/store' className="btn-cta">Shop Now</Link>
          </div>
        </div>
      </section>
    </>
  )
}