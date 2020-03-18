import React from 'react'

interface Props {
  title: string
  address: {
    line1: string
    city: string
    country: string
  }
  hotline: string
}
const Footer = ({ title, address, hotline }: Props) => {
  return (
    <footer className="pt-6 px-4 bg-brown">
      <div className="sm:block md:flex px-4 ">
        <div className="sm:w-full md:w-1/3">
          <div className="mb-3">
            <a href="/">
              <img src="./img/logo-footer.png" />
            </a>
            <p className="text-white">
              A premium bespoke residences collection by ecopark
            </p>
          </div>
        </div>
        <div className="sm:w-full md:w-1/3 ">
          <div className="mt-3 mx-2"></div>
        </div>
        <div className="sm:w-full md:w-1/3 pt-10 sm:pt-10 md:pt-0 ">
          <div className="mt-3 mx-2">
            <h2 className="mb-2 font-semibold text-white">
              Văn phòng làm việc
            </h2>
            <ul className="mt-4 text-white">
              <li>
                <a
                  href="#"
                  title=""
                  className="block flex items-center opacity-75 hover:opacity-100"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"></path>
                    </svg>
                  </span>
                  <span className="ml-3">
                    <address className="text-white">
                      {address.line1}, {address.city}
                    </address>
                  </span>
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#"
                  title=""
                  className="block flex items-center opacity-75 hover:opacity-100"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"></path>
                      <path d="M13 7L11 7 11 13 17 13 17 11 13 11z"></path>
                    </svg>
                  </span>
                  <span className="ml-3">
                    Mon - Fri: 9:00 - 19:00
                    <br />
                    Closed on Weekends
                  </span>
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#"
                  title=""
                  className="block flex items-center opacity-75 hover:opacity-100"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z"></path>
                    </svg>
                  </span>
                  <span className="ml-3">
                    <a href={`tel:${hotline}`}>{hotline}</a>
                  </span>
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#"
                  title=""
                  className="block flex items-center opacity-75 hover:opacity-100"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z"></path>
                    </svg>
                  </span>
                  <span className="ml-3">contact@ecoparkgrand.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-2">
        <hr
          className="mb-2"
          style={{
            borderTop: '1px dotted #8c8b8b',
          }}
        />
        <div className="text-white text-sm">{title}</div>
      </div>
    </footer>
  )
}

export default Footer
