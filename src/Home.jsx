import React, { useState } from 'react'
import NavBar from './NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



const Home = () => {
    let [state, setState] = useState({
        username: '',
        useremail: '',
    })

    let { username, useremail } = state
    // we are destructuring the object

    let navigate = useNavigate()

    let handleInput = (e) => {
        let { name, value } = e.target
        // two properties in synthetic event "name and value"
        // we have to storethe data in form of key value format

        setState({ ...state, [name]: value })
        // to access thevalue we have to take in aray
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(state);
        try {
            if (username === "" && useremail === "") {
                alert('please fill the data')
            }
            else if (username === "") {
                alert('please fill the username')
            }
            else if (useremail === ""){
                alert('please fill the useremail')
            }
            else {

                let payload = { username, useremail }
                // store data enter by user
                axios.post("http://localhost:5000/student", payload)
                navigate('/viewall')
                toast.success('Successfully Added')
                // sending data to this path
            }

        }
        catch (e) {
            console.log(e);
        }
        finally {
            setState({
                username: '',
                useremail: '',
            })
        }

    }


    return (
        <>
            <NavBar />
            <form onSubmit={handleSubmit} className='container'>
                <legend>Add Student</legend>
                <div>
                    <input type="text" placeholder='Enter Student Name' value={username} onChange={handleInput} name='username' />
                </div>
                <div>
                    <input type="email" placeholder='Enter Email' value={useremail} onChange={handleInput} name='useremail' />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Home
