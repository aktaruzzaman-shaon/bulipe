import React from 'react'
import logo from '../../../assets/header/navbar/Logo.png'
import Button from '../../../utils/Button'

const Navbar = () => {
    const navItems = ["Home", "About Us", "Programs", "Location", "Career and progress", "Contact Us"]
    return (
        <div >
            <nav className='flex flex-row bg-[#F2F2F2] px-[50px]' relative>
                <div><img src={logo} alt="company logo" /></div>
                <ul className='mt-9 mx-auto md:block hidden'>
                    {
                        navItems.map((navItem, index) => <button className='btn mx-2 text-[#004464] font-[500] text-[14px]' key={index}>{navItem}</button>)
                    }
                </ul>

                <div className='ml-auto mr-[30px]'>
                    <button className='rounded-[24px] h-[38px] w-[127px] mt-8 p-0 bg-[#F15B2D]'>SignUp</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


