import React from 'react';
import './Skills.css';

function Portfolio() {
    const skills = [
        { name: 'HTML', level: 'Intermediate',symbol: 'html5'},
        { name: 'CSS', level: 'Intermediate',symbol: 'css3' },
        { name: 'Java', level: 'Intermediate',symbol: 'java' },
        { name: 'Python', level: 'Intermediate',symbol: 'python' },
        { name: 'JavaScript', level: 'Intermediate',symbol: 'javaScript' },
        { name: 'React', level: 'Intermediate',symbol: 'react' },
        { name: 'Node.js', level: 'Intermediate',symbol: 'nodejs' },
        { name: 'Express.js', level: 'Intermediate',symbol: 'express' },
        { name: 'MongoDB', level: 'Intermediate',symbol: 'mongodb' },
        { name: 'GitHub', level: 'Intermediate',symbol: 'github' }
    ];
    return (
        <div className="skillsContainer">
            <h2>Skills</h2> 
            <div className="skillsGrid">
            {skills.map((skill)=>
                <div key={skill.name} className="skill">
                    {/* <h3>{skill.name}</h3> */}
                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.symbol}/${skill.symbol}-original-wordmark.svg`} alt={skill.name} />
                    {/* <p>{skill.level}</p> */}
                </div>
            )}
            </div>
        </div>
    );
}

export default Portfolio;