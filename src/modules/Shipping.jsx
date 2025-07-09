import {Shipping1} from "../assets/img"
import {Shipping2} from "../assets/img"
import {Shipping3} from "../assets/img"
import {Shipping4} from "../assets/img"

import { Img1 } from "../assets/img"
import { Img2 } from "../assets/img"
import { Img3 } from "../assets/img"
const Shipping = () => {
    return(
        <section className="">
            <div className="!mb-[80px] container bg-[rgb(90,90,201)] w-[1550px] h-[173.5px] flex gap-[16px] ">
                <div className="flex !pt-[61px] !pl-[30px] gap-[24px]">
                    <div className="gap-[4px] flex ">
             <img className="w-[56px] h-[45px] " src={Shipping1} alt="img" />
             <div className="flex flex-col ">
               <strong className="font-bold text-[18px] leading-[23px] text-[#ffff] ">Free Shipping</strong>
               <p className="font-medium text-[14px] leading-[24px] text-[#fff]">On all orders over $75.00</p>
            </div>
        </div>
            <img className="w-[45px] h-[45px]" src={Shipping2} alt="img" />
             <div className="flex flex-col ">
               <strong className="font-bold text-[18px] leading-[23px] text-[#ffff] ">Free Returns</strong>
               <p className="font-medium text-[14px] leading-[24px] text-[#fff]">Returns are free within 9 days</p>
            </div>
            <img className="w-[34px] h-[45px]" src={Shipping3} alt="img" />
             <div className="flex flex-col ">
               <strong className="font-bold text-[18px] leading-[23px] text-[#ffff] ">100% Payment Secure</strong>
               <p className="font-medium text-[14px] leading-[24px] text-[#fff]">Your payment are safe with us.</p>
            </div>
            <img className="w-[50px] h-[45px]" src={Shipping4} alt="img" />
             <div className="flex flex-col ">
               <strong className="font-bold text-[18px] leading-[23px] text-[#ffff] ">Support 24/7</strong>
               <p className="font-medium text-[14px] leading-[24px] text-[#fff]">Contact us 24 hours a day</p>
            </div>
             </div>
            </div>
            <div className="container gap-[24px] flex">
              <img src={Img1} alt="img" />
              <img src={Img2} alt="img" />
              <img src={Img3} alt="img" />
            </div>
        </section>
    )
}

export default Shipping