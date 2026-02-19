import React from 'react'

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container border-top">
            <div className="row">
                <div className="col-5 p-2">
                    <img src={imageURL} alt="Image"/>
                </div>

                <div className='col-1'></div>

                <div className="col-5 mt-5">
                    <h1>{productName}</h1>
                    <p className='mt-4'>{productDescription}</p>

                    <div>
                        {tryDemo && <a href={tryDemo} style={{textDecoration:"none"}}>{tryDemo} <i className="fa fa-long-arrow-right"></i></a>}
                        {learnMore &&<a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>{learnMore} <i className="fa fa-long-arrow-right"></i></a>}
                    </div>

                    <div className='mt-3'>
                        <a href={googlePlay} >
                            <img src="images/googlePlayBadge.svg" alt="google play badge" />
                        </a>
                        <a href={appStore}>
                            <img src="images/appstoreBadge.svg" alt="app store badge" style={{marginLeft:"50px"}}/>
                        </a>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default LeftSection;