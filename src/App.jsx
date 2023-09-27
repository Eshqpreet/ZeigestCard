// import { useState } from 'react'
import './App.css'
import start from "./assets/Vector.png"
import bttn from "./assets/reg button.png"
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaRegCaretSquareRight } from "react-icons/fa";
import bottom from "./assets/bottom.png";


function App() {

  return (
    <div className='container bg-[#E6D6B5] w-[300px] h-[520px] border-solid border-[#723E30] border-[15px] rounded-lg '>
      <div className='upperBox border-b-[1.5px] py-[7px] border-[#A3724F] w-[65%] relative left-[20%]'>
        <div className='flex gap-4'>
          <img src={start} alt="" />
          <img src={start} alt="" />
          <h3 className=' Wording text-[#A73500] font-[500] '>Cultural</h3>
          <img src={start} alt="" />
          <img src={start} alt="" />
        </div>
      </div>
      <div className='midBox'>
        <div className='py-[1.5rem] relative left-8'>
          <div className='m-0 p-0  bottom-10 relative'>
            <h3 className='Heading relative text-[#F8F2D8] right-7 top-8 leading-1 text-[1.2rem]'>Xuberous</h3>
            <img src={bttn} alt="" />
            <i className='text-[#723E30] font-[700] relative right-6 py-4'>Solo/Duet Dance</i>
            <p className='text-[#723E30] relative right-6 italic'>ONLINE</p>
          </div>
        </div>
        <div className='innerBox w-[200px] h-[164px] border-dashed border-[#723E30] border-[5px] relative left-9 bottom-14' >
        </div>
        <i className='text-[#723E30] font-[500] relative left-2 right-2 bottom-12 '>POC: Eshqpreet Singh</i>
      </div>
      <div className='buttons relative bottom-10'>
        <div>
          <button className='btn bg-[#723E30] w-[120px] h-[40px] text-[#F8F2D8] font-[400] flex relative left-[30%] gap-3 p-2 rounded-md hover:text-[#E6D6B5]'><FaRegArrowAltCircleDown className='h-[25px]' />  Rulebook</button>
        </div>
        <div className='flex relative top-2 left-3 gap-3'>
          <button className='btn bg-[#723E30] w-[120px] h-[40px] text-[#F8F2D8] font-[400] p-2 rounded-md hover:text-[#E6D6B5]'>Register</button>
          <button className='btn bg-[#F8F2D8] w-[110px] h-[40px] text-[#723E30] font-[500] p-2 rounded-md border-solid border-[#723E30] border-[2px] flex gap-2 hover:bg-[#E6D6B5]'>Explore<FaRegCaretSquareRight className='h-[20px] relative left-2' /></button>
        </div>
      </div>
      <div className='bottomBox  relative left-10 bottom-4'>
        <img src={bottom} alt="" />
      </div>
    </div>
  )
}

export default App
