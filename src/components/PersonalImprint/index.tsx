import React from 'react'
import Carousel from 'nuka-carousel'

const UniqueDesign = () => {
  return (
    <div className="flex flex-wrap flex-row-reverse">
      <div className="w-full sm:w-2/5">
        <div className="pt-10 mb-10 sm:pt-20 sm:mb-12 sm:pr-6">
          <h3 className="uppercase text-5xl text-secondary font-bold leading-none text-center sm:text-left sm:px-6 mb-4">
            DẤU ẤN <br />
            <span className="font-light"> CÁ NHÂN</span>
          </h3>
          <p className=" pl-4 pr-4 font-serif text-sm text-gray-700 text-justify sm:pl-8 sm:pr-4">
            Các kiến trúc sư danh tiếng sẽ hoàn thiện bản vẽ chi tiết của từng
            căn biệt thự theo “đặt hàng” riêng từ mỗi một chủ nhân. Mỗi căn biệt
            thự sẽ là tuyên ngôn cho đẳng cấp, phong cách tinh tế và gout thẩm
            mỹ của gia chủ.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-3/5">
        <div className="w-full py-5 px-10 sm:pt-20 sm:mb-12">
          <img src="./img/nha-5.jpg"></img>
        </div>
      </div>
    </div>
  )
}

export default UniqueDesign
