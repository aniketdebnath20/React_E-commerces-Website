import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>

            <div className='Error-Container'>

                <h2>Look like you come to wrong page</h2>
                <p>Lets's get you back</p>
                
                <Link to="/">
                    <button>Home Page</button>
                </Link>
            </div>
        </>
    )
}

export default Error
