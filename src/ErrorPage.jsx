import React from 'react'
import NavBar from './NavBar';
import { TbFaceIdError } from "react-icons/tb";

const ErrorPage = () => {
    return (
        <>
           <NavBar/>
            <h1>Oops!</h1>
            <h2>404 Page not Found <span><TbFaceIdError className='error' /></span></h2>
            <p>This page doesn’t exist.
                If this is a mistake, let us know, and we will try to fix it!</p>
        </>
    )
}

export default ErrorPage

