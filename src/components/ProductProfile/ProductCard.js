import React from 'react'

const ProductCard = () => {
  return (
    <div>
         <div className="w-60">
            <div className="flex flex-col px-4 pt-5 pb-8 text-sm font-medium rounded border border-solid border-neutral-700 text-stone-300">
              <div className="text-neutral-500">Variant #2</div>
              <div className="justify-center px-2 py-3 mt-4 rounded border border-solid bg-neutral-700 border-neutral-700 text-neutral-100 max-md:pr-5">
                i5-12800HX (RTX 3060)
              </div>
              <div className="mt-5">Product Data Capability</div>
              <div className="shrink-0 mt-2 h-px rounded-xl" />
              <div className="flex gap-4 mt-5 text-xs tracking-tight">
                <div className="flex flex-col flex-1">
                  <div>Add Asset </div>
                  <div className="shrink-0 mt-2.5 h-1.5 bg-orange-500 rounded-xl" />
                </div>
                <div className="flex flex-col flex-1 whitespace-nowrap">
                  <div>Validate</div>
                  <div className="shrink-0 mt-2.5 h-1.5 bg-orange-500 rounded-xl" />
                </div>
                <div className="flex flex-col flex-1">
                  <div>Go Live</div>
                  <div className="shrink-0 mt-2.5 h-1.5 rounded-xl bg-neutral-700" />
                </div>
              </div>
            </div>
            <div className="justify-center items-center px-20 py-2 mt-4 h-12 text-lg font-semibold tracking-wider whitespace-nowrap bg-orange-500 rounded text-neutral-100">
              Next
            </div>
            </div>
      </div>

  )
}

export default ProductCard
