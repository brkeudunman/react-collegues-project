import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {schema} from './ContactSchema'

function ContactForm() {
   
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data){
        return console.log(data)
    }

    return ( 
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-4" >
      <p>Email: </p>
      <input {...register("email")} className="self-start rounded-md border-2 placeholder:text-gray-300 pl-2" placeholder='joe@example.com'/>
      <p className='text-primary-400'>{errors.email?.message}</p>
     
      <p className='mt-4' >Message to us: </p>
      <textarea {...register("message")} className="pt-2 pl-2 lg:pb-24 md:pb-20 pb-12 rounded-md border-2 conte" placeholder='Your Message...'/>
      <p className='text-primary-400'>{errors.message?.message}</p>
      
      <input type="submit" className='bg-white p-2 mt-4 mb-20 rounded-lg self-start' value='Submit' />

    </form>
    )
    }

export default ContactForm