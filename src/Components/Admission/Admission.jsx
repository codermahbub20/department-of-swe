import './Admission.css'

const Admission = () => {
    return (
        <div className="min-h-[100vh] w-[95%] mx-auto py-8">
            <div className="h-[250px]  text-center mx-auto rounded-lg backgroundImage flex items-center justify-center">
                <h1 className="text-xl md:text-3xl text-white p-2 bg-black font-medium">Admission || Department Of Software Engineering</h1>
            </div>

            {/* Admission Related content */}
            <h1 className='text-2xl mt-10 text-center font-bold bg-[#001158] text-white p-2 rounded-lg '>#Admission</h1>

            <div className='grid grid-cols-2 mt-5 gap-5'>
                {/* Admission Requirements */}
                <div>
                    <h1 className='text-2xl font-bold text-center'>Requirements</h1>
                    <p className='border-2 p-5 mt-1'>Department of Software Engineering is under the School of Science & Technology of the University. In each semester entry requirements have been considered for admission to the Department of Software Engineering. The students who passed Higher Secondary level or equivalent, any of them may apply for admission to the undergraduate level if he fulfills the following requirements:

                        A student who passed SSC & HSC from Science group or equivalent public examinations with a minimum of GPA 2.5 (on a scale of 5.00) in each may apply for admission to the undergraduate programs.
                        Students who have a minimum of GPA 2.00 in either SSC and or HSC but a total of GPA 6.00 can apply.
                        Graduate Certificate of Education (GCE): At least five different IGCSE/GCSE/Ordinary (O) Level academic subjects with minimum grade C and two different Advanced Level (A Level)/International Advanced Level (IAL) academic subjects with minimum grade C are eligible to apply.
                        Students must have a background in Physics and Mathematics.
                        Admission Procedure

                        The eligible candidates for admission have to sit for the admission test and the number of students varies from term to term. Admission test arranged by the Central administration of the University following the procedure is as follows:

                        After verification of students’ documents, eligible candidates are allowed to sit for the admission test. The questions are of multiple choices in the subject of Physics, Mathematics, English and ICT. The duration of the test is one hour.
                        A merit list is prepared on the basis of marks obtained out of total marks or in a specific subject.
                        The students qualified in the admission test and selected, the admission section of the office of the Registrar preserves the students’ information through software verifying all of the documents and the students then get admission to the first semester.</p>
                </div>

                {/* Fees Related div */}
                <div>
                    <h1 className='text-2xl font-bold text-center'>Fees</h1>
                </div>
            </div>

        </div>
    );
};

export default Admission;