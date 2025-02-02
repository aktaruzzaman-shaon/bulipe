import React from 'react'
import wedo from "../../assets/wedo/Img.png"
const WeDoPortion = () => {
    return (
        <div className=' lg:w-[1170px] lg:w-[435px] mx-auto flex flex-row md:h-[435px] sm:h-auto'>
            <div className='w-1/3 p-[32px] bg-[#A6E2E2]'>
                <p className='font[500] text-[24px]'>Bulipe Tech is a dynamic and innovative company</p>
                <p className='text-[12px] font-[400]'>We empower individuals to unlock career opportunities through our proven Digital Skill Development program. Partnering with 300 local organisations and 3,000+ global partners in 21 countries, we provide access to top U.S. certifications and .</p>
                <button className='rounded-[24px] h-[38px] w-[127px] mt-8 bg-[#F15B2D]'>Enroll now</button>
            </div>
            <div className="w-2/3">
                <img src={wedo} alt="" className='object-cover h-[435px]' />
            </div>
        </div>
    )
}

export default WeDoPortion