/* import React, { useState } from 'react' */
import Cards from './Cards'
import { AnimationOnScroll } from 'react-animation-on-scroll';
const cardData = [
    {title:'Rainbow Vegetable Sandwich ',desc:'Time: 15 - 20 Minutes | Serves: 1',price:'$22.00',img:'/images/img/img-3.jpg'},
    {title:'Salad with fish<',desc:'Delicious dish',price:'$12.00',img:'/images/img/img-4.jpg'},
    {title:'Spinach salad',desc:'Delicious dish;',price:'$9.50',img:'/images/img/img-5.jpg'},
    
   
  ];
  

export default function Food() {
    /* const[menuData , setMenuData] = useState(''); */
  return (
    <>
     <AnimationOnScroll animateIn="animate__backInLeft delay 20" initiallyVisible={true}>
   <section id="explore-food">
     <div className="explore-food wrapper">
       <div className="container">
         <div className="row">
           <div className="col-sm-12">
             <div className="text-content text-center">
              <h2>Explore Our Foods</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit
                amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
             </div>
           </div>
         </div>
         <div className="row pt-5">
         <Cards menuData={cardData}  />
         </div>
       </div>
     </div>
   </section>
   </AnimationOnScroll>
    </>
  )
}
