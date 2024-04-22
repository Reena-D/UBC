import React from 'react';

  const NavbarItems = [
    { icon: "./search.svg", label: "Product Search" },
    { icon: "./dashboard.svg", label: "Dashboard" },
    { icon: "./resources.png", label: "Resources" },
    { icon: "./affiliate.svg", label: "Affiliated Programs" },
    { icon: "./earnings.svg", label: "Earnings" },
    { icon: "./guidelines.svg", label: "Guidelines" },
    { icon: "./help.svg", label: "Help Centre /FAQs" },
  
  ]; 

const Sidebar = () => {
  return (
    <div className="min-w-60">
      <div className="min-w-60 fixed bottom-0 top-0 left-0  bg-[#0D0D0D]  text-[#CFCFCF] flex flex-col justify-between font-bold">
      <section>
        <img src="./logo.png" className='m-5' alt='logo'/>
        <div className="w-52 m-3 py-3 ">
      {NavbarItems.map((item) => {
        const { icon, label } = item;
        return (
          <a
            href="/"
            key={label}
            className={`w-52 h-15.5 flex justify-start items-center font-[450] gap-4 my-3 ml-1 rounded py-2 px-4 ${
              label === "Product Search" ? "text-[#F37413]" : ""
            }`}
          >
            <img src={icon} className="w-6 h-6 opacity-80 text-xl font-medium " alt="" />
            {label}
          </a>
        );
      })}
    </div>
      </section>
      
      <section>
        <div className=' flex flex-col justify-start items-start font-[450] gap-4 my-3 ml-1 rounded py-2 px-4 '>
          <div className='flex gap-5 items-start'>
            <img src='./arrow.svg' alt='hide sidebar' className='' />
        <img src='./logout.svg' className="w-6 h-6 opacity-80 text-xl font-medium " alt="" />
          <p className='text-[#F37413]'>Logout</p>
          </div>
          <p className='flex gap-4'>
            <img src='./dot open.svg' alt='feed' className=''/>
            Give Feedback</p>
          <p className='flex gap-4'>
            <img src='./dot close.svg' alt='refer'/>
            Refer an Engineer</p>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Sidebar
