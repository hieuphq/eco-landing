import React from 'react'
import Carousel from 'nuka-carousel'

const PersonalImprint = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-2/5">
        <div className="pt-10 mb-10 sm:pt-20 sm:mb-12 sm:pr-6">
          <h3 className="uppercase text-5xl text-secondary font-bold leading-none text-center sm:text-left sm:px-6 mb-4">
            THIẾT KẾ <br />
            <span className="font-light"> ĐỘC BẢN</span>
          </h3>
          <p className=" pl-4 pr-4 font-serif text-sm text-gray-700 text-justify sm:pl-8 sm:pr-4">
            Cùng với nhà phố triệu đô Marina Arc, Ecopark Grand – The Island là
            dòng sản phẩm cao cấp nhất của Ecopark, là "mảnh ghép" hoàn hảo của
            bức tranh khu đô thị phức hợp có tổng vốn đầu tư lên đến 10 tỷ USD.
            Thế nên lợi thế thừa hưởng và bỏ ra giá trị thấp nhất sẽ dành cho
            chung cư Island Bay, Nhà phố Island Bay và Shop house chân đế dưới
            tòa Chung cư.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-3/5">
        <div className="w-full py-5 px-10 sm:pt-20 ">
          <Carousel
            autoplay
            wrapAround
            defaultControlsConfig={{
              nextButtonStyle: { backgroundColor: '#B8A470' },
              prevButtonStyle: { backgroundColor: '#B8A470' },
              prevButtonText: '<',
              nextButtonText: '>',
            }}
          >
            <img src="./img/nha-1.jpg"></img>
            <img src="./img/nha-2.jpg"></img>
            <img src="./img/nha-3.jpg"></img>
            <img src="./img/nha-4.jpg"></img>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default PersonalImprint
