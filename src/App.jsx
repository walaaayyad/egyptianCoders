import Header from "./components/1-header/header"
import Hero from "./components/2-hero/hero"
import YouTubeChannels from "./components/3-channel/channel"
import Footer from "./components/4-footer/footer";
import { useState, useEffect} from "react";

function App() {
const [scrollUp, setScrollUp] = useState(false); 

//-------------------------- Scroll Up Button ---------------------------
useEffect(()=> {
  window.addEventListener("scroll", ()=> {
    window.scrollY > 600 ? setScrollUp(true) : setScrollUp(false); 
  })
})

    return (
        <>
            <Header/>
            <Hero/>
            <YouTubeChannels/>
            {/* Add condition to check if the user scroll down so the button appear by change its opacity */}
            <a 
              href="#hero" 
              style={{opacity: scrollUp ? 1 : 0, 
              transition: "1s"}}
              className="scrollUp-btn flex"
              aria-label='scrollUp button'>
            <img src="./images/up.avif" alt="scrollUp" />  
             {/*https://www.freepik.com/icon/triangle_6844773#fromView=search&page=8&position=94&uuid=520a6f8f-869e-426a-8fda-056f8d31657c */}
            </a>
            <Footer/>
        </>
    )
}

export default App

