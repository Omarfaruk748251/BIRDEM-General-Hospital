import React from 'react';
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useAuth from '../Hooks/UseAuth';
import './SignIn.css';

const SignIn = () => {
    const {user, signInUsingGoogle} = useAuth();
    console.log(user)
    return (
        <div>
            <Header></Header>
            <div className='my-5 text-center w-50 mx-auto signIn-container'>
            <h1 className="signIn-text pb-5">Please Sign In</h1>
            <form  onSubmit=''>
                <input className='form-control input-item' type="email" name="" placeholder='Enter Your Email' id="" />
                <br />
                <input className='form-control input-item' type="password" name="" placeholder='Enter Your Password' id="" />
                <br />
                <input className='form-control btn-submit' type="submit" value="Sign In" />
            </form>
            <div className='pt-5'>
                <h5>New To Our Website? <Link to='/register'>Create Account</Link> </h5>
            </div>
            <div><h3 className='text-warning py-3'>-------------- or ---------------</h3></div>
            <button onClick={signInUsingGoogle} className='btn-submit form-control mt-3'><i class="fab fa-google-plus-g"></i> <span>Google Sign In</span></button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignIn;