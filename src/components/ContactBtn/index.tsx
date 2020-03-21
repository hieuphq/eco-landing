import React from 'react'
import { useState } from 'react'

interface Props {
  title: string
  onClick?: () => void
  className?: string
}
const ContactBtn: React.FC<Props> = ({ title, onClick, className }: Props) => {
  const [currSvgColor, setCurrSvgColor] = useState('text-secondary')
  return (
    <button
      onMouseEnter={() => setCurrSvgColor('text-white')}
      onMouseLeave={() => setCurrSvgColor('text-secondary')}
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
      className={`bg-transparent hover:bg-secondary text-secondary
      hover:text-white font-semibold py-3 pl-12 pr-8 rounded-full inline-flex
      items-center border border-secondary hover:border-transparent ${className}`}
    >
      <span>{title.toUpperCase()}</span>
      <svg
        className={`fill-current w-4 h-4 ml-5 ${currSvgColor}`}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.34040198,16.2551668 L12.0500534,9.96065933 L4.34040198,3.74483316 C3.9023536,3.35142644 3.9023536,2.72197569 4.2527923,2.32856897 L5.3041084,1.3057115 C5.6545471,0.91230478 6.3554245,0.91230478 6.88108255,1.22703016 L16.6057565,9.25252723 C17.1314145,9.64593395 17.1314145,10.354066 16.6057565,10.7474728 L6.88108255,18.7729698 C6.3554245,19.0876952 5.6545471,19.0876952 5.3041084,18.6942885 L4.2527923,17.671431 C3.9023536,17.2780243 3.9023536,16.6485736 4.34040198,16.2551668 Z"
          id="Path"
        ></path>
      </svg>
    </button>
  )
}

export default ContactBtn
