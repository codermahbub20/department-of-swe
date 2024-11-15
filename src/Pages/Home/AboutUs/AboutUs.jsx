import { Link } from "react-router-dom";
import { FocusCards } from "../../../Components/Common/FocusCard/FocusCard";
import { IoIosArrowRoundForward } from "react-icons/io";

const AboutUs = () => {

    const cards = [
        {
            title: "Team Work",
            src: "https://cse.buet.ac.bd/public/img/aboutus/c11.jpg",
        },
        {
            title: "Beautiful Lab",
            src: "https://cse.buet.ac.bd/public/img/aboutus/c21.jpg",
        },
        {
            title: "Good Consultancy",
            src: "https://cse.buet.ac.bd/public/img/aboutus/c12.jpg",
        },
        {
            title: "Problem Solving ACM Class",
            src: "https://cse.buet.ac.bd/public/img/aboutus/c22.jpg",
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[80%] gap-5 mt-10 mx-auto py-10">


            <div>
                <h1 className="text-4xl font-bold text-center border-y-2 py-4">About Us</h1>
                <p className="text-lg break-all mt-10">The BSc in Software Engineering is a 48 (forty-eight) months-long undergraduate programme for those, who intend to achieve a Bachelor of Science degree from the department of software engineering. Students have to complete 148 credits theory and lab courses along with 12 credits internship from any reputed software development firm, a total of 160 credits to be a graduate. The programme is designed on the basis of outcome-based curriculum equipped with science & mathematics courses, general education courses, core computer science courses, specialized courses on software analysis, design, development, software quality assurance and a sufficient number of courses on most recent trends. The programme will motivate the graduates to go that extra mile through learning new skills and improving existing ones, which is a trait that can only be achieved by striving for excellence.
                </p>

                <div className="md:flex  justify-between mt-10 items-center">
                    <Link to="/head">
                        <div className="py-3 px-8 rounded-lg bg-primary text-white flex items-center justify-between">
                            <button>Read More</button>
                            <IoIosArrowRoundForward />
                        </div>
                    </Link>

                    <Link to="/head">
                        <div className="py-3 md:mt-0 mt-5 px-8 rounded-lg bg-primary items-center text-white flex justify-between">
                            <button>Head Message</button>
                            <IoIosArrowRoundForward />
                        </div>
                    </Link>

                </div>
            </div>

            {/* Pictures section */}
            <div>
                <FocusCards cards={cards} />
            </div>

        </div>
    );
};

export default AboutUs;