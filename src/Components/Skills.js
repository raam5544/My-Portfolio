import React from 'react';
import './Skills.css';

function Skills() {
    const skills = [
        { name: 'HTML', level: 'Intermediate' },
        { name: 'CSS', level: 'Intermediate' },
        { name: 'JAVA', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Express.js', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
    ];
    return (
        <div className="skillsContainer">
            {/* <h2>Skills</h2>  */}
            {skills.map((skill)=>
                <div key={skill.name} className="skill">
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                </div>
            )}
        </div>
    );
}

export default Skills;