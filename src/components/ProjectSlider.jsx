import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from './../assets/HostelPro(1).png';
import img4 from './../assets/JobQuest(1).png';
import img7 from './../assets/Slick(1).png';
import img10 from './../assets/TaskMan(1).png'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const ProjectSlider = () => {

const AutoplaySlider = withAutoplay(AwesomeSlider);
    const slider = (
        <AutoplaySlider
        className="h-1/2 w-full"
        play={true}
        cancelOnInteraction={false} 
        interval={6000}
        >
        
          <div data-src={img1} />
          <div data-src={img4} />
          <div data-src={img7} />
          <div data-src={img10} />
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
                    typewriter.typeString('My Works...')
                    .pauseFor(5000)
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .start();
                }}
                />
            </h1>
            <hr />
            <p className="py-6 mx-10 text-blue-950 "><span className='font-bold'>Enter my Frontend Playground now! Witness the enchantment of design and functionality coming together. Enjoy a visual feast of the user-friendly websites that I have created. Look closely at these living gems:</span>
            <ul className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <li className='flex justify-between'>
                    <div className='flex flex-col'>
                        <Link className='underline font-semibold' to ="https://65322a56d8a3b36d3750cc16--rainbow-biscotti-9c039c.netlify.app/">Slick Here!</Link>
                        <Link className='underline' to ="https://github.com/khadizajarin/fashion-site-client-side">Client Side Github Repository</Link>
                        <Link className='underline' to ="https://github.com/khadizajarin/fashion-site-server-side">Server Side Github Repository</Link>
                    </div>
                </li>
                <li className='flex justify-between'>
                    <div className='flex flex-col'>
                        <Link className='underline font-semibold' to ="https://654a72c013491d0510a34866--storied-donut-b1299b.netlify.app/">JobQuest</Link>
                        <Link className='underline' to ="https://github.com/khadizajarin/job-seeker-client">Client Side Github Repository</Link>
                        <Link className='underline' to ="https://github.com/khadizajarin/job-seeker-server">Server Side Github Repository</Link>
                    </div>
                </li>
                <li className='flex justify-between'>
                    <div className='flex flex-col'>
                        <Link className='underline font-semibold' to ="https://65685285dee9ea0665e31d65--sparkly-gnome-d71ffa.netlify.app/">HostelPro</Link>
                        <Link className='underline' to ="https://github.com/khadizajarin/hostel-menu-client-side">Client Side Github Repository</Link>
                        <Link className='underline' to ="https://github.com/khadizajarin/hostel-menu-server-side">Server Side Github Repository</Link>
                    </div>
                </li>
                <li className='flex justify-between'>
                    <div className='flex flex-col'>
                        <Link className='underline font-semibold' to ="https://thriving-froyo-4f56fe.netlify.app/">TaskMan</Link>
                        <Link className='underline' to ="https://github.com/khadizajarin/job-task-client">Client Side Github Repository</Link>
                        <Link className='underline' to ="https://github.com/khadizajarin/job-task-server">Server Side Github Repository</Link>
                    </div>
                </li>
            </ul>
            </p>
            <div className="border-black px-10">
                {slider}
            </div>
        </div>
    );
};

export default ProjectSlider;