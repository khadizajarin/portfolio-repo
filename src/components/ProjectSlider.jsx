import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from './../assets/HostelPro(1).png';
import img4 from './../assets/JobQuest(1).png';
import img7 from './../assets/Slick(1).png'

const ProjectSlider = () => {

const AutoplaySlider = withAutoplay(AwesomeSlider);
    const slider = (
        <AutoplaySlider
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
        <div className='border-blue-950 mx-400 my-40'>
            <h5 className="text-2xl font-semibold ml-10">Projects</h5>
            <h1 className='text-left font-bold text-5xl mx-10 mb-4'>Some of my works...</h1>
            {slider}
        </div>
    );
};

export default ProjectSlider;