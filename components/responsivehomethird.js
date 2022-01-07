import { useTriggerInview } from "@/context/BgColorContext";
import { useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import CarouselResponsive from "./carouselresponsive";
import HomeTitle from "./hometitle";

const ResponsiveHomeThird = () => {
  const [partInView, setPartInView] = useState(false)
  const [carouselInView, setCarouselInView] = useState(false)
 
  const { triggerOne} = useTriggerInview()

  const setPartInViewOnce = (inView, entry)=>{
    inView && setPartInView(true)
  }

  return (
    <DivWrapper style={{backgroundColor:`${triggerOne ? "whitesmoke": "var(--main-bgcolor"}`}}>
      <HomeTitle 
        triggerLine={partInView} 
        lineColor="whitesmoke" 
        title="Un cadre relaxant et raffiné"
        titleColor="whitesmoke"
      />
      <InView as="div" className="inview-line" onChange={setPartInViewOnce} />
      <InView as="div" onChange={(inView, entry)=>inView && setCarouselInView(true)} rootMargin="-150px 0px">
        <CarouselResponsive isInView={carouselInView}/>
      </InView>
      
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  display: none;
  overflow: hidden;
  transition: background-color 0.3s ease-out;
  @media (max-width: 768px){
    display: block;
  }
`

export default ResponsiveHomeThird;