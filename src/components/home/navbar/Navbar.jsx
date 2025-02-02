import React from 'react'
import logo from '../../../assets/header/navbar/Logo.png'
import Button from '../../../utils/Button'

const Navbar = () => {
    const navItems = ["Home", "About Us", "Programs", "Location", "Career and progress", "Contact Us"]
    return (
        <div>
            <nav className='flex flex-row bg-[#F2F2F2]'>
                <div><img src={logo} alt="company logo" /></div>
                <ul className='mt-9 mx-auto '>
                    {
                        navItems.map((navItem, index) => <button className='btn mx-2 text-[#004464] font-[500] text-[14px]' key={index}>{navItem}</button>)
                    }
                </ul>
                <div className=' mr-[30px]'>
                    <button className='rounded-[24px] h-[38px] w-[127px] mt-8 p-0 bg-[#F15B2D]'>SignUp</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Responsive Navbar</title>
//     <script src="https://cdn.tailwindcss.com"></script>
// </head>
// <body class="bg-gray-100">

//     <!-- Navbar -->
//     <nav class="bg-white shadow-md fixed w-full top-0 left-0 z-50">
//         <div class="container mx-auto px-4 md:px-8">
//             <div class="flex justify-between items-center py-4">
//                 <!-- Logo -->
//                 <a href="#" class="text-2xl font-bold text-blue-600">Brand</a>

//                 <!-- Desktop Menu -->
//                 <ul class="hidden md:flex space-x-6">
//                     <li><a href="#" class="text-gray-700 hover:text-blue-600">Home</a></li>
//                     <li><a href="#" class="text-gray-700 hover:text-blue-600">About</a></li>
//                     <li><a href="#" class="text-gray-700 hover:text-blue-600">Services</a></li>
//                     <li><a href="#" class="text-gray-700 hover:text-blue-600">Contact</a></li>
//                 </ul>

//                 <!-- Mobile Menu Button -->
//                 <button id="menu-toggle" class="md:hidden text-gray-700">
//                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
//                     </svg>
//                 </button>
//             </div>

//             <!-- Mobile Menu (Hidden by default) -->
//             <div id="mobile-menu" class="hidden md:hidden">
//                 <ul class="flex flex-col space-y-4 bg-white py-4 px-6 border-t">
//                     <li><a href="#" class="block text-gray-700 hover:text-blue-600">Home</a></li>
//                     <li><a href="#" class="block text-gray-700 hover:text-blue-600">About</a></li>
//                     <li><a href="#" class="block text-gray-700 hover:text-blue-600">Services</a></li>
//                     <li><a href="#" class="block text-gray-700 hover:text-blue-600">Contact</a></li>
//                 </ul>
//             </div>
//         </div>
//     </nav>

//     <!-- JavaScript for Mobile Menu Toggle -->
//     <script>
//         const menuToggle = document.getElementById('menu-toggle');
//         const mobileMenu = document.getElementById('mobile-menu');

//         menuToggle.addEventListener('click', () => {
//             mobileMenu.classList.toggle('hidden');
//         });
//     </script>

// </body>
// </html>
