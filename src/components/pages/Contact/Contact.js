import React from 'react'
import ContactForm from './Form/ContactForm'
function Contact() {
  return (
    <div className='md:px-12 px-3'>
      <h1 className='md:text-4xl text-2xl font-bold text-gray-700 md:mt-8 mt-4 md:mb-8 mb-6 md:text-start text-center'>Contact Us</h1>
      <p className='bg-white rounded-lg border-not-metal shadow-md p-4' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum tenetur, quae voluptatem, hic laborum, qui cumque non quaerat perspiciatis facere consequuntur ea. Eaque quo impedit libero illo quam sit sapiente ab, distinctio, consequuntur corporis dolor rerum maxime soluta. Mollitia minima sed dolores minus reprehenderit provident enim? Ea ratione rem quia.</p>
      <ContactForm></ContactForm>
    </div>
  )
}

export default Contact