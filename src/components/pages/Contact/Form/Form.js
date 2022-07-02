import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {schema} from './ContactSchema'

function Form() {
   
  

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data){
        return console.log(data)
    }

 
    return ( 
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-4" >
      <p>Email: </p>
      <input {...register("email")} className="self-start rounded-sm" />
      <p>{errors.email?.message}</p>
     
      <p className='mt-4' >Message to us: </p>
      <input {...register("message")} className="lg:py-16 md:py-12 py-8  rounded-sm"/>
      <p>{errors.message?.message}</p>
      
      <input type="submit" className='bg-white p-2 mt-4 mb-20 rounded-lg self-start' value='Submit' />

     
    </form>
    )
    }

export default Form