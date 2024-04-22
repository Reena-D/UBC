import React, { useState } from 'react'
import NotFound from './NotFound'

import ProductList from './ProductList'


const Homepage = () => {

    const [searchTerm, setSearchTerm] = useState("");
    
  return (
    
    <div className="flex flex-col ml-5 w-[100%]  bg-[#0D0D0D]">
          
            <div className="flex justify-center items-center px-16 py-8 mt-4 bg-stone-950 ">
              <div className="flex flex-col mb-96 max-w-full w-[975px]">
                <div className="self-center text-5xl font-semibold tracking-tight text-center text-[#F5F5F5] ">
                  Suggest & Review a Product
                </div>
                <div className="self-center mt-5 text-2xl font-normal leading-8 text-center capitalize text-[#CFCFCF]">
                  Any Electric & Electronics products
                </div>
               
                  
                <input className="flex gap-4 px-8 py-4 mt-10  text-lg rounded border border-solid bg-stone-950 border-neutral-700 text-[#979797] "
                placeholder='Search only by Brand or Model Name'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                  <br/>
                {searchTerm === "MSI Titan GT55" ? <NotFound/>
                :
                ""
  }
  {searchTerm === "MSI Titan" ? <ProductList/> : ""}
  
 
              </div>
            </div>
          </div>
        
       
  )
}

export default Homepage
