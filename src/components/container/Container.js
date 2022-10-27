import React from 'react';
import "./container.css";
import containerImg from "../../assets/containerImg.png"

const Container = () => {
  return (
    <div className='container'>
      <div className='container-box'>

        <div className='container-heading'>
          <span>AI</span>
          <span>framework</span>
        </div>

        <div className='container-detail'>
          <span></span>
          <div>
            <p className='container-subheading'>Personalisation</p>
            <p className="container-description">
              The advanced intelligent system assists in reaching out to customers and increasing conversion funnel.
            </p>
          </div>
        </div>

        <div className='container-detail'>
          <span></span>
          <div>
            <p className='container-subheading'>Efficiency</p>
            <p className="container-description">Our data models help improve the content. Real-time delivery insights are monitored using AI and provide meaningful actions.</p>
          </div>
        </div>

        <div className='container-detail'>
          <span></span>
          <div>
            <p className='container-subheading'>Automation</p>
            <p className="container-description">Send email at scale using code written in your preferred programming language, such as Python, Java, or Curl.</p>
          </div>
        </div>

      </div>

      <div className='container-img'>
        <img src={containerImg} alt="" />
      </div>
    </div>
  )
}

export default Container