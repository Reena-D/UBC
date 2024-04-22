import React from 'react'

import { Link } from 'react-router-dom';

const ProductList = () => {



  return (
    
    <div className='overflow-y-scroll '>
      
      <div className="flex justify-end h-[250px] rounded-lg border border-solid shadow-2xl bg-stone-950 border-[#6f6f6f] border-opacity-50 max-w-[933px]">
      <div className="px-10 py-5 w-full rounded-lg border border-solid bg-neutral-900 border-neutral-700 border-opacity-50 max-w-[706px] max-md:px-5 max-md:max-w-full">
        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-[81%] ">
            <div className="flex flex-col ">
              <div className="self-start ml-7 text-2xl font-medium text-stone-300">
                MSI
              </div>
              <div className="mt-0.5 text-sm font-medium text-neutral-500">
                Laptop / Gaming Laptop
              </div>
              <div className="flex gap-12 justify-start items-start mt-2">
                <div className="flex flex-col">
                  <div className="text-lg font-normal text-neutral-500">
                    Model
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-stone-300">
                    Titan GT76
                  </div>
                </div>
                <div className="flex whitespace-nowrap">
                  <div className="shrink-0 w-px h-[58px]" />
                  <div className="flex flex-col self-start">
                    <div className="text-lg font-normal text-neutral-500">
                      Manufacturer
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-stone-300">
                      Micro-Star
                      <br />
                      International
                    </div>
                  </div>
                </div>
                <div className="flex whitespace-nowrap">
                  <div className="shrink-0 w-px h-14" />
                  <div className="flex flex-col self-start">
                    <div className="text-lg text-neutral-500">
                      Manufactured
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-stone-300">
                      China
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-5 text-sm font-medium text-orange-500 whitespace-nowrap max-md:pr-5">
                <Link to={`/product_profile`} className="text-lg text-neutral-500">Variants</Link>
                <div className="tracking-tight underline">i3-12700HX</div>
                <div className="tracking-tight underline">i5-12800HX</div>
                <div className="tracking-tight underline">i7-12900HX</div>
              </div>
              <div className="flex self-start gap-4 px-20 mt-2 text-sm font-medium tracking-tight text-orange-500 ">
                <div className="grow underline">i3-12700HX</div>
                <div className="underline">i5-12800HX</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[20%] mt-3">
            <div className="flex flex-col text-sm font-medium uppercase text-neutral-100">
              <div className="justify-center p-2 bg-orange-500 rounded-sm">
                Add Review
              </div>
              <div className="justify-center px-6 py-2 mt-8 rounded-sm border border-orange-500 border-solid">
                Add Asset
              </div>
              <div className="justify-center px-6 py-2 mt-8 rounded-sm border border-orange-500 border-solid ">
                <span className="text-neutral-100">Validtate</span>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<br />

    <div className="flex justify-end h-[250px] rounded-lg border border-solid shadow-sm bg-stone-950 border-neutral-700 border-opacity-50 max-w-[933px]">
      <div className="px-10 py-5 w-full rounded-lg border border-solid bg-neutral-900 border-neutral-700 border-opacity-50 max-w-[706px] max-md:px-5 max-md:max-w-full">
        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-[81%] ">
            <div className="flex flex-col ">
              <div className="self-start ml-7 text-2xl font-medium text-stone-300 max-md:ml-2.5">
                MSI
              </div>
              <div className="mt-0.5 text-sm font-medium text-neutral-500">
                Laptop / Gaming Laptop
              </div>
              <div className="flex gap-12 justify-start items-start mt-2">
                <div className="flex flex-col">
                  <div className="text-lg font-normal text-neutral-500">
                    Model
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-stone-300">
                    Titan GT77
                  </div>
                </div>
                <div className="flex whitespace-nowrap">
                  <div className="shrink-0 w-px h-[58px]" />
                  <div className="flex flex-col self-start">
                    <div className="text-lg font-normal text-neutral-500">
                      Manufacturer
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-stone-300">
                      Micro-Star
                      <br />
                      International
                    </div>
                  </div>
                </div>
                <div className="flex whitespace-nowrap">
                  <div className="shrink-0 w-px h-14" />
                  <div className="flex flex-col self-start">
                    <div className="text-lg text-neutral-500">
                      Manufactured
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-stone-300">
                      China
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-5 text-sm font-medium text-[#F37413]">
                <Link to={`/product_profile`} className="text-lg text-neutral-500">Variants</Link>
                <div className="tracking-tight underline">i3-12700HX</div>
                <div className="tracking-tight underline">i5-12800HX</div>
                <div className="tracking-tight underline">i7-12900HX</div>
              </div>
             
            </div>
          </div>
          <div className="flex flex-col w-[20%] mt-3">
            <div className="flex flex-col text-sm font-medium uppercase text-neutral-100">
              <div className="justify-center p-2 bg-[#F37413] rounded-sm">
                Add Review
              </div>
              <div className="justify-center px-6 py-2 mt-8 rounded-sm border border-[#F37413] border-solid">
                Add Asset
              </div>
              <div className="justify-center px-6 py-2 mt-8 rounded-sm border border-[#F37413] border-solid ">
                <span className="text-neutral-100">Validtate</span>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default ProductList
