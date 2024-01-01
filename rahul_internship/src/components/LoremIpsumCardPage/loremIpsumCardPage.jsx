import React,{useState,useEffect} from 'react'
import './LoremIpsumCardPage.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import card from "../../assets/Card.svg"
import cardRightArrow from "../../assets/cardRightArrow.svg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode } from 'swiper/modules';

const LoremIpsumCardPage = ({ cards }) => {
    const cardDetails=[
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow}
    ]
   
    const [slidesPerView, setSlidesPerView] = useState(3.3);
    const [spaceBetween, setSpaceBetween]=useState(30)

  useEffect(() => {
    const updateSlidesPerView = () => {
      const windowWidth = window.innerWidth;

      if(windowWidth >= 1000){
        setSlidesPerView(3.3);
        setSpaceBetween(25)
      }
      else if (windowWidth >= 768) {
        setSlidesPerView(2.5);
        setSpaceBetween(20)
      } else if (windowWidth >= 481) {
        setSlidesPerView(2.1);
        setSpaceBetween(10)
      } else {
        setSlidesPerView(1.1);
        setSpaceBetween(15)
      }
    };

    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);


    return (
        <div className='mainPageCardDiv'>
            <div className='examinationTimeDiv'>
                <div className='examinationTimeDiv1'>
                    <h2 style={{ color: "#305881" }}>Upcoming Examinations</h2>
                    <p style={{ color: "rgb(41, 40, 40)", fontFamily: " Arial, Helvetica, sans-serif", fontSize: "0.9rem", marginTop: "0.5rem" }}>Enquiry about the examination & register for the exams</p>
                </div><hr />
                <div className='examinationTimeDiv2'>
                    <img style={{ height: "30px" }} src="https://www.theirmindia.org/assets/images/irm_home/event.svg" alt="" />
                    <div style={{ margin: "auto" }}>
                        <h3 className='examinaionTimeh2'>02th October 2014</h3>
                        <p className='examinationTimep'>Level 1 Exam</p>
                    </div>

                </div>
                <div className='examinationTimeDiv3'>
                    <img style={{ height: "30px" }} src="https://www.theirmindia.org/assets/images/irm_home/event.svg" alt="" />
                    <div style={{ marginTop: "1.5rem", marginLeft: "0.5rem" }}>
                        <h3 className='examinaionTimeh2'>nov-dec 2016</h3>
                        <p className='examinationTimep'>Level 2</p>
                        <p className='examinationTimep'>Lorem Ipsum</p>
                        <p className='examinationTimep'>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='examinationTimeDiv4'>
                    <img style={{ height: "30px" }} src="https://www.theirmindia.org/assets/images/irm_home/event.svg" alt="" />
                    <div style={{ margin: "auto" }}>
                        <h3 className='examinaionTimeh2'>Ongoing this year</h3>
                        <p className='examinationTimep'>Level 3(grad)</p>
                    </div>
                </div>
            </div>

            <div className='cardSliderMainDiv'>
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    {cardDetails.map((ele, ind) => (
                        <SwiperSlide key={ind}>
                            <div className='cardSliderImgDiv'>
                                <img className='cardSliderImg' src={ele.cardImg} alt="card" />
                            </div>
                            <div className='cardSliderTextBtnDiv'>
                                <h3>{ele.h3}</h3>
                                <p>{ele.p}</p>
                                <button><p>{ele.btnTex}</p> <img src={ele.icon} alt="icon" /></button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default LoremIpsumCardPage