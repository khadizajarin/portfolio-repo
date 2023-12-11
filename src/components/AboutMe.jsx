import img from "./../assets/IMG_20231210_232358.jpg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAddressCard, FaCalendar, FaEnvelope, FaGithub, FaLaptopHouse, FaLinkedin, FaPhone, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const AboutMe = () => {
    const handleEmailClick = (e) => {
        e.preventDefault();
        const emailLink = 'mailto:khadiza131310@gmail.com';
        window.open(emailLink, '_blank');
      }



    return (
        <div>
            <div className="hero py-40 bg-fuchsia-200 text-blue-950">
                <div className="hero-content flex-col lg:flex-row-reverse lg:ml-10">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h5 className="text-2xl font-semibold">Discover</h5>
                    <h1 className="text-5xl font-bold">About Me...</h1>
                    <hr />
                    <p className="py-6">Hey there, I'm Khadiza Jarin Roza, a Frontend React developer. I've mastered React and frontend skills through a dedicated 6-month course, passionate about crafting sleek and user-friendly interfaces.</p>
                        <div className="overflow-x-auto lg:flex lg:flex-row gap-10">
                            <table className="table"> 
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaUser style={{ marginRight: '5px' }} />
                                        <span>Name:</span>
                                    </td>
                                    <td>Khadiza Jarin Roza</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaCalendar style={{ marginRight: '5px' }} />
                                        <span>Age:</span>
                                    </td>
                                    <td>23 years</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaPhone style={{ marginRight: '5px' }} />
                                        <span>Email:</span>
                                    </td>
                                    <td>+8801315929336</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaAddressCard style={{ marginRight: '5px' }} />
                                        <span>Address:</span>
                                    </td>
                                    <td>Chittagong,Bangladesh</td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="table"> 
                                <tbody>
                                {/* row 5 */}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaEnvelope style={{ marginRight: '5px' }} />
                                        <span>Email:</span>
                                    </td>
                                    <td className="underline"><a href="#" onClick={handleEmailClick}>khadiza131310@gmail.com</a></td>
                                </tr>
                                {/* row 6 */}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaLinkedin style={{ marginRight: '5px' }} />
                                        <span>LinkedIn:</span>
                                    </td>
                                    <td><Link className="underline" to="https://www.linkedin.com/in/khadiza-jarin-roza/">Khadiza Jarin Roza</Link></td>
                                </tr>
                                {/* row 7 */}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaGithub style={{ marginRight: '5px' }} />
                                        <span>GitHub:</span>
                                    </td>
                                    <td><Link className="underline" to="https://github.com/khadizajarin">khadizajarin</Link></td>
                                </tr>
                                 {/* row 8 */}
                                 <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaLaptopHouse style={{ marginRight: '5px' }} />
                                        <span>Freelancer:</span>
                                    </td>
                                    <td>Available</td>
                                </tr>
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