import React from "react";
import fruitImage from "../assets/fruit-bg.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import enjoy from "../assets/enjoy.png";
import tick from "../assets/tick.png";
import meat from "../assets/meat.png";
import cornflakes from "../assets/cornflakes.png";
import ketchup from "../assets/ketchup.png";
import milk from "../assets/milk.png";
import oats from "../assets/oats.png";
import orange from "../assets/orange.png";
import potatoes from "../assets/potatoes.png";
import tomatoes from "../assets/tomatoes.png";
import customer from "../assets/customer.png";
import customer2 from "../assets/customer2.png";
import customer3 from "../assets/customer3.png";
import shop from '../assets/shop.png'
import Dropdown from "./Dropdown";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';


const Details = () => {
    const products =[
        {
            type:'vegetables',
            name: 'Farm fresh organic tomatoes',
            img: tomatoes
        },
        {
            type:'meat',
            name: 'Farm fresh organic meat',
            img: meat
        },
        {
            type:'fruit',
            name: 'Farm fresh organic orange',
            img: orange
        },
        {
            type:'vegetables',
            name: 'Farm fresh organic potatoes',
            img: potatoes
        },
        {
            type:'groceries',
            name: 'Dano milk full cream',
            img: milk
        },
        {
            type:'groceries',
            name: 'Heinz tomatoe ketchup pack',
            img: ketchup
        },
        {
            type:'groceries',
            name: 'Peak milk',
            img: cornflakes
        },
        {
            type:'groceries',
            name: 'Quaker oats',
            img: oats
        },

    ]



  return (
    <div>
      <section className="how_it_works container">
        
        <div>
          <h2>How it works</h2>
          <p>
            We have tailored these product specifically to serve the specific
            needs you have.
          </p>
        </div>

        <article>
          <div>
            <img src={image1} alt="" />
            <h4>Become a Member</h4>
            <p>
              We grow food and fresh vegetables for you; we also curate from
              farmers, partner farms, and growers who grow food, vegetables,
              livestock and other food crops responsibly.
            </p>
          </div>

          <div>
            <img src={image2} alt="" />
            <h4>Build your order</h4>
            <p>
              You make a weekly or monthly pick of fresh vegetables, meat, fresh
              produce, roots, tubers, essentially everything you need to stock
              the house and cook remarkable meals.
            </p>
          </div>

          <div>
            <img src={image3} alt="" />
            <h4>Unpack & enjoy</h4>
            <p>
            Unpack & enjoy your shopping list delivered to you, on the date you have chosen. 
            </p>
            
          </div>
        </article>
      </section>

      <section className="benefits">
        <section className="container">
        <div>
        <img src={enjoy} alt="" />
        </div>
        
        <article>

            <h3>You get to enjoy:</h3>

            <ul>
                <li>
                    <img src={tick} alt="" />
                    <span>No membership fee</span>
                </li>

                <li>
                    <img src={tick} alt="" />
                    <span>Access to our complete selection of fresh fruits, produce, meat, roots, tubers, 
                        recipes etc and high quality, sustainable groceries</span>
                </li>

                <li>
                    <img src={tick} alt="" />
                    <span>Everyday savings of up to 10% off compared to market prices</span>
                </li>

                <li>
                    <img src={tick} alt="" />
                    <span>Delicious recipes, produce guides, how-to, and more to inspire you in the kitchen</span>
                </li>

                <li>
                    <img src={tick} alt="" />
                    <span>You get to support farmers, by buying directly what they produce, enabling them farm sustainably</span>
                </li>

                <li>
                    <img src={tick} alt="" />
                    <span>Your order gets packed a day to delivery, ensuring you have your produce fresh and ready to enjoy</span>
                </li>
            </ul>
        </article>
        </section>
        
      </section>

      <section className="products container">
       
          <h2>Top selling products</h2>
          
  
          <Swiper
    slidesPerView={1}
    pagination={true}
    modules={[Pagination]}
    className="mySwiper"
   > 
 
 <SwiperSlide>
    <article className="products-slide">
            {
                products.map(product=> <div>
                    <img src={product.img} alt="" />
                    <p className="type">{product.type}</p>
                    <h4 className="product_name">{product.name}</h4>
                   <p className="price"><span>$1200</span>/kg</p> 
                </div>)
            }
         
        </article>
        </SwiperSlide> 

        <SwiperSlide>
    <article className="products-slide">
            {
                products.map(product=> <div>
                    <img src={product.img} alt="" />
                    <p className="type">{product.type}</p>
                    <h4 className="product_name">{product.name}</h4>
                   <p className="price"><span>$1200</span>/kg</p> 
                </div>)
            }
         
        </article>
        </SwiperSlide> 

        <SwiperSlide>
    <article className="products-slide">
            {
                products.map(product=> <div>
                    <img src={product.img} alt="" />
                    <p className="type">{product.type}</p>
                    <h4 className="product_name">{product.name}</h4>
                   <p className="price"><span>$1200</span>/kg</p> 
                </div>)
            }
         
        </article>
        </SwiperSlide> 
        

          <SwiperSlide>
    <article className="products-slide">
            {
                products.map(product=> <div>
                    <img src={product.img} alt="" />
                    <p className="type">{product.type}</p>
                    <h4 className="product_name">{product.name}</h4>
                   <p className="price"><span>$1200</span>/kg</p> 
                </div>)
            }
         
        </article>
        </SwiperSlide>   

        <SwiperSlide>
    <article className="products-slide">
            {
                products.map(product=> <div>
                    <img src={product.img} alt="" />
                    <p className="type">{product.type}</p>
                    <h4 className="product_name">{product.name}</h4>
                   <p className="price"><span>$1200</span>/kg</p> 
                </div>)
            }
         
        </article>
        </SwiperSlide>     
 

   </Swiper>



       
      </section>

      <section className="customer_reviews">
      <svg className="wave" viewBox="0 0 1848 154" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1848 128.121L1786.58 128.121C1725.17 128.121 1601.42 128.121 1478.58 106.909C1354.83 85.697 1232 42.8486 1109.17 38.6061C985.417 34.3637 862.583 68.303 738.833 98.4242C616 128.121 493.167 154 369.417 154C246.583 154 122.833 128.121 61.4166 115.394L4.87271e-06 102.667L1.46181e-05 3.79587e-06L61.4166 8.74084e-06C122.833 1.36858e-05 246.583 2.36496e-05 369.417 3.35395e-05C493.167 4.35033e-05 616 5.33932e-05 738.833 6.32831e-05C862.583 7.32469e-05 985.417 8.31368e-05 1109.17 9.31006e-05C1232 0.000102991 1354.83 0.00011288 1478.58 0.000122844C1601.42 0.000132734 1725.17 0.000142698 1786.58 0.000147643L1848 0.000152588L1848 128.121Z" fill="#0B7A24"/>
</svg>

<article className="container">
    <h3>Our Customer Feedback</h3>
    <p>Don't take our word for it. Trust our customers</p>
    <div className="reviews">

<div>
    <div>
        <img src={customer} alt="" />
    <svg width="112" height="20" viewBox="0 0 182 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_166)">
<path d="M16.145 23.1721L24.4068 28.1586L22.2143 18.7605L29.5136 12.4372L19.9016 11.6217L16.145 2.7583L12.3884 11.6217L2.77643 12.4372L10.0757 18.7605L7.88323 28.1586L16.145 23.1721Z" fill="#F8A401"/>
</g>
<g clip-path="url(#clip1_1_166)">
<path d="M53.577 23.1721L61.8388 28.1586L59.6464 18.7605L66.9456 12.4372L57.3336 11.6217L53.577 2.7583L49.8204 11.6217L40.2084 12.4372L47.5077 18.7605L45.3152 28.1586L53.577 23.1721Z" fill="#F8A401"/>
</g>
<g clip-path="url(#clip2_1_166)">
<path d="M91.0091 23.1721L99.2709 28.1586L97.0784 18.7605L104.378 12.4372L94.7657 11.6217L91.0091 2.7583L87.2525 11.6217L77.6405 12.4372L84.9397 18.7605L82.7473 28.1586L91.0091 23.1721Z" fill="#F8A401"/>
</g>
<g clip-path="url(#clip3_1_166)">
<path d="M141.81 12.4372L132.198 11.6083L128.441 2.7583L124.685 11.6217L115.073 12.4372L122.372 18.7605L120.179 28.1586L128.441 23.1721L136.703 28.1586L134.524 18.7605L141.81 12.4372ZM128.441 20.6722V8.23942L130.727 13.6403L136.583 14.1483L132.144 17.9985L133.481 23.7202L128.441 20.6722Z" fill="#F8A401"/>
</g>
<g clip-path="url(#clip4_1_166)">
<path d="M179.242 12.4372L169.63 11.6083L165.873 2.7583L162.117 11.6217L152.505 12.4372L159.804 18.7605L157.611 28.1586L165.873 23.1721L174.135 28.1586L171.956 18.7605L179.242 12.4372ZM165.873 20.6722L160.847 23.7069L162.183 17.9851L157.745 14.135L163.6 13.627L165.873 8.23942L168.159 13.6403L174.015 14.1483L169.576 17.9985L170.913 23.7202L165.873 20.6722Z" fill="#F8A401"/>
</g>
<defs>
<clipPath id="clip0_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(0.102722 0.0845947)"/>
</clipPath>
<clipPath id="clip1_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(37.5347 0.0845947)"/>
</clipPath>
<clipPath id="clip2_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(74.9668 0.0845947)"/>
</clipPath>
<clipPath id="clip3_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(112.399 0.0845947)"/>
</clipPath>
<clipPath id="clip4_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(149.831 0.0845947)"/>
</clipPath>
</defs>
</svg>
    </div>
    <h4>Amaka Danjuma-Farmer</h4>
    <p>It’s a joy to see people enjoy the food that we joyfully grow, growing food is a passionate pursuit,
         the consumation of this passion is people enjoying the food we grow in  ways we have’nt yet imagined.</p>
</div>

<div>
    <div>
        <img src={customer2} alt="" />
    <svg width="112" height="20" viewBox="0 0 182 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_166)">
<path d="M16.145 23.1721L24.4068 28.1586L22.2143 18.7605L29.5136 12.4372L19.9016 11.6217L16.145 2.7583L12.3884 11.6217L2.77643 12.4372L10.0757 18.7605L7.88323 28.1586L16.145 23.1721Z" fill="#F8A401"/>
</g>
<g clip-path="url(#clip1_1_166)">
<path d="M53.577 23.1721L61.8388 28.1586L59.6464 18.7605L66.9456 12.4372L57.3336 11.6217L53.577 2.7583L49.8204 11.6217L40.2084 12.4372L47.5077 18.7605L45.3152 28.1586L53.577 23.1721Z" fill="#F8A401"/>
</g>
<g clip-path="url(#clip2_1_166)">
<path d="M91.0091 23.1721L99.2709 28.1586L97.0784 18.7605L104.378 12.4372L94.7657 11.6217L91.0091 2.7583L87.2525 11.6217L77.6405 12.4372L84.9397 18.7605L82.7473 28.1586L91.0091 23.1721Z" fill="#F8A401"/>
</g>
<g clip-path="url(#clip3_1_166)">
<path d="M141.81 12.4372L132.198 11.6083L128.441 2.7583L124.685 11.6217L115.073 12.4372L122.372 18.7605L120.179 28.1586L128.441 23.1721L136.703 28.1586L134.524 18.7605L141.81 12.4372ZM128.441 20.6722V8.23942L130.727 13.6403L136.583 14.1483L132.144 17.9985L133.481 23.7202L128.441 20.6722Z" fill="#F8A401"/>
</g>
<g clip-path="url(#clip4_1_166)">
<path d="M179.242 12.4372L169.63 11.6083L165.873 2.7583L162.117 11.6217L152.505 12.4372L159.804 18.7605L157.611 28.1586L165.873 23.1721L174.135 28.1586L171.956 18.7605L179.242 12.4372ZM165.873 20.6722L160.847 23.7069L162.183 17.9851L157.745 14.135L163.6 13.627L165.873 8.23942L168.159 13.6403L174.015 14.1483L169.576 17.9985L170.913 23.7202L165.873 20.6722Z" fill="#F8A401"/>
</g>
<defs>
<clipPath id="clip0_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(0.102722 0.0845947)"/>
</clipPath>
<clipPath id="clip1_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(37.5347 0.0845947)"/>
</clipPath>
<clipPath id="clip2_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(74.9668 0.0845947)"/>
</clipPath>
<clipPath id="clip3_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(112.399 0.0845947)"/>
</clipPath>
<clipPath id="clip4_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(149.831 0.0845947)"/>
</clipPath>
</defs>
</svg>
    </div>
    <h4>Deborah Adebiyi</h4>
    <p>The ease that Grow for life provides is a joy, when I see that debit alert I am reminded I have a tool that automates
         the whole process of stocking my home and 
        eliminates the stress of going to the market, and the prices are great to.</p>
</div>


<div>
    <div>
        <img src={customer3} alt="" />
    <svg width="112" height="20" viewBox="0 0 182 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_166)">
<path d="M16.145 23.1721L24.4068 28.1586L22.2143 18.7605L29.5136 12.4372L19.9016 11.6217L16.145 2.7583L12.3884 11.6217L2.77643 12.4372L10.0757 18.7605L7.88323 28.1586L16.145 23.1721Z" fill="#F8A401"/>
</g>
<g clip-path="url(#clip1_1_166)">
<path d="M53.577 23.1721L61.8388 28.1586L59.6464 18.7605L66.9456 12.4372L57.3336 11.6217L53.577 2.7583L49.8204 11.6217L40.2084 12.4372L47.5077 18.7605L45.3152 28.1586L53.577 23.1721Z" fill="#F8A401"/>
</g>
<g clip-path="url(#clip2_1_166)">
<path d="M91.0091 23.1721L99.2709 28.1586L97.0784 18.7605L104.378 12.4372L94.7657 11.6217L91.0091 2.7583L87.2525 11.6217L77.6405 12.4372L84.9397 18.7605L82.7473 28.1586L91.0091 23.1721Z" fill="#F8A401"/>
</g>
<g clip-path="url(#clip3_1_166)">
<path d="M141.81 12.4372L132.198 11.6083L128.441 2.7583L124.685 11.6217L115.073 12.4372L122.372 18.7605L120.179 28.1586L128.441 23.1721L136.703 28.1586L134.524 18.7605L141.81 12.4372ZM128.441 20.6722V8.23942L130.727 13.6403L136.583 14.1483L132.144 17.9985L133.481 23.7202L128.441 20.6722Z" fill="#F8A401"/>
</g>
<g clip-path="url(#clip4_1_166)">
<path d="M179.242 12.4372L169.63 11.6083L165.873 2.7583L162.117 11.6217L152.505 12.4372L159.804 18.7605L157.611 28.1586L165.873 23.1721L174.135 28.1586L171.956 18.7605L179.242 12.4372ZM165.873 20.6722L160.847 23.7069L162.183 17.9851L157.745 14.135L163.6 13.627L165.873 8.23942L168.159 13.6403L174.015 14.1483L169.576 17.9985L170.913 23.7202L165.873 20.6722Z" fill="#F8A401"/>
</g>
<defs>
<clipPath id="clip0_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(0.102722 0.0845947)"/>
</clipPath>
<clipPath id="clip1_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(37.5347 0.0845947)"/>
</clipPath>
<clipPath id="clip2_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(74.9668 0.0845947)"/>
</clipPath>
<clipPath id="clip3_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(112.399 0.0845947)"/>
</clipPath>
<clipPath id="clip4_1_166">
<rect width="32.0846" height="32.0846" fill="white" transform="translate(149.831 0.0845947)"/>
</clipPath>
</defs>
</svg>
    </div>
    <h4>Osagie Omoshigo</h4>
    <p>It is the analytics for me, I enjoy seeing how I spend my money, 
        I enjoy the recipes and the ease having a standing shopping list that gets delivered monthly provides for me and my home.  
        Well done Grow for Life.</p>
</div>

    </div>
</article>

<svg viewBox="0 0 1848 154" className="rotate wave" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1848 128.121L1786.58 128.121C1725.17 128.121 1601.42 128.121 1478.58 106.909C1354.83 85.697 1232 42.8486 1109.17 38.6061C985.417 34.3637 862.583 68.303 738.833 98.4242C616 128.121 493.167 154 369.417 154C246.583 154 122.833 128.121 61.4166 115.394L4.87271e-06 102.667L1.46181e-05 3.79587e-06L61.4166 8.74084e-06C122.833 1.36858e-05 246.583 2.36496e-05 369.417 3.35395e-05C493.167 4.35033e-05 616 5.33932e-05 738.833 6.32831e-05C862.583 7.32469e-05 985.417 8.31368e-05 1109.17 9.31006e-05C1232 0.000102991 1354.83 0.00011288 1478.58 0.000122844C1601.42 0.000132734 1725.17 0.000142698 1786.58 0.000147643L1848 0.000152588L1848 128.121Z" fill="#0B7A24"/>
</svg>


      </section>

      <section className="faq">
      <h3>FAQ's</h3>
    <p>What you need to know about. Grow for life</p>

    <article>

        <Dropdown heading={'What is Grow for Life?'}/> 
        <Dropdown heading={'Is my Membership truly free?'}/>
        <Dropdown heading={'What happens if I run out of the items on my Shopping list before the end of the Month?'}/>
        <Dropdown heading={'Can I cancel my subscription?'}/>

    </article>
      </section>

      <section className="get_started">

        <article className="container">
            <img src={shop} alt="" />
            <div>
                <h4>Get started today!</h4>
                <p>Join the Quickleap family today and lets make healthy living a lifestyle for you and your family.</p>
                <button>Create an account</button>
            </div>
        </article>

      </section>
    </div>
  );
};

export default Details;
