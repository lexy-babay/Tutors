import React from 'react'

function First() {
  return (
  
      <>
       <div className='flex h-[30px] bg-gray-900 justify-start items-center'>
        <ul className='flex gap-10 p-6 text-yellow-200'>
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Contacts</li>
          <li>Become an instructor</li>
        </ul>
      </div>
      <div className='min-h-[70px] bg-gray-500 grid grid-cols-2 gap-10 pl-24'>
        <div className='flex flex-row gap-4 justify-start items-center'>
          <div className='text-yellow-200 font-bold'>E-TUTORS</div>
          <div className=''>
            <select className='bg-yellow-200 text-black w-[100px] h-[30px]'>
              <option value="" className='justify-center items-center font-bold'>Browse</option>
              <option value="">hello</option>
              <option value="">hii</option>
            </select> 
          </div>
          <div className='flex'>
            <input type="search" placeholder=' 🔎 What do you want to learn' className='bg-yellow-200 text-black w-[300px] h-[30px] pl-4' />
          </div>
        </div>
        <div className='grid grid-cols-3 pl-24 justify-end items-center gap-3 '>
          <div className='font-bold text-white justify-end items-end grid'>❤ 🛒</div>
          <div className='bg-yellow-200 flex h-[40px] w-[150px] cursor-pointer justify-center items-center'>
            <h1 className='text-black'>Create Account</h1>
          </div>
           <div className='bg-black flex h-[40px] w-[100px] justify-center items-center'>
            <button type='button' className='text-white'>Sign in</button>
           </div>
        </div>

      </div>
      <div className='bg-gray-900 h-[60vh] grid grid-cols-2'>
        <div className='grid justify-center items-center'>
           <div>
           <h1 className='font-bold text-yellow-200'>Become an instructor</h1>
           <h1 className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
           <h1 className='text-white'>Lorem ipsum dolor sit amet consectetur.</h1>
           <div className='bg-yellow-200 flex h-[40px] w-[100px] justify-center items-center'>
            <button className='text-gray-900'>Get started</button>
           </div>
           </div>
        </div>
        <div className='bg-[url(tt3.jpg)] bg-contain bg-center bg-no-repeat rounded-sm-[50px]'> 

        </div>

      </div>
      
      
      
      
      </>

      
  

  )
}

export default First