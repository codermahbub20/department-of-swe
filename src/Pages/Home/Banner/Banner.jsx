import videoBg from '../../../assets/VideoBg.mp4'


const Banner = () => {


    return (
        <div className="carousel  h-[100vh] md:h-[90vh]  w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <video className="h-full w-full object-cover" src={videoBg} autoPlay loop muted></video>

                <div className="absolute  flex items-center h-full left-0 md:top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <div className='md:space-y-6 ml-10 md:ml-20 mt-5 w-full text-white md:w-2/3'>
                        <h1 className='text-xl md:text-3xl lg:text-5xl '> Department Of Software Engineering</h1>
                        <p className="md:text-xl">Research Center of Excellence in Algorithms, AI, Data Science, Bioinformatics, Cybersecurity, and Software Engineering.</p>
                    </div>
                </div>

                <div className="absolute flex  justify-end transform -translate-y-1/2 left-5  right-5 bottom-0 gap-4">

                </div>
            </div>
        </div>

    );
};

export default Banner;