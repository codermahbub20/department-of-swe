import { HoverEffect } from "../../Components/Common/PinCard/3DPin";

export const head = [
    {
        img: "https://metrouni.edu.bd/images/1699259586.png",
        description:
            "Fuad Ahmed",
        link: "https://www.facebook.com/fuad.ahmed.73345",
        title: "Associate Professor & Head",
    },
]

export const projects = [
    {
        img: "https://metrouni.edu.bd/images/1699259597.png",
        description:
            "Wadia Iqbal Chowdhury",
        link: "https://www.facebook.com/wadia.chowdhury",
        title: "Senior Lecturer",
    },
    {
        img: "https://metrouni.edu.bd/images/1699259607.png",
        description:
            "Nazia Sultana Chowdhury",
        link: "https://www.linkedin.com/in/nazia-nishat-642662196/",
        title: "Senior Lecturer",
    },
    {
        img: "https://metrouni.edu.bd/images/1699259619.png",
        description:
            "Rina Paul",
        link: "https://www.facebook.com/paulrinaSUST",
        title: "Senior Lecturer",
    },
    {
        img: "https://metrouni.edu.bd/images/1699259630.png",
        description:
            "Al Akram Chowdhury",
        link: "https://meta.com",
        title: "Senior Lecturer",
    },
    {
        img: "https://metrouni.edu.bd/images/1699259641.jpg",
        description:
            "Moshiur Rahman Autul",
        link: "https://www.linkedin.com/in/moshiur-rahman-autul-b9046b72/",
        title: "Lecturer",
    },
    {
        img: "https://metrouni.edu.bd/images/1708942850.jpg",
        description:
            "Iffat Ahmed Chowdhury Nahid",
        link: "https://www.linkedin.com/in/nahidiac/",
        title: "Lecturer",
    },
    {
        img: "https://metrouni.edu.bd/images/1725983153.JPG",
        description:
            "Nasrin Akter Tanya",
        link: "https://microsoft.com",
        title: "Lecturer",
    },
];

const Faculty = () => {
    return (
        <div className="w-[60%] mx-auto min-h-[100vh]">
            <h1 className="text-2xl mt-5">Department Head</h1>
            <div className=" max-w-3xl mx-auto mb-4 mt-4">
               <HoverEffect items={head}/>
            </div>
            <hr />
            {/* Lecturer Card */}
            <div className="max-w-5xl mx-auto px-5">
                <h1 className="text-2xl">Faculty Members</h1>
                    <HoverEffect items={projects} />
                </div>
        </div>
    );
};

export default Faculty;