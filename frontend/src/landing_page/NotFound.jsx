import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-4'>404 Page Not Found</h1>
                <p className='text-muted mt-3 mb-4'>Sorry, The page you are looking for does not exist. </p>
                <Link to="/"><button className='btn btn-primary mt-3'>Take Me to Home Page</button></Link>
            </div>
        </div>
     );
}

export default NotFound;