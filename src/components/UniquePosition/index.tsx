import React from 'react'

const UniquePosition = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(./img/island-concept.jpg)',
      }}
    >
      <div className="flex flex-wrap flex-col-reverse sm:flex-row">
        <div className="hidden sm:block sm:w-2/3"></div>
        <div className="w-full sm:w-1/3 bg-primary-o-80">
          <div className="py-12 px-6 ">
            <h2 className="text-secondary text-5xl font-bold font-sans mb-10">
              VỊ THẾ <span className="font-thin">ĐỘC TÔN</span>
            </h2>
            <div className="text-white text-sm mx-8 pl-4 font-serif">
              <p>
                Chúng tôi ngoài là đơn vị kinh doanh phát triển dự án Ecopark
                Grand (Ecopark giai đoạn 3).
              </p>
              <p>
                Chúng tôi còn cung cấp những tư vấn và cách thức vận hành bất
                động sản nhằm mục đích tối ưu và tăng giá trị Bất động sản mà
                khách hàng sở hữu.
              </p>

              <p>Tư vấn thiết kế từ Alphanam E&C</p>
              <p>Tư vấn quản lý và vận hành Savills Việt Nam</p>
              <p>
                Tư vấn kinh doanh những loại hình BĐS mà khách hàng đang sở hữu
                từ chủ sở hữu chuỗi Apartmen Services Lyn House (Hotel, Luxstay,
                Homestay, Officetel, Apartment, Restaurant. Franchise)
              </p>
              <p>
                Tư vấn từ những nhà thầu trực tiếp thi công, xây dựng, cải tạo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniquePosition
