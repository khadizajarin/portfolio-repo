/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope, FaFacebook, FaGithub,FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Contact = () => {
    return (
        <div>
            <div className='pt-10'>
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

            <p className=" text-blue-950 ml-10 pt-4">Got questions? Knock on my door anytime—I'm here for all your queries!</p>


            <div className='lg:flex lg:flex-row mb-10 pl-10 text-blue-950'>
                <table className="table"> 
                    <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaEnvelope style={{ marginRight: '5px' }} />
                                        <span>Email:</span>
                                    </td>
                                    <td className="underline"><a href="#" >khadiza131310@gmail.com</a></td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaLinkedin style={{ marginRight: '5px' }} />
                                        <span>LinkedIn:</span>
                                    </td>
                                    <td><Link className="underline" to="https://www.linkedin.com/in/khadiza-jarin-roza/">Khadiza Jarin Roza</Link></td>
                                </tr>
                                {/* row 3*/}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaGithub style={{ marginRight: '5px' }} />
                                        <span>GitHub:</span>
                                    </td>
                                    <td><Link className="underline" to="https://github.com/khadizajarin">khadizajarin</Link></td>
                                </tr>           
                    </tbody>
                </table>
                <table className="table "> 
                    <tbody>
                                {/* row 4 */}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaTelegram style={{ marginRight: '5px' }} />
                                        <span>Telegram:</span>
                                    </td>
                                    <td><Link className="underline" to="https://t.me/khadizajarinroza">Khadiza Jarin Roza</Link></td>
                                </tr>
                                {/* row 5 */}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaWhatsapp style={{ marginRight: '5px' }} />
                                        <span>Whatsapp</span>
                                    </td>
                                    <td><Link className="underline" to="https://wa.me/01315929336">Khadiza Jarin Roza</Link></td>
                                </tr>
                                {/* row 6 */}
                                <tr>
                                    <td style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaFacebook style={{ marginRight: '5px' }} />
                                        <span>Facebook:</span>
                                    </td>
                                    <td><Link className="underline" to="https://www.facebook.com/khadizajarinroza?mibextid=gik2fB">Khadiza Jarin Roza</Link></td>
                                </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Contact;