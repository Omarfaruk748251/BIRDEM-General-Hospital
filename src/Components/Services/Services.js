import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import aboutImg from '../../aboutimg.jpg';

const Services = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h5>Neurology is a branch of medicine dealing with disorders of the nervous system. Neurology deals with the diagnosis and treatment of all categories of conditions and disease involving the central and peripheral nervous systems, including their coverings, blood vessels, and all effector tissue, such as muscle.</h5>
            <img src={aboutImg} className="aboutImg" alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Services;