import "./Home.css";
import NexesNarrative from "./NexesNarrative";
import Services from "./Services";
import OurPride from "./OurPride";
import ContactUs from "./ContactUs";

function Home() {
  return (
    <>
    <section className="home">
      <div className="home-left">
        <h1>
          Crafting Moments, Building Visions <br />
          <span>— The Nexes of Excellence.</span>
        </h1>

        <p className="desc">
          At Nexes Dine Solutions, we don’t just plan events — we orchestrate
          memories. From unforgettable weddings to seamless corporate
          consultations, from catering culinary masterpieces to delivering
          software and hotel equipment solutions, we’re your trusted partner
          across every chapter of experience and enterprise.
        </p>

        <p className="italic">
          Let’s bring your ideas to life — with elegance, strategy, and a golden
          touch of excellence.
        </p>

        <p className="services">
          Event Management | Catering Services | Business Consulting | Mediation |
          Software Solutions | Hotel Equipment Supply
        </p>

        <div className="btn-group">
          <button className="btn white">Explore Services</button>
          <button className="btn gold">Let’s Connect</button>
        </div>
      </div>

      <div className="home-right">
        {/* Image / video later */}
      </div>
      
    </section>
    <NexesNarrative />
      <Services />
      <OurPride />
      <ContactUs/>
      </>
    
  );
}

export default Home;
