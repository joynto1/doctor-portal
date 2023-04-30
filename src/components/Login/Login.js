import React from "react";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Loading";
 

const Login = () => {
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email,data.password);
    console.log(data);
  }
  const GooglePopupHandler=()=>{
    signInWithGoogle()
  }
  if(user || Guser){
    navigate(from, { replace: true });
  }
  if(Gloading || loading){
    return <Loading></Loading>
  }
  let signError;
  if(Gerror || error){
    signError = <small className="text-red-600">{error?.message}</small>
  }
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl  p-5">
          <div className="flex flex-col w-full border-opacity-50">
              <div className="grid  card   rounded-box place-items-center">
                
                
                   <form onSubmit={handleSubmit(onSubmit)}  >
            <h2 className="text-center text-xl font-bold">Log In</h2>
            <div className="form-control w-96 max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="Enter Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">Email is required</span>
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
             <p className="flex justify-between text-secondary pt-5 pb-5"> <small><Link>Forget Password ?</Link></small> <br />
              <small className="pe-2"><Link to='/signup'>New for Doctor-Portal</Link></small></p>
            <input className="btn bg-primary w-full max-w-xs border-none text-white" type="submit" value='Log In' />
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

export default Login;
