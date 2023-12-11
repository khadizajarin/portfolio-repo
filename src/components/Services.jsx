/* eslint-disable react/no-unescaped-entities */
import Typewriter from 'typewriter-effect';
import {FaDatabase, FaJs, FaNodeJs, FaReact} from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";


const Services = () => {


  
    return (
        <div className="bg-fuchsia-100 py-10">                  
            <h5 className="text-2xl font-semibold ml-10 text-blue-950">
            <Typewriter
                options={{ loop: true, autoStart: true }}
                onInit={(typewriter) => {
                    typewriter.typeString('Skills')
                    .pauseFor(5000)
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .start();
                }}
                />
            </h5>

            <h1 className='text-left font-bold text-5xl mx-10 mb-4 text-blue-950 ' >
            <Typewriter
                options={{ loop: true, autoStart: true }}
                onInit={(typewriter) => {
                    typewriter.typeString('What I do...')
                    .pauseFor(5000)
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .start();
                }}
                />
            </h1>
            <hr />
            <p className="py-6 ml-10">I'm passionately investigating web development and driven to continuously learn new abilities. Every day presents an opportunity to take on new challenges and embrace how the world of design and coding is constantly changing. Utilize my skill set that includes:
            </p>

            <div  className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 h-full ">
                
                {/* card 1 */}
                <Fade cascade className='flex justify-center items-center'>
                    <div className="card w-96 bg-base-100 shadow-xl image-full ">
                        <figure><img src="https://studio.uxpincdn.com/studio/wp-content/uploads/2020/12/7-Best-Reasons-To-Use-React.js-Components-In-Your-Project.png.webp" alt="React" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">React (Intermediate) <FaReact></FaReact></h2>
                            <p>I specialize in creating engaging web interfaces using React. With a strong grasp of its building blocks and how it manages content, I design web applications that offer an outstanding user experience.
                            </p>
                        </div>
                    </div>
                </Fade>
                {/* card 2 */} 

                <Fade cascade className='flex justify-center items-center'>
                    <div className="card w-96 bg-base-100 shadow-xl image-full ">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOluMRY4eXcBP5-x8ha4RSDjCa4_bajJ_PA&usqp=CAU" alt="Node.js" /></figure>
                                <div className="card-body">
                                <h2 className="card-title">Node.js (Intermediate)<FaNodeJs></FaNodeJs> </h2>
                                <p>I specialize in building scalable backend solutions with Node.js. I design APIs and real-time applications by harnessing Node.js' ability to handle data efficiently through its event-driven architecture, ensuring high performance.</p>
                        </div>
                    </div>
                </Fade>
                  {/* card 3 */}
                <Fade cascade className='flex justify-center items-center'>
                    <div className="card w-96 bg-base-100 shadow-xl image-full ">
                        <figure><img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1302190/retina_1708x683_cover-secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png" alt="Express.js" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Express.js (Basic)<FaJs></FaJs> </h2>
                            <p>I'm proficient at creating streamlined web applications with Express.js. Using its simple framework and robust middleware, I develop straightforward, and scalable RESTful APIs and server-side applications.</p>
                        </div>
                    </div>  
                </Fade>
                
                {/* card 4 */}
                <Fade cascade className='flex justify-center items-center'>
                    <div className="card w-96 bg-base-100 shadow-xl image-full ">
                        <figure><img src="https://miro.medium.com/v2/resize:fit:640/1*WvMnQU8udcUuckbVo5m2_g.jpeg" alt="MongdDB" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">MongoDB (Basic)<FaDatabase></FaDatabase> </h2>
                            <p>I specialize in MongoDB for databases. Using its flexible NoSQL structure, I create high-performance databases that are scalable and easy to manage, ensuring seamless handling of data and scalability.</p>
                        </div>
                    </div>   
                </Fade>
                
            </div>
        </div>
    );
};

export default Services;