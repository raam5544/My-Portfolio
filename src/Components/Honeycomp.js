import React from 'react'
import './Honeycomp.css'

function Honeycomp() {
    const rows = 3; // Number of rows in the honeycomb grid
    const cols = 3; // Number of columns in the honeycomb grid

    // Generate the honeycomb cells
    const renderCells = () => {
        const cells = [];
        const images =['./home.png','./1663653933402.jpg','./1663653933402.jpg']
        let count = 0;
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
                            <img className="image" src={images[count]} alt="Honeycomb Image" />

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
