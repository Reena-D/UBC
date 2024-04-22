import React from 'react'

import { Link } from 'react-router-dom';

const NotFound = () => {

 

  return (
    <div>
      
      
      <div className="flex flex-col justify-center px-1 mt-7 rounded-lg border border-solid shadow-sm bg-stone-950 border-neutral-700 border-opacity-50 max-md:max-w-full">
                  <div className="flex gap-5 justify-between items-start py-8 pr-20 pl-9 rounded-lg border border-solid bg-neutral-900 border-neutral-700 border-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col font-medium">
                      <div className="text-2xl text-stone-300">
                        MSI Titan GT55
                      </div>
                      <div className="mt-3.5 text-xs text-neutral-500">
                        Product Not Found
                      </div>
                    </div>
                    <Link to={`/add_products`} className="justify-center px-3 py-3 mt-2.5 text-sm font-semibold uppercase bg-[#F37413] rounded-sm text-neutral-100">
                      Add Product
                    </Link>
                   
                    
                  </div>
                </div>
            

    </div>
    
  )
}

export default NotFound
