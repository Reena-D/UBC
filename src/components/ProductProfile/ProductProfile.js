import React from 'react'
import ProductCard from './ProductCard'

const ProductProfile = () => {

    

  return (
    <div className='bg-[#0D0D0D] py-8 border-1'>
    <div className=' mx-auto w-[75%] rounded border border-solid bg-neutral-900 border-neutral-800'>
        <div className='flex flex-row mx-10'>
      <div className=" w-full rounded-lg border-2 border-solid shadow-md bg-neutral-900 border-neutral-800 border-opacity-50 max-w-[300px] min-h-[872px]">
      <div className="flex flex-col px-5 max-w-[246px]">
      <div className="flex gap-8 justify-between items-center px-px w-full">
        <div className="flex flex-col mt-6 whitespace-nowrap">
          <div className="text-sm font-medium tracking-tight text-neutral-500">
            Catalog
          </div>
          <div className="mt-1 text-lg font-medium text-neutral-100">
            Laptop
          </div>
        </div>
        <div className="flex flex-col">
          <div className="shrink-0 h-11 border border-solid bg-neutral-700 border-neutral-700" />
          <div className="z-10 shrink-0 -mt-11 h-11 border border-solid bg-neutral-700 border-neutral-700" />
        </div>
        <div className="flex flex-col mt-6">
          <div className="text-sm font-medium tracking-tight text-neutral-500">
            Sub Catalog
          </div>
          <div className="mt-1 text-lg font-medium text-neutral-100">
            Gaming
          </div>
        </div>
      </div>
      <div className="flex flex-col px-8 mt-52 w-full">
        <div className="flex flex-col justify-center bg-neutral-700 rounded-[98px]">
          <div className="shrink-2 h-2 bg-orange-500 rounded-[98px]" />
        </div>
        <div className="flex mt-5">
          <div className="text-xs font-medium text-neutral-500">
            Product data capability <span className='font-bold'>80%</span>
          
          </div>
        </div>
        <div className="mt-5 text-base text-neutral-500">MSI</div>
      </div>
      <div className="mt-0.5 px-4 w-full text-lg font-normal text-neutral-100">
        Titan GT76
      </div>
      
    

      <div className="mt-2 w-full min-h-[1px]" />
      <div className="flex gap-5 mt-5 text-sm font-normal text-neutral-500">
        <div className="flex flex-col flex-1">
          <div>Device category </div>
          <div className="mt-0.5 text-base tracking-tight text-neutral-100">
            Gaming Laptop
          </div>
          <div className="mt-5">Manufacturer</div>
          <div className="mt-0.5 text-base tracking-tight text-neutral-100">
            Micro-starInternational
          </div>
        </div>
        <div className="flex flex-col flex-1 self-start">
          <div>Form factor</div>
          <div className="mt-0.5 text-base tracking-tight text-neutral-100">
            Notebook
          </div>
          <div className="mt-5">Manufactured</div>
          <div className="self-center mt-0.5 text-base tracking-tight text-neutral-100">
            China
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p className='text-[#F37413] px-7 py-7 text-lg'>Variants</p>
      <p className='text-white px-7'>Laptop Specification</p>
      
    
            <div className='grid grid-cols-3 gap-10 px-8 py-6'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <div className='w-[220px] h-[220px] border-1 rounded border border-orange-500 border-dashed bg-opacity-10 flex items-center justify-center'>
              <div className='text-md font-medium text-white'>+ Add More Variants</div>
              </div>
            
            </div>
            <div className='flex justify-end py-10'>
              <button className='bg-[#F37413] text-white w-[150px] h-[50px] rounded font-medium'>Confirm</button> 
              </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ProductProfile
