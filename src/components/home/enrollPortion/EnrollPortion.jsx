import React from 'react'
import enrollPortionLogo from "../../../assets/enroll/Group 81.png"
import CourseCard from '../courses/CourseCard'
import courseIcon1 from "../../../assets/course/icon_05.png"

const EnrollPortion = () => {
    return (
        <div className='bg-[#004464] relative md:min-h-[50vh] sm:min-h-[80vh] pb-[200px]'>
            <div className="flex md:flex-row sm:flex-col">
                <div className='mt-20 md:w-1/2 sm:w-full'>
                    <p className='text-white text-[18px] leading-[20.68px]'>ELEVATING</p>
                    <h1 className='text-white font-[500] text-[52px]'>IT Service Industry with Digital Skills
                        Development
                    </h1>
                    <p className='font-[400] text-[16px] text-white leading-[28px]'>Bulipe Tech as a visionary agent collaborates with its parent companies from the USA and UK to bring forth a far-reaching Digital Skills Development project for the ever-changing workforce of Bangladesh.</p>
                    <div className='flex flex-row gap-4'>
                        <button className='rounded-[24px] h-[38px] w-[127px] mt-8 p-0 bg-[#F15B2D]'>Enroll now</button>
                        <button className='rounded-[24px] h-[38px] w-[127px] mt-8 p-0 border'>SignUp</button>
                    </div>
                </div>
                <div className='ml-auto md:w-1/2 sm:w-full '>
                    <img className='w-[470px] h-[462px] mt-[67px] ml-[100px]' src={enrollPortionLogo} alt="" />
                </div>

            </div>
            <div className='w-full md:ml-[80px] sm:ml-[150px]'><CourseCard></CourseCard></div>
        </div >
    )
}

export default EnrollPortion