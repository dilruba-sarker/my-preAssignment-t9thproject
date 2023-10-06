import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SocialLogin = () => {

const {signGoo}=useContext(AuthContext)
const handleGoo=()=>{
    signGoo()
    .then((res)=>{console.log(res.user);})

      .catch((err)=>console.log(err.message))
    
}
    return (
        <div>
           <button  onClick={handleGoo} className='btn bg-red-500'>Goggle</button>
        </div>
    );
};

export default SocialLogin;