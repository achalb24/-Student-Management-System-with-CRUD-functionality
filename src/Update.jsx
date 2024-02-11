import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';


const Update = () => {
    let [state, setState] = useState({
        username: '',
        useremail: '',
    })

    let { username, useremail } = state
    // we are destructuring the object

    let navigate = useNavigate()

    let {id}=useParams()
    console.log(id);

    let getApi=async()=>{
        let {data}=await axios.get("http://localhost:5000/student/"+id)
        setState(data);
    }

    // fetching student info
    useEffect(()=>{
        try{
            getApi()
        }
        catch(e){
            console.log(e);
        }
    },[])
    // fetching student info

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
                axios.put("http://localhost:5000/student/"+id, payload)
                navigate('/viewall')
                toast.success('Successfully Updated')
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
            <form onSubmit={handleSubmit} className='formContainer'>
                <legend>Update Student</legend>
                <div className='inputField'>
                    <input type="text" placeholder='Enter Student Name' value={username} onChange={handleInput} name='username' />
                </div>
                <div className='inputField'>
                    <input type="email" placeholder='Enter Email' value={useremail} onChange={handleInput} name='useremail' />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}


export default Update
