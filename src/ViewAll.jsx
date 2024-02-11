import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import axios from 'axios';
import './global.css'
import { NavLink } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineReadMore } from "react-icons/md";
const ViewAll = () => {
    let [student, setStudent] = useState([])

    let getApi = async () => {
        // handling promises using async and await
        let { data } = await axios.get('http://localhost:5000/student')
        setStudent(data)

        // after resolving promise we get the object
    }
    console.log(student);
    useEffect(() => {
        try {
            getApi()
        }
        catch (e) {
            console.log(e);
        }
    }, [])
    
    // deleting

    let delete_id=(id)=>{
        console.log(id);
        axios.delete('http://localhost:5000/student/'+id)
        window.location.assign('/viewall')
    }
    // deleting
    return (
        <>
            <NavBar />
            <h1 id='info'>Information of all the students</h1>
            <table>
                <thead>
                    <tr>
                        <th>Server Id</th>
                        {/* generated by the server */}
                        <th>Name</th>
                        <th>Email</th>
                        <th colSpan={3}>More Options</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((x) => {
                        console.log(x);
                        return (
                            <tr key={x.id} className='viewAll'>
                                <td>{x.id}</td>
                                <td>{x.username} </td>
                                <td>{x.useremail}</td>
                                <td>
                                <NavLink to={`/more/${x.id}`}>
                                
                                    <button id='more' title='view more'>

                                        <MdOutlineReadMore /></button>
                                
                                {/* navigate to view single student component */}
                                </NavLink>
                                </td>
                                <td>
                                    <NavLink to={`/edit/${x.id}`}>
                                        <button id='edit' title='edit'>
                                        
                                            <FiEdit /> </button>
                                    </NavLink>
                                </td>
                                <td>
                                    <button onClick={()=>delete_id(x.id)} id='delete' title='delete'>
                                    <MdDeleteOutline/></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ViewAll