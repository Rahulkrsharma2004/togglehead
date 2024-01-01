import React, { useEffect,useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import './LoremIPsumLandingPage.css'

const LoremIPsumLandingPage = ({ images, autoSlideInterval = 3000 }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, autoSlideInterval);

        return () => clearInterval(intervalId);
    }, [currentIndex, autoSlideInterval]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='landingPageMainDiv'>
            <div className="landingPageTextDiv">
                <h2 className='landingPageHtext'>Lorem Ipsum</h2>
                <p className='landingPageptext'>Lorem ipsum dolor sit amet,consesetetur sandipscing elitr seddiam nonumy eirmod tempor invidunt ut labore et dolore mangna aliquyam erat , sed diam volupatua . At vero eos etaccusam et justo dua dolores et ea rebum.stet clita kasd</p>
                <button className='landingPageBtn'>Know More<IoMdArrowDropright className='landingPageBtnIcon' /></button>
            </div>
            <div className="landingPageImgDiv">
                <div className="vertical-slider">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className={index === currentIndex ? 'visible' : ''}
                        />
                    ))}
                    <div className="navigation-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={index === currentIndex ? 'active' : 'non-active'}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
                </div>

                
            </div>

        </div>
    )
}

export default LoremIPsumLandingPage