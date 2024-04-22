import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-20 bg-[#0D0D0D] flex items-center'>
 
      
     
      <div className="flex flex-col grow mt-6 max-md:max-w-full">
            <div className="flex gap-10 justify-between mx-8 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
              <div className="my-auto text-3xl font-semibold text-[#F37413]">
                Home
              </div>
              <div className="flex gap-10 max-md:flex-wrap">
                <div className="flex flex-auto gap-10 items-center my-auto">
                  <div className=" text-lg text-[#6F6F6f]">
                    11 February, Saturday
                  </div>
                  <img
                  alt='notification'
                    loading="lazy"
                    src="./Notification.png"
                  
                  />
                  <div className="flex flex-col">
                    <div className="text-base font-semibold text-stone-300">
                      Aisha Sharma
                    </div>
                    <div className="mt-2 text-xs text-neutral-500">Fresher</div>
                  </div>
                </div>
                <div className="flex gap-2">
                
                  <img src='./profile.png' alt='profile'/>
                  <img
                  alt='drop down'
                    loading="lazy"
                    src="./Arrow drop down.png"
                   
                  />
                </div>
              </div>
            </div>
    </div>
    </div>
  )
}

export default Header
