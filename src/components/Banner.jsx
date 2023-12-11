import img from "./../assets/IMG_20231210_232358.jpg"

const Banner = () => {
    return (
        <div className="skeleton">
            
            <div className="hero h-96" style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPwUglOgKNwIYEMwvxAPsCYQFkaHf6MbRlHIR835Vbvxp_0EgOCe2NCktGB_9f0cm62c&usqp=CAU)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <img className="mask mask-hexagon w-40 justify-center items-center mx-auto block" src={img} alt="" />
                <h1 className="mb-5 text-5xl font-bold">Hello, This is Roza!</h1>
                <p className="mb-5">A React FrontEnd Developer.</p>
                <button className="btn glass text-white">Download Resume</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;