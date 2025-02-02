import React from 'react'
import EnrollPortion from './enrollPortion/enrollPortion'
import Navbar from './navbar/Navbar'
import WeDoPortion from '../wedo/WeDoPortion'

const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <EnrollPortion></EnrollPortion>
            <WeDoPortion></WeDoPortion>
        </div>
    )
}

export default Home