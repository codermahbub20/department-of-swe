import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-white text-black">
            <hr />
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-around">
                    <div className="mb-6 md:mb-0">
                        <a href="" className="flex items-center">
                            <img src="https://metrouni.edu.bd/frontend/logo/logo.png" className="h-20 rounded-lg mr-3" alt="" />
                        </a>
                        <div className="mt-5">
                            <p className="text-justify">
                                Telephone: 880-2-55155097 <br />
                                PABX: 880-2-55167100, 55167228-57, Ext: 6432 <br />
                                E-mail: headcse@cse.buet.ac.bd <br />
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-12 text-black sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-black">
                                About Us
                            </h2>
                            <ul className="text-black dark:text-gray-400 font-medium">
                                <a href=""><li>Mission & Vision</li></a>
                                <a href="head"><li>Message From Head</li></a>
                                <a href=""><li>Award</li></a>
                                <a href=""><li>About</li></a>
                                <a href=""><li>Contact</li></a>
                            </ul>
                        </div>
                        <div className="ml-5">
                            <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-black">
                                Follow us
                            </h2>
                            <ul className="text-black dark:text-gray-400 font-medium space-y-4">
                                <li className="">
                                    <a href="" className="hover:underline ">
                                        Facebook
                                    </a>
                                </li>

                                <li>
                                    <a href="" className="hover:underline">
                                        Linkedin
                                    </a>
                                </li>

                                <li>
                                    <a href="" className="hover:underline">
                                        WhatsApp
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-black">
                                Legal
                            </h2>
                            <ul className="text-black dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <Link to="termCondition" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-center">
                    <span className="text-sm text-black sm:text-center dark:text-gray-400">
                        ©  {new Date().getFullYear()+' '} 
                        <a href="" className="hover:underline">
                             Department Of Swe™
                        </a>
                        . All Rights Reserved by Department Of Software Engineering,Metropolitan University,Sylhet.
                    </span>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;