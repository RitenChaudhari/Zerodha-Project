import React from 'react'

function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center mt-5 p-5">
                <h1>Technology</h1>
                <h4 className='text-muted mt-3 fs-4'>Sleek, modern and intuitive trading platform</h4>
                <p className='mt-3'>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings <i className="fa fa-long-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;