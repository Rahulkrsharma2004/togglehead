import LoremIpsumNavbar from "./components/LoremIpsumNavbar/LoremIpsumNavbar";
import LoremIpsumFooter from "./components/LoremIpsumFooter/LoremIpsumFooter";
import LoremIPsumLandingPage from "./components/LoremIPsumLandingPage/LoremIPsumLandingPage"
import LoremIpsumCardPage from './components/LoremIpsumCardPage/LoremIpsumCardPage'
import LoremIpsumNumberPage from './components/LoremIpsumNumberPage/LoremIpsumNumberPage'
import LoremIpsumFAQpage from './components/LoremIpsumFAQpage/LoremIpsumFAQpage'
import { HiMiniArrowRightCircle } from "react-icons/hi2";


function App() {

  const images = [
    'https://www.theirmindia.org/assets/images/homepage/hbanner_5.png',
    'https://www.theirmindia.org/assets/images/homepage/hbanner_2.png',
    'https://www.theirmindia.org/assets/images/homepage/hbanner_14.png',
    'https://www.theirmindia.org/assets/images/homepage/hbanner_6.png'
  ];

  const faqData = [
    {
      question: 'How does an investor gain access to MF Utility?',
      answer: 'Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod tempor invidunt ut labore et dolore mangna aliquyam erat , sed diam volupatua . At vero eos etaccusam et justo dua dolores et ea rebum.stet clita kasd.',
    },
    {
      question: 'Will investors be able to have multiple Common Acount Number?',
      answer: 'Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod tempor invidunt ut labore et dolore mangna aliquyam erat , sed diam volupatua . At vero eos etaccusam et justo dua dolores et ea rebum.stet clita kasd.',
    },
    {
      question: 'How does an investor gain access to MF Utility?',
      answer: 'Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod tempor invidunt ut labore et dolore mangna aliquyam erat , sed diam volupatua . At vero eos etaccusam et justo dua dolores et ea rebum.stet clita kasd.',
    },
  ];

  const cards = [
    <div key={1}>
      <h3>Lorem Ipsum</h3>
      <p style={{ fontSize: "0.77rem", margin: "8px 0" }} >Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod</p>
      <p style={{ fontSize: "0.77rem" }} >Know More <HiMiniArrowRightCircle /></p>
    </div>,
    <div key={2}>
      <h3>Lorem Ipsum</h3>
      <p style={{ fontSize: "0.77rem", margin: "8px 0" }} >Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod</p>
      <p style={{ fontSize: "0.77rem" }} >Know More <HiMiniArrowRightCircle /></p>
    </div>,
    <div key={3}>
      <h3>Lorem Ipsum</h3>
      <p style={{ fontSize: "0.77rem", margin: "8px 0" }} >Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod</p>
      <p style={{ fontSize: "0.77rem" }} >Know More <HiMiniArrowRightCircle /></p>
    </div>,
    <div key={4}>
      <h3>Lorem Ipsum</h3>
      <p style={{ fontSize: "0.77rem", margin: "8px 0" }} >Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod</p>
      <p style={{ fontSize: "0.77rem" }} >Know More <HiMiniArrowRightCircle /></p>
    </div>,
    <div key={5}>
      <h3>Lorem Ipsum</h3>
      <p style={{ fontSize: "0.77rem", margin: "8px 0" }} >Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod</p>
      <p style={{ fontSize: "0.77rem" }} >Know More <HiMiniArrowRightCircle /></p>
    </div>,
    <div key={6}>
      <h3>Lorem Ipsum</h3>
      <p style={{ fontSize: "0.77rem", margin: "8px 0" }} >Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod</p>
      <p style={{ fontSize: "0.77rem" }} >Know More <HiMiniArrowRightCircle /></p>
    </div>,
    <div key={7}>
      <h3>Lorem Ipsum</h3>
      <p style={{ fontSize: "0.77rem", margin: "8px 0" }} >Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod</p>
      <p style={{ fontSize: "0.77rem" }} >Know More <HiMiniArrowRightCircle /></p>
    </div>,
    <div key={8}>
      <h3>Lorem Ipsum</h3>
      <p style={{ fontSize: "0.77rem", margin: "8px 0" }} >Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod</p>
      <p style={{ fontSize: "0.77rem" }} >Know More <HiMiniArrowRightCircle /></p>
    </div>,
    <div key={9}>
      <h3>Lorem Ipsum</h3>
      <p style={{ fontSize: "0.77rem", margin: "8px 0" }} >Lorem ipsum dolor sit amet,consesetetur sandipscing elitr , seddiam nonumy eirmod</p>
      <p style={{ fontSize: "0.77rem" }} >Know More <HiMiniArrowRightCircle /></p>
    </div>,

  ];

  return (
    <div className="App">
      <LoremIpsumNavbar />
      <LoremIPsumLandingPage images={images} />
      <LoremIpsumCardPage cards={cards} />
      <LoremIpsumNumberPage />
      <LoremIpsumFAQpage faqData={faqData} />
      <LoremIpsumFooter />
    </div>
  );
}

export default App;
