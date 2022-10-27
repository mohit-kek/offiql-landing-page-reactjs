import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg'
import { FiLogIn } from 'react-icons/fi';
import "./header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className="header-items">
        <div className="line"></div>
        <div className="item">
          <BsGithub />
          <span>GitHub</span>
        </div>
        <div className="item">
          <CgFileDocument />
          <span>Docs</span>
        </div>
        <div className="item">
          <FiLogIn />
          <span>Sign In</span>
        </div>
      </div>
    </div>
  )
}

export default Header