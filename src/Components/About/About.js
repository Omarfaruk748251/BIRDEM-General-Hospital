import React from 'react';
import './About.css';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import aboutImg from '../../aboutimg.jpg';


const About = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div>
                <h5>Neurology is a branch of medicine dealing with disorders of the nervous system. Neurology deals with the diagnosis and treatment of all categories of conditions and disease involving the central and peripheral nervous systems, including their coverings, blood vessels, and all effector tissue, such as muscle.</h5>
                <img src={aboutImg} className="aboutImg" alt="" />
                <hr />
                <div>
                    <h1>WHY YOU SHOULD CHOICE US ! </h1>
                    <p>Develop a more strategic, effective, consistent and/or cohesive approach to marketing their business.
                        Increase the return on investment they are receiving from their marketing efforts.
                        Alleviate the burden of managing their marketing and advertising on their own.</p>
                    <div className="row">

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;