import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './hero.css';
import { Navigation } from 'swiper/modules';




const Hero = () => {
    return(
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>        <section className="hero-section ">
            <div className="container flex flex-col ">
               <strong className="font-normal !pt-[164px] text-[20px] leading-[34.3px] text-[#111111] pb-[15px] ">Face Makeup Brush</strong>
               <h1 className="font-normal text-[50px] leading-[62.5px] text-[#111111] pb-[45px]">Skincare Brush Set <br />Sale 30% Off</h1>
              <button className=" bg-none text-black font-bold text-[20px] rounded-0 w-[138px] h-[63px] border-b-emerald-950 border-x-2 border-y-2">Shop now</button>
            </div>
        </section></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

    )
}

export default Hero