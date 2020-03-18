import React from "react"
import "./style.css"

interface Item {
  path: string
  image: string
  title: string
}

interface Props {
  hotline: string
  fb: string
}

const VerticalBar = ({ hotline, fb }: Props) => {
  return (
    <ul className="vertical-bar">
      <li>
        <a className="fb" href={"https://www.facebook.com/" + fb}>
          <img src="./img/facebook.png" />
          <span>Facebook</span>
        </a>
      </li>
      <li>
        <img src="./img/phone-1.png" />
        <a className="tel" href={"tel:" + hotline}>
          {hotline}
        </a>
      </li>
    </ul>
  )
}
export default VerticalBar
