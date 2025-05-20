import React from 'react';
import './Portfolio.css';

function Portfolio() {
    const skills = [
        { name: 'E-Commerce Website', description: 'Implemented My daily tasks planner web application with \n JWT authentication | CRUD To-Dos \nUsed: React Js, Node with Express Js, MongoDB, (MERN)', symbol: '../authpage.png' },

        { name: 'DOM Based Game', description: 'Developed an interactive game using JavaScript DOM manipulation, HTML and CSS to create dynamic elements, user interaction, and engaging visual effects',symbol: '../domGame.png' },
        { name: 'Personal Website', description: 'Created my Portfolio website Used: React JS, TailWind CSS, and JavaScript',symbol: '../portfolio.png' },
        { name: 'Python', level: 'Intermediate',symbol: '../authpage.png' }
    ];
    return (
        <div className="portfolioContainer">
            <h2>Portfolio</h2> 
            <div className="portfolioGrid">
            {skills.map((skill)=>
                <div key={skill.name} className="portfolio">
                    <h3>{skill.name}</h3>
                    <img src={skill.symbol} alt={skill.name} />
                    <p>{skill.description}</p>
                </div>
            )}
            </div>
        </div>
    );
}

export default Portfolio;