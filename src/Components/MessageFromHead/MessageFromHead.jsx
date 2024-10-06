

const MessageFromHead = () => {
    return (
        <div className="min-h-[100vh]">
            <div className="flex space-y-4 justify-center items-center">
                <div className="text-center">
                    <div className="flex mb-5 justify-center items-center">
                        <img src="https://metrouni.edu.bd/images/1699259586.png" alt="Department Head" />
                    </div>
                    <h1>Fuad Ahmed</h1>
                    <p>Head,  Department of Software Engineering</p>
                    <p>Metropolitan University</p>
                </div>
            </div>
            <h1 className="text-xl text-center mt-10">Message</h1>

            {/* Text Div */}
            <div className="w-[80%] md:max-w-[50%] py-5 mb-5 p-3 border-2 mx-auto">
                <p>Assalamualaikum wa rahmatullah wa barakatu <br />

                    You are cordially welcome to the Department of Software Engineering.
                    It is our immense pleasure to see your interest in the department of Software Engineering of Metropolitan University. As you know, it is the newest department in the university, where we offer one of the most demanding programmes in the world, BSc in Software Engineering.<br /><br />

                    BSc in Software Engineering follows the updated Outcome Based Curriculum (OBC) to meet the needs of the Fourth Industrial Evolution. The curriculum is equipped with science-based and mathematical courses, general education courses, core computer science courses, specialized courses on software analysis, design, development, and software quality assurance and a sufficient number of courses on the most recent trends like Artificial Intelligence, Machine Learning, Data Science, Cloud Computing, Internet of Things (IoT), Cyber Security,<br /><br />

                    Block Chain and Entrepreneurship Development. The students are expected to learn Software design and development during the first two years, research-oriented development in the following year and a half.
                    The students will join any reputed software firm as intern students during the last six months.<br /><br />

                    The programme has been designed as a complete package to prepare students to meet the global challenges to become successful Software Engineers/ IT consultants. As seats are limited in this programme, only students with excellent results in SSC and HSC are allowed to be admitted to BSc in Software Engineering.<br />
                    The department of Software Engineering feels privileged to have experienced faculty members and to be equipped with high- configuration dedicated computer labs, classrooms and many other necessary physical facilities.<br /><br />


                    Moreover, students of the department are regularly participating in many co-curricular and extra-curricular activities, which are steadily helping us to enhance the reputation of our department gradually.<br /><br />

                    On the other hand, the students of the department have already formed their club named SE Innovators Forum, MU which ensures the arrangement of co-curricular and extra-curricular activities both inside and outside the university.
                    We hope we will enjoy working together to make the nation prepared for entering the Fourth Industrial Evolution.<br /><br />

                    Thanking you,<br />
                    Fuad Ahmed<br />
                    Associate Professor and Head<br />
                    Dept. of Software Engineering</p>
            </div>
        </div>
    );
};

export default MessageFromHead;