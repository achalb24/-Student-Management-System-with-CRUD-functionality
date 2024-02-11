import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ViewSingleStudent = () => {

    let [student,setStudent]=useState('')
    let navigate=useNavigate()

    let {id}=useParams()
    console.log(id);
    // using this we can access the parameter by destructuring

    let getApi=async()=>{
        let {data}=await axios.get('http://localhost:5000/student/'+id)
        setStudent(data)
    }
    console.log(student);

    useEffect(()=>{
        try{
            getApi()
        }
        catch(e){
            console.log(e);
        }
    },[])

    let gohome=()=>{
        navigate('/')
    }

    let goback=()=>{
        navigate(-1)
    }
    return (
    <>
    <section className='view'>
        <h3 id='name'>Student Name:{student.username}</h3>
        <h3 id='mail'>Email:{student.useremail} </h3>
        <h3 id='sid'>Id: {student.id}</h3>
        <span>
            <button onClick={gohome}>Home Page</button>
            <button onClick={goback}>Go Back</button>
        </span>
    </section>
    </>
  )
}

export default ViewSingleStudent

