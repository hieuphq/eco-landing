import React from 'react'

const Header = () => {
  return (
    <header className="sm:static md:absolute md:lelf-0 md:top-0 md:w-full z-10">
      <nav className="hidden sm:hidden md:flex md:flex-wrap md:items-center md:justify-between md:p-6 md:bg-transparent sm:bg-white">
        <div className="hidden sm:hidden md:flex md:items-center md:flex-shrink-0 text-white mr-6 pr-8 ">
          <a className="pl-6 hidden sm:hidden md:block" href="/">
            <img
              className="hidden sm:hidden md:block md:w-2/3"
              src="./img/logo.png"
              alt="logo"
            />
          </a>
        </div>
      </nav>
      <div className="md:hidden sm:block py-2">
        <a href="/">
          <img
            className="m-auto text-center"
            src="./img/mobile-logo.png"
            alt="mobile-logo"
          />
        </a>
      </div>
    </header>
  )
}
export default Header

// <div className="md:hidden sm:block absolute top-0 right-0">
//   <button className="md:hidden sm:flex sm:items-center px-3 py-2 border rounded text-gray-700 border-gray-500 hover:text-white hover:border-white">
//     <svg
//       className="fill-current h-3 w-3"
//       viewBox="0 0 20 20"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <title>Menu</title>
//       <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//     </svg>
//   </button>
// </div>
