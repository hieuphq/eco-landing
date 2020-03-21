import React from 'react'
import Carousel from 'nuka-carousel'

const UpperClassPrivilege = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-5 sm:grid-cols-4 sm:grid-rows-3 sm:px-8">
      <div className="row-start-1 row-span-2 col-start-1 col-span-2 w-full sm:row-start-1 sm:row-span-2 sm:col-start-2 sm:col-span-2 bg-primary-o-80">
        <div className="pt-10 mb-10 sm:pt-20 sm:mb-20 sm:pr-6">
          <h3 className="uppercase text-5xl text-secondary font-bold leading-none text-center  sm:text-left sm:px-6 mb-4 ">
            ĐẲNG CẤP
            <br />
            <span className="font-light">RIÊNG BIỆT</span>
          </h3>
          <p className=" pl-4 pr-4 font-serif text-sm text-white text-justify sm:pl-8 sm:pr-4">
            Không chỉ sở hữu không gian sống "độc bản giữa thiên nhiên", Ecopark
            Grand - The Island còn thiết lập một tiêu chuẩn sống riêng xứng tầm
            với vị thế và thương hiệu cá nhân của những chủ nhân biệt thự đảo.
            <br />
            <br />
            Hãy cùng trải nghiệm và khám phá.
          </p>
        </div>
      </div>
      <div className="row-start-3 row-span-1 col-start-1 col-span-1 w-full h-32 sm:row-start-1 sm:row-span-1 sm:col-start-1 sm:col-span-1">
        <div>
          <img src="./img/cs.jpg"></img>
        </div>
      </div>
      <div className="row-start-3 row-span-1 col-start-2 col-span-1 w-full h-32 sm:row-start-1 sm:row-span-1 sm:col-start-4 sm:col-span-1">
        <img src="./img/car.png"></img>
      </div>
      <div className="row-start-4 row-span-1 col-start-1 col-span-1 w-full h-1/2 sm:row-start-2 sm:row-span-1 sm:col-start-1 sm:col-span-1">
        <div className="w-full h-full">
          <img src="./img/michelin.png"></img>
        </div>
      </div>
      <div className="row-start-4 row-span-1 col-start-2 col-span-1 w-full h-32 sm:row-start-2 sm:row-span-1 sm:col-start-4 sm:col-span-1">
        <img src="./img/party.jpg"></img>
      </div>
      <div className="row-start-5 row-span-1 col-start-1 col-span-1 w-full h-32 sm:row-start-3 sm:row-span-1 sm:col-start-2 sm:col-span-2">
        <img src="./img/ship.png"></img>
      </div>
      <div className="row-start-5 row-span-1 col-start-2 col-span-1 w-full h-32 sm:row-start-3 sm:row-span-1 sm:col-start-4 sm:col-span-1">
        <img src="./img/golf.png"></img>
      </div>
    </div>
  )
}

export default UpperClassPrivilege
