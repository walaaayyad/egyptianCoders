import Header from "./components/1-header/header"
import Hero from "./components/2-hero/hero"
import YouTubeChannels from "./components/3-channel/channel"
import Footer from "./components/4-footer/footer";
import { useState, useEffect} from "react";
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';

function App() {
  const [scrollUp, setScrollUp] = useState(false); 

  //-------------------------- Scroll Up Button ---------------------------
  useEffect(() => {
    const handleScroll = () => {
      setScrollUp(window.scrollY > 600);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <HelmetProvider>
      <Helmet>
        <title>Best YouTube Channels Created By Egyptian Developers</title>
        <meta name="description" content="Discover the best YouTube channels for Egyptian developers. Learn programming, technology, and software development with curated content tailored for the Egyptian tech community." />
        <meta name="keywords" content="Egyptian developers, YouTube channels, programming, software development, technology, tech community, coding tutorials" />
        <meta property="og:title" content="Egyptian Coders" />
        <meta property="og:description" content="Discover the best YouTube channels for Egyptian developers. Learn programming, technology, and software development with curated content tailored for the Egyptian tech community." />
        <meta property="og:image" content="/images/logo3.avif" />
        <meta property="og:url" content="https://walaaayyad.github.io/egyptianCoders/" />
      </Helmet>

      <Header />
      <Hero />
      <YouTubeChannels />
      {/* Add condition to check if the user scroll down so the button appears by changing its opacity */}
      <a 
        href="#hero" 
        style={{
          opacity: scrollUp ? 1 : 0, 
          transition: "1s"
        }}
        className="scrollUp-btn flex"
        aria-label='scrollUp button'>
        <img src="./images/up.avif" alt="scrollUp" />  
        {/*https://www.freepik.com/icon/triangle_6844773#fromView=search&page=8&position=94&uuid=520a6f8f-869e-426a-8fda-056f8d31657c */}
      </a>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
