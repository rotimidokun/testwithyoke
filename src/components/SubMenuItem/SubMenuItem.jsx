import React from 'react'
import './SubMenuItem.css'
import { ReactComponent as StrokeIcon } from "../../assets/stroke.svg";
const SubMenuItem = ({ text, showDropDown }) => {
  return (
    <div className='submenu-item-container'>
        <a href="/">
            { text }
            <span className="subheader-stroke-icon">
             {showDropDown ? <StrokeIcon  /> : ''} 
            </span>
          </a>
    </div>
  )
}

export default SubMenuItem