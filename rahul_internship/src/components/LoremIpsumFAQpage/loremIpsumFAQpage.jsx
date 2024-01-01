import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { FaMinusCircle } from 'react-icons/fa';
import { IoMdArrowDropright } from "react-icons/io";
import './LoremIpsumFAQpage.css';

const LoremIpsumFAQpage = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqMainDiv">
      <h2 className="faqHeading">FAQ</h2>
      <div className="mainQuestionAnswerDiv">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
          >
            <div
              className="question-container"
              onClick={() => toggleAnswer(index)}
            >
              <div className="question">{item.question} </div>
              <div className={`icon ${openIndex === index ? '-' : '+'}`}>
                {openIndex === index ? <FaMinusCircle /> : <CiCirclePlus />}
              </div>
            </div>
            {openIndex === index && (
              <div className='answerDiv'>
                <div className="answer">{item.answer} </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="SubscribeMainDiv">
        <div className='SubscribeTextDiv'>
          <h2 style={{ color: "#12406F" }}>Subscribe</h2>
          <p className='subsPtag'>Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod tempor invidunt ut labore et dolore mangna aliquyam erat.</p>
          <div className='subsBtn1'>
            <input className='inp' type="text" placeholder='Enter Your Email Address' />
            <button className='subsBtn'>Subscribe Now  <IoMdArrowDropright className='landingPageBtnIcon' /></button>
          </div>

        </div>
        <div className='SubscribeImageDiv'>
          <img className='subsImage' src="https://www.theirmindia.org/assets/images/irm_home/section7_container2_img.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoremIpsumFAQpage;
