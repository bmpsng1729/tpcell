
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
import{login} from "../slices/authSlice";
import { Button, Input, Logo, Select } from '../index'

function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const create = async (data) => {
    console.log(typeof(data))
    console.log(data);
    setError("")
    try {
      // const userData = await authService.createAccount(data)  // make a bd call here

      const userData = await fetch("http://localhost:4000/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify(data)
      });

      const datas = await userData.json();

      if (!userData.ok) {
        toast.error(datas.message || "Something went wrong");

      } else {
          dispatch(login(userData));
      navigate("/signin")
        toast.success("Signup successful");
      
      }
     
  }
        
        catch (error) {
  setError(error.message)
  }
}

return (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 shadow-lg">
      <div className="mb-2 flex justify-center">
        {/* Logo can go here */}
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
      <p className="mt-2 text-center text-base text-black/60">
        Already have an account?&nbsp;
        <Link
          to="/signin"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign In
        </Link>
      </p>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

      <form onSubmit={handleSubmit(create)}>
        <div className='space-y-5'>
          <div className='flex space-x-4'>
            <Select
              label="branch"
              options={["CSE", "ECE", "MME","CE","ME","EE",'PIE','ECM']}
              {...register("branch", { required: true })}
            />
            <Select
              label="accountType"
              options={["student", "admin", "recruiter"]}
              {...register("accountType", { required: true })}
            />
          </div>

          <Input
            label="Full Name: "
            placeholder="Enter your full name"
            {...register("name", { required: true })}
          />
          <Input
            label="Email: "
            placeholder="Enter your email"
            type="email"
            {...register("email", { required: true })}
          />
          <Input
            label="Password: "
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          <Input
            label="CGPA "
            type="number"
            placeholder="Enter CGPA (for students)"
            {...register("cgpa", { required: true })}
          />

          <Button type="submit" className="w-full hover:cursor-pointer">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  </div>
)

}

export default Signup