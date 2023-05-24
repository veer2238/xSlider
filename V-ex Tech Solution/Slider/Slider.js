import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Slider = () => {
  return (
    <Carousel 
    autoPlay={true}
    showThumbs={false}
    
   
    >
    <div>
        <img src="images/img1.png"  />
     
    </div>
    <div>
        <img src="images/img3 (1).png" />
       
    </div>
    <div>
        <img src="images/img3 (2).png"  />
   
    </div>
</Carousel>
  )
}

export default Slider