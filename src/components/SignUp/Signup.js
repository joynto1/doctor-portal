 import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Loading';
 
 
 const Signup = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [signInWithGoogle, Gloading, Gerror] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit =async (data) =>  {
   await createUserWithEmailAndPassword(data.email,data.password);
   await updateProfile({displayName:data.fullname});
  };
  
  if(Gloading || loading){
    return <Loading></Loading>
  }
  let signError;
  if(Gerror || error){
    signError = <small className="text-red-600">{error?.message}</small>
  }
  if(user){
    navigate(from, { replace: true });
  }
  const GooglePopupHandler =()=>{
    signInWithGoogle();
  }
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl  p-5">
          <div className="flex flex-col w-full border-opacity-50">
              <div className="grid  card   rounded-box place-items-center">
                
                
                  <form onSubmit={handleSubmit(onSubmit)}  >
            <h2 className="text-center text-xl font-bold">Sign Up</h2>
            <div className="form-control w-96 max-w-xs">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                {...register("fullname", { required: true })}
                aria-invalid={errors.fullname ? "true" : "false"}
                placeholder="Full Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.fullname?.type === "required" && (
                  <span className="label-text-alt text-red-500">Name is required</span>
                )}
              </label>
            </div>
            <div className="form-control w-96 max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true,pattern: /[a-z0-9]+@gmail.com/})}
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="Enter Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">Email is required</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">Enter valid Email</span>
                )}
              </label>
            </div>
            <div className="form-control w-96 max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500" >
                    {" "}
                    password must be 6 length longer
                  </span>
                )}
              </label>
            </div>
            {signError}
            <p className="flex justify-between text-primary pt-5 pb-5"> <small><Link>Forget Password ?</Link></small>  
              <small className="pe-2"><Link to='/login'>Already have a account</Link></small></p>
            <input className="btn bg-primary w-full max-w-xs border-none text-white" type="submit" value='Sign Up' />
          </form>
                
                
           </div>
           <div className="divider">OR</div>
              <div className="grid  card   rounded-box place-items-center"> 
                  <button onClick={GooglePopupHandler} className="btn bg-primary text-white  w-96 max-w-xs border-none">Continue With Google</button>
              </div>
          </div>
       </div>
  </div>
  );
 };
 
 export default Signup;