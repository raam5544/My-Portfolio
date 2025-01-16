import React from 'react'
import './Landingpage.css'
import Introduction from '../Components/Introduction'
import Honeycomp from '../Components/Honeycomp'
import Footer from '../Components/Footer'

function Landingpage() {
    return (
        <div className='landingBody'>
            <div className='introDiv'>
                <div><Introduction /></div>
                <div><Honeycomp /></div>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default Landingpage
