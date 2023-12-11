import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import img from "./../assets/IMG_20231210_232358.jpg"

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <div>
            <footer className="footer items-center p-4 bg-fuchsia-300 text-blue-950">
            <aside className="items-center grid-flow-col">
                 <img className="w-8 rounded-full" src={img} alt="" />
                <p>Copyright © 2023 - All right reserved 
                    <br />to the owner Khadiza Jarin Roza
                </p>
            </aside> 
            <button style={{ display: 'flex', alignItems: 'center' }} onClick={handleScrollToTop} className={`back-to-top ${isVisible ? 'visible' : ''}`}>
                <span className="font-bold">Back to Top</span> <FaArrowUp></FaArrowUp>
            </button>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <section className="languages-section">
                <h4>Languages & Frameworks Used in this portfolio:</h4>
                <p>
                    HTML5, CSS, JavaScript (ES6+), React, Vite,
                        <br /> Tailwind CSS, daisyUI, Framer-Motion,
                        <br />Font-awesome, Typewrite-effect
                </p>
                </section>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;