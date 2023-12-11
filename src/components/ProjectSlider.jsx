import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from './../assets/HostelPro(1).png';
import img4 from './../assets/JobQuest(1).png';
import img7 from './../assets/Slick(1).png';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const ProjectSlider = () => {

const AutoplaySlider = withAutoplay(AwesomeSlider);
    const slider = (
        <AutoplaySlider
        className="h-1/2 w-full"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        >
        
          <div data-src={img1} />
          <div data-src={img4} />
          <div data-src={img7} />
        </AutoplaySlider>
      );

    return (
        <div className=' py-10 bg-fuchsia-200'>
            <h5 className="text-2xl font-semibold ml-10 text-blue-950">
            <Typewriter
                options={{ loop: true, autoStart: true }}
                onInit={(typewriter) => {
                    typewriter.typeString('Projects')
                    .pauseFor(5000)
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .start();
                }}
                />
            </h5>
            <h1 className='text-left font-bold text-5xl mx-10 mb-4 text-blue-950'>
            <Typewriter
                options={{ loop: true, autoStart: true }}
                onInit={(typewriter) => {
                    typewriter.typeString('Some of my works...')
                    .pauseFor(5000)
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .start();
                }}
                />
            </h1>
            <hr />
            <p className="py-6 ml-10">Enter my Frontend Playground now! Witness the enchantment of design and functionality coming together. Enjoy a visual feast of the user-friendly websites that I have created. Look closely at these living gems:
            <ul className='grid grid-cols-1 lg:grid-cols-3 underline font-semibold'>
                <li className='flex justify-center '><Link to ="https://65685285dee9ea0665e31d65--sparkly-gnome-d71ffa.netlify.app/">Slick Here!</Link></li>
                <li className='flex justify-center '><Link to ="https://654a72c013491d0510a34866--storied-donut-b1299b.netlify.app/https://65322a56d8a3b36d3750cc16--rainbow-biscotti-9c039c.netlify.app/">JobQuest</Link></li>
                <li className='flex justify-center '><Link to ="">HostelPro</Link></li>
            </ul>
            </p>
            <div className="border-black px-10">
                {slider}
            </div>
        </div>
    );
};

export default ProjectSlider;