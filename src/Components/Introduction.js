import React, { useState } from 'react'
import './Introduction.css'


function Introduction() {
    let name_text = "Hi,\t\t I'm \Raamakrishnan \t\tJeyaraman \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFront End Developer"
    let arr_name = Array.from(name_text)
    let title = "Front End Developer"
    let arr_title = Array.from(title)
    let para = "With a strong background in both front-end and \t\t\t\tback-end development, I am equipped to create seamless, scalable, and responsive web applications that provide a fantastic user experience. From building dynamic UIs to managing server-side logic and databases, I handle every layer of the development process"
    const [more, setMore] = useState(true)
    let arr_para = Array.from(para)
    function clickMore() {
        setMore(!more)
    }
    return (
        <div className='introContParent'>

            <div className='introContainer'>
                <div class="letter-by-letter">Hello, World!</div>
                {arr_name.map((e, index) => {
                    return (
                        <div className='introBody' key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            {e}
                        </div>
                    );
                })}
            </div>

            <div className='introContainer'>
                {arr_title.map((e, index) => {
                    return (
                        <div className='introBody' key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            {e}
                        </div>
                    );
                })}
            </div>
            {/* <div className='introContainer'>
                {arr_para.map((e, index) => {
                    return (
                        <h6 className='introBody' key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            {e}
                        </h6>
                    );
                })}
            </div> */}
            <div>{more ? null : para}</div>
            <div className='btnClickMoreParent'>
                <button className='btnClickMore' onClick={clickMore}>{more ? 'More' : 'Hide'}</button>
            </div>
        </div>
    );
}

export default Introduction
