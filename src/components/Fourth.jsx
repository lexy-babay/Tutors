import React from 'react'

function Fourth() {
  return (
    <>
    <div className='h-[100vh] bg-gray-900 grid grid-rows-2'>
      <div className='grid grid-cols-2'>
        <div className='grid justify-center items-center'>
          <div>
            <h1 className='font-bold text-yellow-200'>Start teaching with us</h1>
            <h1 className='font-bold text-yellow-200'>and inspire others</h1>
            <h1 className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae.</h1>
            <h1 className='text-white'>Lorem ipsum dolor sit amet consectetur.</h1>
            <div className='bg-yellow-200 flex h-[40px] w-[100px] justify-center items-center'>
            <button className='text-gray-900'>Register now</button>
           </div>
          </div>
        </div>
        <div className='grid grid-cols-2 '>
          <div className='h-[270px] w-[300px] mt-12 bg-[url(tt2.jpg)] bg-cover bg-start bg-no-repeat'></div>
          <div className='h-[300px] bg-[url(tt2.jpg)] bg-start bg-cover  mr-20 mt-5 w-[300px]'></div>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-1 border-t-2  border-b-2 items-center justify-center'>
        <div className='pl-24'>
          <div>
            <h1 className='text-yellow-200 font-bold'>E-TUTOR</h1>
            <h1 className='text-white'>Lorem ipsum dolor sit.</h1>
            <h1 className='text-white'>Lorem ipsum dolor sit.</h1>
            <h1>📘📘</h1>

          </div>
        </div>
        <div className='pl-24'>
          <div>
            <h1 className='text-yellow-200 font-bold'>TOP 4 CATEGORIES</h1>
            <h1 className='text-white'>Development</h1>
              <h1 className='text-white'>Design</h1>
            <h1 className='text-white'>Business</h1>
          </div>
        </div>
        <div className='pl-24'>
          <div>
            <h1 className='text-yellow-200 font-bold'>QUICK LINKS</h1>
            <h1 className='text-white'>About</h1>
            <h1 className='text-white'>Become an instructor</h1>
            <h1 className='text-white'>Contacts</h1>
            <h1 className='text-white'>Career</h1>
          </div>
        </div>
        <div>
          <div className='pl-24'>
            <h1 className='text-yellow-200 font-bold'>SUPPORT</h1>
            <h1 className='text-white'>Help center</h1>
            <h1 className='text-white'>FAQs</h1>
            <h1 className='text-white'>Terms & conditions</h1>
            <h1 className='text-white'>Privacy Policy</h1>
          </div>
        </div>
        
      </div>

    </div>
    
    </>
  )
}

export default Fourth