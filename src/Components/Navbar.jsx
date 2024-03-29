import React, { useEffect, useState} from 'react'

function Navbar() {
    const [show, setShow] = useState(false) ;

    function transition(){
        if(window.scrollY > 250){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transition);
        return ()=>window.removeEventListener("scroll",transition)
    },[])


  return (
    // <div className={` ${show ? "fixed":"relative"} w-full z-50 bg-black`}>
    <div className={` ${show ? " bg-black ":" bg-gradient-to-r from-black to-black via-transparent"} fixed w-full z-50 `}>
    <div className=' max-w-[100rem] mx-auto flex justify-between py-4 px-6 items-center'>
        <div className=' text-red-500 font-bold text-4xl '>
            NETFLIX
        </div>
        <div className=' flex text-white cursor-pointer'>
            <p>Movies</p>

        </div>

    </div>

    </div>
  )
}

export default Navbar