import styled from "styled-components";
import Image from "next/image"
import LineThrough from "./linethrough";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Hero = ({img, title}) => {

  const [posXLeft, setPosXLeft] = useState(0)
  const [posXRight, setPosXRight] = useState(0)
  const [h2Height, setH2Height] = useState(0)
  const [h2Width, setH2Width] = useState(0)
  const [bgColor, setBgColor] = useState("#363c51")

  const pageTitleRef = useRef()

  useEffect(() => {
    if(pageTitleRef.current){
      setPosXLeft(pageTitleRef.current.getBoundingClientRect().left)
    }
  }, [posXLeft])

  useEffect(() => {
    if(pageTitleRef.current){
      setPosXRight(pageTitleRef.current.getBoundingClientRect().right)
    }
  }, [posXRight])

  useEffect(() => {
    if(pageTitleRef.current){
      setH2Height(pageTitleRef.current.getBoundingClientRect().height)
    }
  }, [h2Height])

  useEffect(() => {
    if(pageTitleRef.current){
      setH2Width(pageTitleRef.current.getBoundingClientRect().width)
    }
  }, [h2Width])

  useEffect(() => {
    setTimeout(() => {
      setBgColor("whitesmoke")
    }, 1500)
  }, [])

  const halfLine = {
    initial: {
      height: 0
    },
    animate:{
      height: h2Height/2,
      transition: {
        duration:0.15, 
        delay:0.35,
        ease:"linear"
      }
    }
  }
  const halfLineSecond = {
    initial: {
      height: 0
    },
    animate:{
      height: h2Height/2,
      transition: {
        duration:0.15, 
        delay:0.8,
        ease:"linear"
      }
    }
  }
  const toRight = {
    initial: {
      width: 0
    },
    animate:{
      width: h2Width,
      transition: {
        duration:0.3,
        delay:0.5,
        ease:"linear"
      }
    }
  }

  return (
    <HeroWrapper>
      <div className="hero">
        <motion.div 
          style={{position:"relative", width:"100%", height:"100%"}}
          initial={{opacity:0, scale:1.25}}
          animate={{opacity:1, scale:1}}
          transition={{duration:1.2, delay:1.85, ease:"easeOut"}}
        >
          <Image src={`/images/${img}`} layout="fill" objectFit="cover" /> 
        </motion.div>           
      </div>
      <div className="layer">
        <motion.h2 
          ref={pageTitleRef} 
          className="page-title"
          style={{backgroundColor:`${bgColor}`}}
        >
          <motion.div 
            className="line-half top"
            variants={halfLine}
            initial="initial"
            animate="animate"
          >
            <LineThrough width="5px" height={`${(h2Height/2)}px`} backgroundColor="var(--main-color-text)"/>
          </motion.div>
          <motion.div 
            className="line-half bottom"
            variants={halfLine}
            initial="initial"
            animate="animate"
          >
            <LineThrough width="5px" height={`${(h2Height/2)}px`} backgroundColor="var(--main-color-text)"/>
          </motion.div>
          <motion.div 
            className="line top"
            variants={toRight}
            initial="initial"
            animate="animate"
          >
            <LineThrough width={`${h2Width}px`} height="5px" backgroundColor="var(--main-color-text)"/>
          </motion.div>
          <motion.div 
            className="line bottom"
            variants={toRight}
            initial="initial"
            animate="animate"
          >
            <LineThrough width={`${h2Width}px`} height="5px" backgroundColor="var(--main-color-text)"/>
          </motion.div>
          <motion.div 
            className="line-half right-top"
            variants={halfLineSecond}
            initial="initial"
            animate="animate"
          >
            <LineThrough width="5px" height={`${(h2Height/2)}px`} backgroundColor="var(--main-color-text)"/>
          </motion.div>
          <motion.div 
            className="line-half right-bottom"
            variants={halfLineSecond}
            initial="initial"
            animate="animate"
          >
            <LineThrough width="5px" height={`${(h2Height/2)}px`} backgroundColor="var(--main-color-text)"/>
          </motion.div>
          <motion.span 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, delay:2.25}}
          >
            {title}
          </motion.span>
          
        </motion.h2>
        <motion.div 
          className="line left"
          initial={{x:"-100%"}}
          animate={{x:0}}
          transition={{duration:0.35, ease:"linear"}}
        >
          <LineThrough width={`${posXLeft+2.5}px`} height="5px" backgroundColor="var(--main-color-text)"/>
        </motion.div>
        <motion.div 
          className="line right"
          initial={{width:0}}
          animate={{width:posXRight}}
          transition={{duration:0.35, delay:1, ease:"linear"}}
          style={{left:`${posXRight}px`}}
        >
          <LineThrough width="100%" height="5px" backgroundColor="var(--main-color-text)"/>
        </motion.div>
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 100%;

  h2{
    text-transform: capitalize; 
  }
  .hero{
    filter: blur(2px) contrast(125%);
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .layer{
    height: 100%;
    width: 100%;
    position: absolute;
    top:0;
    left:0;

    .page-title{
      background-color: transparent;
      transition: background-color 1s ease-out;
      border: none;

      
    }
    .line-half{
      position: absolute;
      overflow: hidden;
      
      &.top{
        left:-2.5px;
        top:50%;
        transform : rotateZ(180deg);
        transform-origin: center top;
      }
      &.bottom{
        left:-2.5px;
        top:50%;
      }
      &.right-bottom{
        right:-2.5px;
        bottom:0;
        left:auto;
      }
      &.right-top{
        right:-2.5px;
        top:0;
      }
    }

    .line{
      position: absolute;
      height: 5px;
      z-index: 2;

      &.left{
        left:0;
        bottom: -2.5px;
      }
      &.right{
        overflow: hidden;
        bottom: -2.5px;
      }
      &.top{
        overflow: hidden;
        width: 100%;
        height: 5px;
        top: 0;
        left: 0;
      }
      &.bottom{
        overflow: hidden;
        width: 100%;
        height: 5px;
        bottom: 0;
        left: 0;
      }
    }
  }
`

export default Hero;