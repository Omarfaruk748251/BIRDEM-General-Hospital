import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='background-banner'>
            <div className="row mx-auto">
                <div className="col-lg-6 frist-col">
                    <h5 className='banner-name'>BIRDEM</h5>
                    <h1 className='banner-title'>Give you The Best We Have</h1>
                    <p className='py-2 fs-5 fw-normal'>BIRDEM, the Bangladesh Institute of Research and Rehabilitation in Diabetes, Endocrine and Metabolic Disorders at Shahbag, Dhaka, Bangladesh, is a 600-bed multidisciplinary hospital complex of the Diabetic Association of Bangladesh.</p>
                    <button className='btn-More'>To know Us</button>
                </div>
                <div className="col-lg-6">

                </div>
            </div>
        </div>
    );
};

export default Banner;