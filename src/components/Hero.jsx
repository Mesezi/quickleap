import React, { useState } from 'react'
import fruitImage from '../assets/fruit-bg.png'
import locationIcon from '../assets/location.png'
import { useNavigate } from 'react-router'

const Hero = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function submitForm(e){

        e.preventDefault()
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            navigate('/dashboard')
        }, 1000);

    }

  return (
    <section className='hero'>
        <img src={fruitImage} alt="" />

<section >
<form onSubmit={submitForm}>
            <h3>Let's start by confirming if we currently deliver to your area</h3>
            <input type="text" placeholder='Email Address or Phone number' required/>
            <div>
            <input type="text" placeholder='Zip code or location' required/>
            <img src={locationIcon} alt="" />
            </div>

           <button>{
            loading ? '.  .  .' : ' Continue'
            }
           
           </button>

        </form>
</section>

        
    </section>
  )
}

export default Hero