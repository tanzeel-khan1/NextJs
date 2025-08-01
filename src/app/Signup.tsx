import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
type formData = {
  name: string;
  email: string;
  phone: string;
  password: string
}

type props = {
  onSuccess: () => void
}
const Signup = ({ onSuccess }: props) => {
const  {
  register,
handleSubmit,
formState: {errors},
reset

} = useForm<formData>();

const onSubmit = async (data: formData) => {
  try{
    await axios.post('http://localhost:5000/api/auth/register', data );
    alert("signup succesfull");
    reset()
    onSuccess()
  } catch (err){
    console.log(err)
    alert("SignUp failed")
  }
}

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <input
        {...register('name', { required: 'Name is required' })}
        placeholder="Name"/>
      {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email format',
          },
        })}
        placeholder="Email"
        type="email"/>
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}

      <input
        {...register('phone', {
          required: 'Phone number is required',
          minLength: {
            value: 10,
            message: 'Phone number should be at least 10 digits',
          },
        })}
        placeholder="Phone"
        type="tel"
      />
      {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}

      <input
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        })}
        placeholder="Password"
        type="password"/>
      {errors.password && <span className="text-red-500">{errors.password.message}</span>}

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Sign Up
      </button>
    </form>

    
    </>
  )
}

export default Signup
