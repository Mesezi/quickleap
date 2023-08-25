import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='container'>
        <section>
    <h5>
    Subscribe to be the first one to know about updates from us, we only share fun stuff! 
    </h5>
    <form>
    <input type="search" name="" id="" placeholder='Enter Email Address'/>
    <button>Subscribe</button>
    </form>

        </section>

        <section>
        <img src={logo} alt="" />
        <div className='list_section'>
            <article>
                <h6>Company</h6>
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </article>

            <article>
                <h6>Products</h6>
                <ul>
                    <li>Market Place</li>
                    <li>Grow for Life</li>
                    <li>Meal Planner</li>
                    <li>Inventory Manager</li>
                </ul>
            </article>


            <article>
                <h6>Contact Us</h6>
                <ul>
                    <li>hello@quickleap.co</li>
                    <li>+234 813 486  0483</li>
                </ul>
            </article>


            <article>
                <h6>Legal</h6>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </article>

            <article className='socials'>
                <h6>Socials</h6>
                <ul>
                    <li><svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="18" fill="#0B7A24"/>
<path d="M16.5139 18.0949V27.2431H19.5486V18.2378H22.0556L22.4514 14.9502H19.5486V12.9491C19.5486 11.9485 19.8125 11.3767 21 11.3767H22.5833V8.51794C22.3194 8.51794 21.3958 8.375 20.3403 8.375C18.0972 8.375 16.5139 9.94734 16.5139 12.6632V14.9502H13.875V18.0949H16.5139Z" fill="white"/>
</svg>
Facebook</li>
                    <li>
                    <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="18" fill="#0B7A24"/>
<path d="M17.9542 10.2542C20.475 10.2542 20.75 10.2542 21.7583 10.3C22.675 10.3458 23.1792 10.4833 23.5 10.6208C23.9125 10.7583 24.2792 11.0333 24.6 11.3083C24.9208 11.6292 25.15 11.9958 25.2875 12.4083C25.425 12.7292 25.5625 13.2333 25.6083 14.15C25.6542 15.1583 25.6542 15.4333 25.6542 17.9542C25.6542 20.475 25.6542 20.75 25.6083 21.7583C25.5625 22.675 25.425 23.1792 25.2875 23.5C24.9667 24.325 24.325 24.9667 23.5 25.2875C23.1792 25.425 22.675 25.5625 21.7583 25.6083C20.75 25.6542 20.475 25.6542 17.9542 25.6542C15.4333 25.6542 15.1583 25.6542 14.15 25.6083C13.2333 25.5625 12.7292 25.425 12.4083 25.2875C11.9958 25.15 11.6292 24.875 11.3083 24.6C10.9875 24.2792 10.7583 23.9125 10.6208 23.5C10.4833 23.1792 10.3458 22.675 10.3 21.7583C10.2542 20.75 10.2542 20.475 10.2542 17.9542C10.2542 15.4333 10.2542 15.1583 10.3 14.15C10.3458 13.2333 10.4833 12.7292 10.6208 12.4083C10.7583 11.9958 11.0333 11.6292 11.3083 11.3083C11.6292 10.9875 11.9958 10.7583 12.4083 10.6208C12.7292 10.4833 13.2333 10.3458 14.15 10.3C15.1583 10.2542 15.4792 10.2542 17.9542 10.2542ZM17.9542 8.55835C15.3875 8.55835 15.0667 8.55835 14.0583 8.60418C13.05 8.65002 12.3625 8.78752 11.7667 9.06252C11.1708 9.29168 10.6208 9.65835 10.1625 10.1167C9.70415 10.575 9.29165 11.1708 9.06249 11.7667C8.83332 12.3625 8.64999 13.05 8.60415 14.0583C8.55832 15.0667 8.55832 15.3875 8.55832 17.9542C8.55832 20.5208 8.55832 20.8417 8.60415 21.85C8.64999 22.8583 8.78749 23.5458 9.06249 24.1417C9.29165 24.7375 9.65832 25.3333 10.1625 25.7917C10.6208 26.25 11.2167 26.6625 11.8125 26.8917C12.4083 27.1208 13.0958 27.3042 14.1042 27.35C15.1125 27.3958 15.4333 27.3958 18 27.3958C20.5667 27.3958 20.8875 27.3958 21.8958 27.35C22.9042 27.3042 23.5917 27.1667 24.1875 26.8917C25.4708 26.3875 26.4333 25.425 26.9375 24.1417C27.1666 23.5458 27.35 22.8583 27.3958 21.85C27.4417 20.8417 27.4416 20.5208 27.4416 17.9542C27.4416 15.3875 27.4417 15.0667 27.3958 14.0583C27.35 13.05 27.2125 12.3625 26.9375 11.7667C26.7083 11.125 26.3417 10.575 25.8375 10.1167C25.3791 9.65835 24.7833 9.24585 24.1875 9.01668C23.5917 8.78752 22.9042 8.60418 21.8958 8.55835C20.8417 8.55835 20.5208 8.55835 17.9542 8.55835Z" fill="white"/>
<path d="M17.9529 13.1416C15.2945 13.1416 13.1404 15.2958 13.1404 17.9541C13.1404 20.6124 15.2945 22.7666 17.9529 22.7666C20.6112 22.7666 22.7654 20.6124 22.7654 17.9541C22.8112 15.2958 20.657 13.1416 17.9529 13.1416ZM17.9529 21.1166C16.2112 21.1166 14.8362 19.6958 14.8362 17.9999C14.8362 16.2583 16.257 14.8833 17.9529 14.8833C19.6945 14.8833 21.0695 16.3041 21.0695 17.9999C21.1154 19.6958 19.6945 21.1166 17.9529 21.1166Z" fill="white"/>
<path d="M22.9971 14.1042C23.6299 14.1042 24.143 13.5912 24.143 12.9583C24.143 12.3255 23.6299 11.8125 22.9971 11.8125C22.3643 11.8125 21.8513 12.3255 21.8513 12.9583C21.8513 13.5912 22.3643 14.1042 22.9971 14.1042Z" fill="white"/>
</svg>
Instagram</li>
                    <li><svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="18" fill="#0B7A24"/>
