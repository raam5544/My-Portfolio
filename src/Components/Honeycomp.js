import React from 'react'
import './Honeycomp.css'
import { Link } from 'react-router-dom';

function Honeycomp() {
    const rows = 3;
    const cols = 3;
    let count = 0;
    const images = [
        { pic: './about.jpg', txt: 'About Me' },
        { pic: './notepad.png', txt: 'Send Query' },
        { pic: './1663653933402.jpg', txt: '' },
        { pic: '/projects.png', txt: 'Project' },
        { pic: './contact.png', txt: 'Contacts' },
        { pic: './home.png', txt: 'Home' },
        { pic: './home.png', txt: 'Home' }
    ];

    const renderCells = () => {
        const cells = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if ((col === 0 && row === 0) || (col === 2 && row === 0)) {
                    continue;
                }
                const item = images[count];
                cells.push(
                    <Link to="/QueryForm" key={`${row}-${col}`}>
                        <div
                            className="honeycomb-cell"
                            style={{
                                transform: `translate(${col * 160}px, ${row * 140 + (col % 2 === 0 ? 0 : 70)}px)`
                            }}
                        >
                            <img
                                className="honeycomb-image"
                                src={item.pic}
                                alt={item.txt || "Honeycomb"}
                                title={item.txt}
                            />
                            {item.txt && <div className="honeycomb-label">{item.txt}</div>}
                        </div>
                    </Link>
                );
                count++;
            }
        }
        return cells;
    };

    return <div className="honeycomb-container">{renderCells()}</div>;
}

export default Honeycomp;
