import React, { useEffect, useRef, useState } from 'react'

const Dropdown = ({heading, content}) => {

    const [show, setShow] = useState(false)
    const btn = useRef()

    useEffect(()=>{
        console.log(btn)
    if(show){
       return btn.current.classList.add('show')
    }

    btn.current.classList.remove('show')

    }, [show])


  return (

    <div onClick={()=>setShow(prev=> !prev)} ref={btn} className="dropdown">
    <button>
    <p>{heading}</p>
    <svg width="14" height="14" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.3001C11.3 17.3001 10.6 17.0301 10.07 16.5001L3.54999 9.98014C3.25999 9.69014 3.25999 9.21014 3.54999 8.92014C3.83999 8.63014 4.31999 8.63014 4.60999 8.92014L11.13 15.4401C11.61 15.9201 12.39 15.9201 12.87 15.4401L19.39 8.92014C19.68 8.63014 20.16 8.63014 20.45 8.92014C20.74 9.21014 20.74 9.69014 20.45 9.98014L13.93 16.5001C13.4 17.0301 12.7 17.3001 12 17.3001Z" fill="#1B1B1B"/>
</svg>
    </button>
    
<div className="content">
    <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quod?</p>
</div>
</div>
  )
}

export default Dropdown