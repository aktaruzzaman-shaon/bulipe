import React from 'react'
import courseIcon1 from "../../../assets/course/icon_05.png"

const CourseCard = (props) => {

    return (
        <div className='absolute grid md:grid-cols-3 sm:grid-cols-1 gap-4 md:top-[530px] gap-10 mx-auto mt-[50px]'>
            {/* first course */}
            <div className='w-[370px] h-[359px] bg-white shadow drop-shadow-md mt-[30px] rounded-[20px] flex flex-row'>
                <div className='relative'>
                    {/* couse card icon */}l
                    <div className="rounded-full absolute left-[110px] top-[-70px] h-[141px] w-[141px] bg-[#004464]">
                        <div className='relative'>
                            <div className='absolute top-[10px] left-[10px] border rounded-full border-white h-[120px] w-[120px]'>
                                <img src={courseIcon1} alt="courseIcon1" className='h-[84] w-[84px] mt-4 ml-4' />
                            </div>
                        </div>
                    </div>
                    {/* couse card content */}
                    <div className='w-[307px] h-[239px] pt-[100px]'>
                        <p className=''>Master In-Demand Digital Skills to Advance Your Career</p>
                        <p className='font-[400] text-[16px] text-[#848484] leading[28px]'>Unlock career opportunities through our industry-recognized Digital Skill Development program. Begin your journey today with 300 local partners to stay ahead of the curve!</p>
                    </div>
                </div>
            </div>
            {/* second course */}
            <div className='w-[370px] h-[359px] bg-white shadow drop-shadow-md mt-[30px] rounded-[20px] flex flex-row'>
                <div className='relative'>
                    {/* couse card icon */}l
                    <div className="rounded-full absolute left-[110px] top-[-70px] h-[141px] w-[141px] bg-[#004464]">
                        <div className='relative'>
                            <div className='absolute top-[10px] left-[10px] border rounded-full border-white h-[120px] w-[120px]'>
                                <img src={courseIcon1} alt="courseIcon1" className='h-[84] w-[84px] mt-4 ml-4' />
                            </div>
                        </div>
                    </div>
                    {/* couse card content */}
                    <div className='w-[307px] h-[239px] pt-[100px]'>
                        <p className=''>Master In-Demand Digital Skills to Advance Your Career</p>
                        <p className='font-[400] text-[16px] text-[#848484] leading[28px]'>Unlock career opportunities through our industry-recognized Digital Skill Development program. Begin your journey today with 300 local partners to stay ahead of the curve!</p>
                    </div>
                </div>
            </div>
            {/* third course */}
            <div className='w-[370px] h-[359px] bg-white shadow drop-shadow-md mt-[30px] rounded-[20px] flex flex-row'>
                <div className='relative'>
                    {/* couse card icon */}l
                    <div className="rounded-full absolute left-[110px] top-[-70px] h-[141px] w-[141px] bg-[#004464]">
                        <div className='relative'>
                            <div className='absolute top-[10px] left-[10px] border rounded-full border-white h-[120px] w-[120px]'>
                                <img src={courseIcon1} alt="courseIcon1" className='h-[84] w-[84px] mt-4 ml-4' />
                            </div>
                        </div>
                    </div>
                    {/* couse card content */}
                    <div className='w-[307px] h-[239px] pt-[100px]'>
                        <p className=''>Master In-Demand Digital Skills to Advance Your Career</p>
                        <p className='font-[400] text-[16px] text-[#848484] leading[28px]'>Unlock career opportunities through our industry-recognized Digital Skill Development program. Begin your journey today with 300 local partners to stay ahead of the curve!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard