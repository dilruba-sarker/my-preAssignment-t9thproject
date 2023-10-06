import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
    const {createUser}=useContext(AuthContext)

const handleSignIn=e=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    const  name=e.target. name.value;
    const  photo=e.target. photo.value;

    if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/.test(password)) {
       alert("Password must have at least one Uppercase Character.");
    }
  

    e.target.reset('')
    console.log(password,email, name,photo);
    createUser(email,password)
    .then((res)=>{console.log(res.user);})
    .catch((err)=>console.log(err.message))
    
}

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} >
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
                  <span className="label-text">Name</span>
                </label>
                <input type="text"
                name='name'
                 placeholder="name" 
                 className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text"
                name='photo'
                 placeholder="Photo Url" 
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
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
            <p className='text-center mt-4 text-blue-900 font-bold'>ALREADY have account ?Plz <Link to={"/login"}> Logi</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;