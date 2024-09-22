import React from 'react'
import profile_icon from './Assets/JU-logo.jpg'
import {AiTwotonePhone} from 'react-icons/ai';
import {MdOutlineFax} from 'react-icons/md';
import {CgMail} from 'react-icons/cg';
import './css/Top.css'
const Top = () => {
  return (
    <div className='profile'>
        <div className='profileWithLogo'>
      <div className="">
        <img src={profile_icon} height="100px" width="100px" alt="" />
      </div>
      <div className="text">
        <h1>JU Transport Requisition</h1>
      </div>
      </div>
      <div className="contact">
        <div>
            <AiTwotonePhone/>
          <a href="tel:02224491045-51 ">
            02224491045-51
          </a>
          </div>
        <div>
          <MdOutlineFax/>
        <a href="tel:02224491052">
          02224491052
          </a>
          </div>
        <div>
          <CgMail/>
        <a href="mailto:registrar@juniv.edu">
          registrar@juniv.edu</a>
        </div>
       
      </div>

    </div>
  )
}

export default Top