import React from 'react'
import training from "../assets/howWorks/Group 47.png"

const WorkCard = (props) => {

    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4'>
            <div className='w-[340px] h-[520px] rounded-[30px] relative shadow-md mx-auto'>
                <img src={training} alt="" className='absolute w-[158px] lg:h-[163px] top-[-20px] left-[90px]' />
                <div className='pt-[150px] p-5'>
                    <p className='text-center font-[500] text-[24px]'>Training</p>
                    <p className='font[400] text-[16px]'>Our training programs, tailored to each subject matter and specialized courses, last at least 3 months and take place in our physical venues. Access to all course materials will be provided through the Bulipe App/repository, ensuring a comprehensive learning experience for all participants.</p>
                </div>
            </div>

            <div className='w-[340px] h-[520px] rounded-[30px] relative shadow-md mx-auto'>
                <img src={training} alt="" className='absolute w-[158px] lg:h-[163px] top-[-20px] left-[90px]' />
                <div className='pt-[150px] p-5'>
                    <p className='text-center font-[500] text-[24px]'>Training</p>
                    <p className='font[400] text-[16px]'>Our training programs, tailored to each subject matter and specialized courses, last at least 3 months and take place in our physical venues. Access to all course materials will be provided through the Bulipe App/repository, ensuring a comprehensive learning experience for all participants.</p>
                </div>
            </div>

            <div className='w-[340px] h-[520px] rounded-[30px] relative shadow-md mx-auto'>
                <img src={training} alt="" className='absolute w-[158px] lg:h-[163px] top-[-20px] left-[90px]' />
                <div className='pt-[150px] p-5'>
                    <p className='text-center font-[500] text-[24px]'>Training</p>
                    <p className='font[400] text-[16px]'>Our training programs, tailored to each subject matter and specialized courses, last at least 3 months and take place in our physical venues. Access to all course materials will be provided through the Bulipe App/repository, ensuring a comprehensive learning experience for all participants.</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard