import React from 'react'
import './QueryForm.css'

function QueryForm() {
    return (
        <div>
            <form>
                <label>Enter your name:
                    <input className="queryFormInp" type='text' />
                </label>
                <label>Phone Number:
                    <input type='text' className="queryFormInp" />
                </label>
                <label>Email ID:
                    <input type='text' className="queryFormInp" />
                </label>
            </form>
        </div>
    )
}

export default QueryForm
