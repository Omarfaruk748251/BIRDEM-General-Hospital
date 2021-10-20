import React from 'react';
import { useParams } from 'react-router';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { servicId } = useParams();
    const [servicsDetails, setServicsDetails] = useState({});
    const { img, name } = servicsDetails;
    useEffect(() => {
        const url = `https://raw.githubusercontent.com/Programming-Hero-Web-Course3/healthcare-related-website-Mehedi-irfan/main/public/services.json?token=AUVRIAF2ZW2YNN2MWELV6JLBNZY5S#0${servicId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServicsDetails(data[0]))
    }, [])

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className='container mx-auto d-flex justify-content-center align-items-center serviceDetails-container'>
                <div className='w-100'>
                    <img src={img} className='serviceDetails-img' alt="" />
                </div>
                <div className='w-100 detailsContainer-info'>
                    <h1>{name}</h1>
                    <p>BIRDEM, the Bangladesh Institute of Research and Rehabilitation in Diabetes, Endocrine and Metabolic Disorders at Shahbag, Dhaka, Bangladesh, is a 600-bed multidisciplinary hospital complex of the Diabetic Association of Bangladesh. The hospital was established in 1980 with the financial support of Bangladesh.[1] In BIRDEM, 3,000 patients are treated in the Out Patients Department (OPD) every day. No other hospital in Bangladesh serves so many diabetes patients. According to the Denmark-based multinational pharmaceutical company Novo Nordics Vice President of the Pacific Ocean, Selvam Afsar Tuna, This is the world's largest hospital in treating diabetes. It has been designated as a WHO Collaborating Centre on Diabetes, Endocrine and Metabolic Disorders, as the only one of its kind in Asia.</p>
                    <button className='btn-appointment'>Appoinment Now <span><i class="far fa-arrow-alt-circle-right"></i></span></button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;