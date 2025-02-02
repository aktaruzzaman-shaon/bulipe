import React from 'react'
import EnrollPortion from './enrollPortion/enrollPortion'
import Navbar from './navbar/Navbar'
import WeDoPortion from '../wedo/WeDoPortion'
import HowWorks from '../howWorks/howWorks'

const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <EnrollPortion></EnrollPortion>
            <WeDoPortion></WeDoPortion>
            <HowWorks></HowWorks>
        </div>
    )
}

export default Home