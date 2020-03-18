import React from "react"

const UniquePosition = () => {
  return (
    <div
      className="unique_position"
      style={{ backgroundImage: "url(./img/island-concept.jpg)" }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-xs-12">
            <div
              className="col-left"
              style={{ backgroundImage: "url(./img/island-concept.jpg)" }}
            >
              <h2>
                VỊ THẾ<span>ĐỘC TÔN</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-xs-12 col-right">
            <div className="entry-content">
              <h2>
                VỊ THẾ<span>ĐỘC TÔN</span>
              </h2>
              <div className="desc">
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
                  Tư vấn kinh doanh những loại hình BĐS mà khách hàng đang sở
                  hữu từ chủ sở hữu chuỗi Apartmen Services Lyn House (Hotel,
                  Luxstay, Homestay, Officetel, Apartment, Restaurant.
                  Franchise)
                </p>
                <p>
                  Tư vấn từ những nhà thầu trực tiếp thi công, xây dựng, cải
                  tạo.
                </p>

                {/* <a
                  href="https://ecoparkgrand.com/vi-the-doc-ton"
                  className="show"
                >
                  <img
                    className="button-desktop"
                    src="https://ecoparkgrand.com/wp-content/themes/ecoparkgrand/images/button-2.png"
                  />{" "}
                  <img
                    className="button-mobile"
                    src="https://ecoparkgrand.com/wp-content/themes/ecoparkgrand/images/button-3.png"
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniquePosition
