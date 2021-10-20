import React from 'react';
import aboutImg from '../../aboutHome.jpg';
import './AboutUs.css';


const AboutUs = () => {
    return (
        <div className='row container mx-auto aboutUs d-flex justify-content-center align-items-center'>
            <div className="col-lg-6">
                <img src={aboutImg} className='aboutus-img w-100' alt="" />
            </div>
            <div className="col-lg-6">
                <h4 className='about-text'>About Us</h4>
                <h1 className='py-3 about-title'>we find the problem and solve it</h1>
                <p className='fs-5 fw-normal'>Neurologists are specialists who treat diseases of the brain and spinal cord, peripheral nerves and muscles. Neurological conditions include epilepsy, stroke, multiple sclerosis (MS) and Parkinson's disease.</p>
                <button className='btn-readMore'>Read More</button>
            </div>
        </div>
    );
};

export default AboutUs;