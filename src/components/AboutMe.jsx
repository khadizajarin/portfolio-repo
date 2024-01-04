/* eslint-disable react/no-unescaped-entities */
import img from "./../assets/IMG_20231210_232358.jpg"
import { FaAddressCard, FaBookOpen, FaBookReader, FaCalendar, FaEnvelope, FaGithub, FaLaptopHouse, FaLinkedin, FaPhone, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const AboutMe = () => {
    const handleEmailClick = (e) => {
        e.preventDefault();
        const emailLink = 'mailto:khadiza131310@gmail.com';
        window.open(emailLink, '_blank');
      }



    return (
        <div>
            <div className="hero bg-fuchsia-200 text-blue-950">
                <div className="hero-content flex-col lg:flex-row-reverse lg:mx-10">
                    <img src={img} className=" rounded-lg shadow-2xl" />
                    <div>
                    <h5 className="text-2xl font-semibold text-blue-950">
                    <Typewriter
                        options={{ loop: true, autoStart: true }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Discover')
                            .pauseFor(5000)
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .start();
                        }}
                        />
                    </h5>
                    <h1 className="text-5xl font-bold text-blue-950">
                    <Typewriter
                        options={{ loop: true, autoStart: true }}
                        onInit={(typewriter) => {
                            typewriter.typeString('About Me...')
                            .pauseFor(5000)
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .start();
                        }}
                        />
                    </h1>
                    <hr />
                    <p className="py-6  font-bold">Hey there, I'm Khadiza Jarin Roza, a Frontend React developer. I've mastered React and frontend skills through a dedicated 6-month course, passionate about crafting sleek and user-friendly interfaces.</p>
                        <div className="">
                            <table className="table "> 
                                <tbody className="grid grid-cols-1 lg:grid-cols-2 ">
                                {/* row 1 */}
                                <tr className="flex items-center">
                                    <td className="flex items-center flex-shrink-0 w-1/2">
                                        <FaUser className="mr-2" />
                                        <span>Name:</span>
                                    </td>
                                    <td className="flex items-center w-1/2">Khadiza Jarin Roza</td>
                                </tr>

                                {/* row 2 */}
                                <tr className="flex items-center">
                                    <td className="flex items-center flex-shrink-0 w-1/2">
                                        <FaCalendar style={{ marginRight: '5px' }} />
                                        <span>Age:</span>
                                    </td>
                                    <td className="flex items-center w-1/2">23 years</td>
                                </tr>
                                {/* row 3 */}
                                <tr className="flex items-center">
                                    <td className="flex items-center flex-shrink-0 w-1/2">
                                        <FaPhone style={{ marginRight: '5px' }} />
                                        <span>Phone:</span>
                                    </td>
                                    <td className="flex items-center w-1/2">+8801315929336</td>
                                </tr>
                                {/* row 4 */}
                                <tr className="flex items-center">
                                    <td className="flex items-center flex-shrink-0 w-1/2">
                                        <FaBookOpen style={{ marginRight: '5px' }} />
                                        <span>Education:</span>
                                    </td>
                                    <td className="flex items-center w-1/2">UnderGraduate </td>
                                </tr>
                                {/* row 5 */}
                                <tr className="flex items-center">
                                    <td className="flex items-center flex-shrink-0 w-1/2">
                                        <FaBookReader style={{ marginRight: '5px' }} />
                                        <span>Currently Studying:</span>
                                    </td>
                                    <td className="flex items-center w-1/2">B.Sc in CSE(6th semester) </td>
                                </tr>

                                <tr className="flex items-center">
                                    <td className="flex items-center flex-shrink-0 w-1/2">
                                        <FaAddressCard style={{ marginRight: '5px' }} />
                                        <span>Address:</span>
                                    </td>
                                    <td className="flex items-center w-1/2">Chittagong,Bangladesh</td>
                                </tr>
                               
                                <tr className="flex items-center">
                                    <td className="flex items-center flex-shrink-0 w-1/2">
                                        <FaEnvelope style={{ marginRight: '5px' }} />
                                        <span>Email:</span>
                                    </td>
                                    <td className="flex items-center w-1/2"> <Link className="underline" onClick={handleEmailClick}>khadiza131310@gmail.com</Link></td>
                                </tr>
                             
                                <tr className="flex items-center">
                                    <td className="flex items-center flex-shrink-0 w-1/2">
                                        <FaLinkedin style={{ marginRight: '5px' }} />
                                        <span>LinkedIn:</span>
                                    </td>
                                    <td className="flex items-center w-1/2"><Link className="underline" to="https://www.linkedin.com/in/khadiza-jarin-roza/">Khadiza Jarin Roza</Link></td>
                                </tr>
                        
                                <tr className="flex items-center">
                                    <td className="flex items-center flex-shrink-0 w-1/2">
                                        <FaGithub style={{ marginRight: '5px' }} />
                                        <span>GitHub:</span>
                                    </td>
                                    <td className="flex items-center w-1/2"><Link className="underline" to="https://github.com/khadizajarin">khadizajarin</Link></td>
                                </tr>
                               
                                 <tr className="flex items-center">
                                    <td className="flex items-center flex-shrink-0 w-1/2">
                                        <FaLaptopHouse style={{ marginRight: '5px' }} />
                                        <span>Freelancer:</span>
                                    </td>
                                    <td className="flex items-center w-1/2 ">Available</td>  
                                </tr>
                                <hr />
                                </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default AboutMe;