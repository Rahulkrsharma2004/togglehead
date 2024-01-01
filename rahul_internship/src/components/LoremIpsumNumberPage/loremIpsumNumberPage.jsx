import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import './LoremIpsumNumberPage.css'

const LoremIpsumNumberPage = () => {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='mainNumberPageDiv'>
                <div className='numberContentDiv'>
                <div className='numberPageDiv'>
                    <h4>Lorem Ipsum</h4>
                    <h1 style={{ fontSize: "3rem" }}>{counterOn && <CountUp start={0} end={123} duration={2} delay={0} />}+</h1>
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor sit amet,consesetetur sandipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore mangna aliquyam erat</p>
                </div>
                <div className='numberPageDiv'>
                    <h4>Lorem Ipsum</h4>
                    <h1 style={{ fontSize: "3rem" }}>{counterOn && <CountUp start={0} end={12} duration={2} delay={0} />}+</h1>
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor sit amet,consesetetur sandipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore mangna aliquyam erat sed dia eduat</p>
                </div>
                <div className='numberPageDiv'>
                    <h4>Lorem Ipsum</h4>
                    <h1 style={{ fontSize: "3rem" }}>{counterOn && <CountUp start={0} end={12} duration={2} delay={0} />}+</h1>
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor sit amet,consesetetur sandipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore mangna aliquyam erat sed dia eduat</p>
                </div>
                <div className='numberPageDiv'>
                    <h4>Lorem Ipsum</h4>
                    <h1 style={{ fontSize: "3rem" }}>{counterOn && <CountUp start={0} end={123} duration={2} delay={0} />}</h1>
                    <h4>Lorem Ipsum</h4>
                    <p>Lorem ipsum dolor sit amet,consesetetur sandipscing elitr, seddiam nonumy eirmod tempor invidunt ut</p>
                </div>
                </div>
                

            </div>
        </ScrollTrigger>

    )
}

export default LoremIpsumNumberPage