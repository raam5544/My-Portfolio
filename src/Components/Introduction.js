import React, { useState } from 'react'
import './Introduction.css'
import {useTypewriter,Cursor} from 'react-simple-typewriter'


function Introduction() {
            const name_text = "I'm Raamakrishnan Jeyaraman";
            const arr_name = Array.from(name_text);
            const title = "Trainee Full Stack Developer";
            const arr_title = Array.from(title);
            const para = "With a strong background in both front-end and back-end development, I am equipped to create seamless, scalable, and responsive web applications that provide a fantastic user experience. From building dynamic UIs to managing server-side logic and databases, I handle every layer of the development process";
            const [more, setMore] = useState(true);
            const [text] = useTypewriter({
                words: ['Trainee Full Stack Developer', 'React JS Developer', 'MERN Stack Developer'],
                loop: 0,
                typeSpeed: 70,
                deleteSpeed: 50,
                delaySpeed: 1000
            });

            function clickMore() {
                setMore(!more);
            }

            return (
                <div className="introContParent">
                    <div className="introContainer">
                        <div className="hello-world">Hello, World!</div>
                        {arr_name.map((e, index) => (
                            <div
                                className="introBody"
                                key={index}
                                style={{ animationDelay: `${index * 0.04}s` }}
                            >
                                {e === " " ? <span>&nbsp;</span> : e}
                            </div>
                        ))}
                    </div>
                    
                    <div className="introContainer">
                        {/* {arr_title.map((e, index) => (
                            <div
                                className="titleBody"
                                key={index}
                                style={{ animationDelay: `${index * 0.04}s` }}
                            >
                                {e === " " ? <span>&nbsp;</span> : e}
                            </div>
                        ))} */}
                        <div className="titleBody">
                            {text}
                            <Cursor cursorColor='red' />
                        </div>
                    </div>

                    <div className={`para ${more ? 'hidden' : ''}`}>
                        {para}
                    </div>

                    <div>
                        <button className="btnClickMore" onClick={clickMore}>
                            {more ? 'More' : 'Hide'}
                        </button>
                    </div>
                </div>
            );
        }

export default Introduction
