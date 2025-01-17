import React from 'react'
import './Honeycomp.css'

function Honeycomp() {
    const rows = 3; // Number of rows in the honeycomb grid
    const cols = 3; // Number of columns in the honeycomb grid
    let count = 0;
    const images = [{ pic: './about.jpg', txt: 'About Me' }, { pic: './notepad.png', txt: 'Send Query' }, { pic: './1663653933402.jpg', txt: '' }, { pic: '/projects.png', txt: 'Project' }, { pic: './contact.png', txt: 'Contacts' }, { pic: './home.png', txt: 'Home' }, { pic: './home.png', txt: 'Home' }]

    // Generate the honeycomb cells
    const renderCells = () => {
        const cells = [];

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (col == 0 && row == 0 || col == 2 && row == 0) {
                    continue
                }
                else {
                    cells.push(
                        <div
                            key={`${row}-${col}`}
                            className={`honeycomb-cell`}
                            style={{
                                transform: `translate(${col * 160}px, ${row * 180 + (col % 2 === 0 ? 0 : 90)}px)`
                            }}
                        >
                            <img className="image" src={images[count].pic} alt="Honeycomb Image" title={images[count].txt} />
                        </div>
                    );
                }
                count++
            }
        }
        return cells;
    };

    return (
        <div className="honeycomb-container">
            {renderCells()}
        </div>
    );
}

export default Honeycomp;
