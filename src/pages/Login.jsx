import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import SocialLogin from './SocialLogin';

const Login = () => {
    const {signIn}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
const handleLogin=e=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(password,email);
    signIn(password,email)
  .then((res)=>{console.log(res.user);})
  navigate(location?.state? location.state  :"/")
    .catch((err)=>console.log(err.message))
  

    
}

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                name='email'
                 placeholder="email" 
                 className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" 
                name='password'
        
                placeholder="password" 
                className="input input-bordered" 
                 />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <SocialLogin></SocialLogin>
            </div>
            <p className='text-center mt-4 text-blue-900 font-bold'>don have account ?Plz <Link to={"/register"}> register</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;