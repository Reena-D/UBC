import React from 'react'

const AddProduct = () => {
  return (
    <div className='bg-[#0D0D0D] py-10'>
      <div className="mx-auto w-[65%] h-full items-center rounded-lg border-2 border-solid shadow-sm bg-[#141416] border-neutral-700">
      <div className="flex flex-col items-center px-7 text-lg max-w-[983px] text-neutral-100">
      <div className="mt-7 w-full text-lg max-md:max-w-full">Brand Name</div>
      <input className="justify-center items-center px-7 py-2 mt-9 w-full font-normal rounded border border-solid bg-neutral-700 border-neutral-700 text-neutral-500 max-md:px-5 max-md:max-w-full"
        placeholder='Describe Brand Name'/>
      
      <div className="mt-4 w-full text-base max-md:max-w-full">Model Name</div>
      <input className="justify-center items-center px-7 py-2 mt-5 w-full font-normal rounded border border-solid bg-neutral-700 border-neutral-700 text-neutral-500 max-md:px-5 max-md:max-w-full"
        placeholder='Describe Model Name'/>
      
      <div className="mt-4 w-full text-base max-md:max-w-full">
        Model Variants Name
      </div>
      <input className="justify-center items-center px-7 py-2 mt-5 w-full font-normal rounded border border-solid bg-neutral-700 border-neutral-700 text-neutral-500 max-md:px-5 max-md:max-w-full"
        placeholder='Describe Model Variants Name'/>
    
      <div className="mt-4 w-full text-base max-md:max-w-full">
        Catalog Name
      </div>
      <input className="justify-center items-center px-7 py-2 mt-4 w-full font-normal rounded border border-solid bg-neutral-700 border-neutral-700 text-neutral-500 max-md:px-5 max-md:max-w-full"
        placeholder='Describe Catalog Name'/>

      <div className="mt-4 w-full text-base max-md:max-w-full">
        Sub Catalog Name
      </div>
      <input className="justify-center items-center px-7 py-2 mt-4 w-full font-normal rounded border border-solid bg-neutral-700 border-neutral-700 text-neutral-500 max-md:px-5 max-md:max-w-full"
        placeholder='Describe Sub Catalog Name'/>

      <div className="mt-4 w-full text-base max-md:max-w-full">
        Product Referance Link
    </div>
      <input className="justify-center items-center px-7 py-2 mt-5 w-full font-normal rounded border border-solid bg-neutral-700 border-neutral-700 text-neutral-500 max-md:px-5 max-md:max-w-full"
        placeholder='Describe URL Link'/>
        
      <button className="justify-center self-end px-7 py-2 mt-20 font-semibold bg-[#F37413] rounded max-md:px-5 max-md:mt-10 mb-8">
        Add Product
      </button>
    </div>
    </div>
    </div>
  )
}

export default AddProduct
