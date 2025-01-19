import React from 'react'
import './QueryForm.css'
import { useFormAction } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function QueryForm() {

    const { register, handleSubmit, formState: { Errors } } = useForm()
    const onSubmit = async (data) => {
        const response = await fetch("/Q", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} action='/Q' method='GET'>
                <label>Enter your name:
                    <input className="queryFormInp" type='text' placeholder='Enter Name' required name='name' {...register('name')} />
                </label>
                <label>Phone Number:
                    <input type="tel" className="queryFormInp" required placeholder='Enter Phone Number' name='phnNum' {...register('phnNum')} />
                </label>
                <label>Email ID:
                    <input className="queryFormInp" type="email" required placeholder='Enter Email ID' name='email' {...register('email')} />
                </label>
                <label>Query:
                    <textarea className="queryFormInp" type="textArea" required placeholder='Enter your query here' rows="10" cols="80" name='query' {...register('query')}> </textarea>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default QueryForm
