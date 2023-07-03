'use client'
import { IoIosArrowUp } from 'react-icons/io';
import { useEffect, useState } from "react"

const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <div className='text-red-400 hover:text-emerald-500'>
        {backToTop && (
            <button 
                style={{
                    position: 'fixed',
                    bottom: '65px',
                    right: '50px',
                    width: '50px',
                    fontSize: '50px',
            }}
            onClick={scrollUp}
            > <IoIosArrowUp />  </button>
        )}
    </div>
  )
}

export default BackToTop