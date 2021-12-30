import styled from "styled-components";
import Image from "next/image";
import { useTriggerInview } from "context/BgColorContext";
import LineThrough from "./linethrough";
import {InView} from "react-intersection-observer";
import { useState } from "react";
import { motion } from "framer-motion";
import Hometitle from "./hometitle";
import VerticalCarousel from "./verticalcarousel";

const HomeThird = () => {
  const {triggerOne} = useTriggerInview()

  const [partInView, setPartInView] = useState(false)
  const [bottomInView, setBottomInView] = useState(false)

  const setPartInViewOnce = (inView, entry)=>{
    inView && setPartInView(true)
  }

  return (
    <MainWrapper style={{backgroundColor:`${triggerOne ? "whitesmoke" : ""}`}}>
      
      <Hometitle 
        triggerLine={partInView} 
        lineColor="whitesmoke" 
        title="Un accueil dans un cadre<br/>relaxant et raffiné"
        titleColor="whitesmoke"
      />
      <InView as="div" className="inview-line" onChange={setPartInViewOnce} />
      <VerticalCarousel triggerAnim={partInView} triggerColorLines={bottomInView} />
      <InView as="div" className="inview-line second" onChange={(inView, entry)=>setBottomInView(inView)} />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  padding-top: 150px;
  transition: background-color 0.3s ease-out;
  position:relative;
  overflow: hidden;

  .inview-line{
    top: 500px;
    position: absolute;
    width: 100%;
    height: 1px;

    &.second{
      top: auto;
      bottom: 0;
    }
  }

  
`

export default HomeThird;