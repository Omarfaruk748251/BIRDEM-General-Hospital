import React from 'react';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div>
            <div className='text-center chooseUS-section'>
                <h4 className='choose-text'>Why We Are Best</h4>
                <h1>Providing Care For The Sickest</h1>
            </div>
            <div className="row w-100 container mx-auto pb-5 gy-3">
                <div className="col-lg-4">
                    <div className='choose-card'>
                        <span><i class="fas fa-user-md card-icon"></i></span>
                        <h4 className='card-title'>Qualified Doctors</h4>
                        <p className='card-desc'>Bangladesh Diabetic Association (then named Diabetic Association for Pakistan) was formed in February 1956. Bangladesh Diabetic Association are nine separate organizations. These are the BIRDEM (Bangladesh Institute of Research and Rehabilitation in Diabetes, Endocrine and Metabolic Disorders), Rehabilitation and Vocational Training Center, National Healthcare Network, Ibrahim Cardiac Hospital and Research Center</p>
                        <button className='btn-view'>View Details <span><i class="fas fa-arrow-right ms-1 fs-6 mt-2"></i></span></button>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className='choose-card'>
                        <span><i class="fas fa-user-md card-icon"></i></span>
                        <h4 className='card-title'>Neurology Examination</h4>
                        <p className='card-desc'>Bangladesh Diabetic Association (then named Diabetic Association for Pakistan) was formed in February 1956. Bangladesh Diabetic Association are nine separate organizations. These are the BIRDEM (Bangladesh Institute of Research and Rehabilitation in Diabetes, Endocrine and Metabolic Disorders), Rehabilitation and Vocational Training Center, National Healthcare Network, Ibrahim Cardiac Hospital and Research Center</p>
                        <button className='btn-view'>View Details <span><i class="fas fa-arrow-right ms-1 fs-6 mt-2"></i></span></button>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className='choose-card'>
                        <span><i class="fas fa-user-md card-icon"></i></span>
                        <h4 className='card-title'>Neurology Specialist</h4>
                        <p className='card-desc'>Bangladesh Diabetic Association (then named Diabetic Association for Pakistan) was formed in February 1956. Bangladesh Diabetic Association are nine separate organizations. These are the BIRDEM (Bangladesh Institute of Research and Rehabilitation in Diabetes, Endocrine and Metabolic Disorders), Rehabilitation and Vocational Training Center, National Healthcare Network, Ibrahim Cardiac Hospital and Research Center</p>
                        <button className='btn-view'>View Details <span><i class="fas fa-arrow-right ms-1 fs-6 mt-2"></i></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;