<path d="M25.7627 12.1305C26.623 11.6148 27.2836 10.7983 27.5947 9.82546C26.7897 10.3029 25.898 10.6496 24.9489 10.8365C24.1889 10.0268 23.1061 9.52075 21.9078 9.52075C19.6067 9.52075 17.7412 11.3862 17.7412 13.6871C17.7412 14.0136 17.7781 14.3317 17.8491 14.6366C14.3864 14.4628 11.3163 12.8041 9.2614 10.2834C8.90276 10.8988 8.6973 11.6145 8.6973 12.378C8.6973 13.8235 9.43292 15.0988 10.5509 15.8459C9.86784 15.8243 9.22545 15.6369 8.66365 15.3248C8.66335 15.3422 8.66335 15.3596 8.66335 15.3772C8.66335 17.3959 10.0995 19.0799 12.0055 19.4626C11.6559 19.5578 11.2878 19.6087 10.9078 19.6087C10.6393 19.6087 10.3783 19.5826 10.124 19.5339C10.6541 21.1893 12.1928 22.3938 14.016 22.4275C12.5901 23.5449 10.7935 24.211 8.84155 24.211C8.50528 24.211 8.17361 24.1913 7.84766 24.1528C9.69149 25.335 11.8816 26.0247 14.2345 26.0247C21.898 26.0247 26.0887 19.676 26.0887 14.1702C26.0887 13.9896 26.0847 13.8099 26.0767 13.6312C26.8907 13.0438 27.5971 12.31 28.1557 11.4745C27.4085 11.8058 26.6055 12.0298 25.7627 12.1305Z" fill="white"/>
</svg>
Twitter</li>
                    <li>
                    <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="18" fill="#0B7A24"/>
<path d="M11.5677 13.5973C12.6754 13.5973 13.5734 12.6993 13.5734 11.5916C13.5734 10.4839 12.6754 9.58594 11.5677 9.58594C10.46 9.58594 9.56207 10.4839 9.56207 11.5916C9.56207 12.6993 10.46 13.5973 11.5677 13.5973Z" fill="white"/>
<path d="M15.4661 15.117V26.2445H18.921V20.7417C18.921 19.2897 19.1942 17.8835 20.9945 17.8835C22.7701 17.8835 22.7921 19.5436 22.7921 20.8334V26.2454H26.2489V20.1431C26.2489 17.1456 25.6035 14.842 22.1 14.842C20.4179 14.842 19.2904 15.7651 18.8294 16.6387H18.7826V15.117H15.4661ZM9.83594 15.117H13.2964V26.2445H9.83594V15.117Z" fill="white"/>
</svg>
LinkedIn</li>
                </ul>
            </article>
        </div>

        </section>

        <p className="copyright">
        © Quick Leap 2022, All Rights Reserved
        </p>
    </footer>
  )
}

export default Footer