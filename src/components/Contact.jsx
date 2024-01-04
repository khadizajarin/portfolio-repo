/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope, FaFacebook, FaGithub,FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Contact = () => {
    return (
        <div className="bg-fuchsia-100">
            <div className=' pt-10'>
                <h5 className="text-2xl font-semibold text-blue-950 ml-10">
                        <Typewriter
                            options={{ loop: true, autoStart: true }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Contact')
                                .pauseFor(5000)
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .start();
                            }}
                            />
                </h5>
                <h1 className="text-5xl font-bold text-blue-950 ml-10">
                    <Typewriter
                        options={{ loop: true, autoStart: true }}
                        onInit={(typewriter) => {
                            typewriter.typeString('How to reach...')
                            .pauseFor(5000)
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .start();
                        }}
                        />
                </h1>
                <hr />
            </div>

            <p className="text-blue-950 mx-10 pt-4 font-bold">Got questions? Knock on my door anytime, I'm here for all your queries!</p>


            <div className=' pb-10 px-10 text-blue-950'>
                <table className="table"> 
                    <tbody className="grid grid-cols-1 lg:grid-cols-2">
                                {/* row 1 */}
                                <tr className="flex items-center">
                                    <td className="w-2/5 flex items-center flex-shrink-0">
                                        <FaEnvelope style={{ marginRight: '5px' }} />
                                        <span>Email:</span>
                                    </td>
                                    <td className="w-3/5 underline"><Link >khadiza131310@gmail.com</Link></td>
                                </tr>
                                {/* row 2 */}
                                <tr className="flex items-center">
                                    <td className="w-2/5 flex items-center flex-shrink-0">
                                        <FaLinkedin style={{ marginRight: '5px' }} />
                                        <span>LinkedIn:</span>
                                    </td>
                                    <td className="w-3/5 underline"><Link to="https://www.linkedin.com/in/khadiza-jarin-roza/">Khadiza Jarin Roza</Link></td>
                                </tr>
                                {/* row 3*/}
                                <tr className="flex items-center">
                                    <td className="w-2/5 flex items-center flex-shrink-0">
                                        <FaGithub style={{ marginRight: '5px' }} />
                                        <span>GitHub:</span>
                                    </td>
                                    <td className="w-3/5 underline"><Link to="https://github.com/khadizajarin">khadizajarin</Link></td>
                                </tr>           
                                   {/* row 4 */}
                                 <tr className="flex items-center">
                                    <td className="w-2/5 flex items-center flex-shrink-0">
                                        <FaTelegram style={{ marginRight: '5px' }} />
                                        <span>Telegram:</span>
                                    </td>
                                    <td className="w-3/5 underline"><Link to="https://t.me/khadizajarinroza">Khadiza Jarin Roza</Link></td>
                                </tr>
                                {/* row 5 */}
                                 <tr className="flex items-center">
                                    <td className="w-2/5 flex items-center flex-shrink-0">
                                        <FaWhatsapp style={{ marginRight: '5px' }} />
                                        <span>Whatsapp</span>
                                    </td>
                                    <td className="w-3/5 underline"><Link to="https://wa.me/01315929336">Khadiza Jarin Roza</Link></td>
                                </tr>
                                {/* row 6 */}
                                 <tr className="flex items-center">
                                    <td className="w-2/5 flex items-center flex-shrink-0">
                                        <FaFacebook style={{ marginRight: '5px' }} />
                                        <span>Facebook:</span>
                                    </td>
                                    <td className="w-3/5 underline"><Link to="https://www.facebook.com/khadizajarinroza?mibextid=gik2fB">Khadiza Jarin Roza</Link></td> 
                                </tr> 
                                <hr />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Contact;