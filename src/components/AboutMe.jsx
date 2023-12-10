import img from "./../assets/IMG_20231210_232358.jpg"
const AboutMe = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse ml-10">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h5 className="text-2xl font-semibold">Discover</h5>
                    <h1 className="text-5xl font-bold">About Me</h1>
                    <hr />
                    <p className="py-6">Hey there, I'm Khadiza Jarin Roza, a Frontend React developer. I've mastered React and frontend skills through a dedicated 6-month course, passionate about crafting sleek and user-friendly interfaces.</p>
                    <button className="btn glass">Contact</button>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default AboutMe;