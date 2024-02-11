import React from 'react'
import { useState } from 'react';
import './reg.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
const RegistrationForm = () => {

    let [state, setState] = useState({
        username: '',
        useremail: '',
        gender: '', password: ""
    })

    let { username, useremail, gender, password } = state;

    let [hobby, setHobby] = useState([])

    let handlechange = (e) => {
        console.log(e);
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(state);
        console.log(hobby);
    }
    let handleCheckbox = (e) => {
        setHobby([...hobby, e.target.value])
    }

    return (
        <>
            <h2>Registration Form</h2>
                <form onSubmit={handleSubmit} className='form-container'>
                    <div  className='form-input'>
                        <label htmlFor=""><FaUser className='icons' /></label>
                        <input type="text" placeholder='Enter Username' name='username'
                            value={username} onChange={handlechange} />
                    </div>

                    <div className='form-input'>
                        <label htmlFor=""><MdEmail    className='icons' /></label>
                        <input type="email" placeholder='Enter Email' value={useremail} name='useremail' onChange={handlechange} />
                    </div>

                    <div className='form-input'>
                        <label htmlFor=""><RiLockPasswordFill className='icons' /></label>
                        <input type="password" placeholder='Enter Password' name='password' value={password} onChange={handlechange} />
                    </div>

                    <div value={gender} onChange={handlechange} className='gender-hobbies'>
                        <label>Gender</label>
                        <input type="radio" name='gender' value='Female' />Female
                        <input type="radio" name='gender' value='Male' />Male
                        <input type="radio" name='gender' value='Others' />Others
                    </div>

                    <div value={hobby} onChange={handleCheckbox} className='gender-hobbies'>
                        <label htmlFor="">Hobbies</label>
                        <input type="checkbox" value='Reading' /> Reading
                        <input type="checkbox" value='Dancing' /> Dancing
                        <input type="checkbox" value='Singing' /> Singing
                        <input type="checkbox" value='Travelling' /> Travelling
                    </div>
                    
                    <div>
                        <button type='submit'>Submit</button>
                    </div>

            </form>
        </>
    )
}

export default RegistrationForm



