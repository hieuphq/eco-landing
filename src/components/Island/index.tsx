import React from 'react'

const Island = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-2/5 bg-primary">
        <div className="pt-40 mb-56 pr-6">
          <h3 className="uppercase text-6xl text-secondary font-bold leading-none text-center sm:text-right">
            ECOPARK <br /> GRAND
          </h3>
        </div>
      </div>
      <div className="w-full sm:w-3/5">
        <div className="pt-40 mb-56 pl-6">
          <h3 className="uppercase text-5xl font-light text-secondary leading-none mb-3">
            the island
          </h3>
          <p className="font-serif text-sm text-gray-700 text-justify pl-8 pr-4">
            Ecopark Grand - The Island là tuyệt phẩm mang trong mình sứ mệnh đại
            diện cho những giá trị vượt trội, đẳng cấp nhất của thương hiệu
            Ecopark, gửi gắm triết lý nhân sinh và một chuẩn mực sống tinh hoa
            xứng tầm.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Island
