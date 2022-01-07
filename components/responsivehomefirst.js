import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image"
import LineThrough from "./linethrough";
import {InView} from "react-intersection-observer";
import { useState } from "react";
import { useTriggerInview } from "@/context/BgColorContext";

const ResponsiveHomeFirst = () => {
  const [firstSectionInView, setFirstSectionInView] = useState(false)

  const {triggerOne} = useTriggerInview()

  const parentFadeIn = {
    start:{

    },
    fadeIn:{
      transition: {
        staggerChildren : 0.25,
        delayChildren:0.75
      }
    }
  }
  const childrenFadeIn = {
    start:{
      opacity : 0
    },
    fadeIn:{
      opacity : 1,
      transition: {
        duration : 0.25,
        ease:"easeOut"
      }
    }
  }

  const lineToLeft = {
    initial:{
      x:"100%"
    },
    animate:{
      x:"0%",
      transition: {
        duration : 0.5,
        delay : 1,
        ease: "easeOut"
      }
    }
  }

  const childrenFolderToLeft = {
    hidden:{
      x : "400%",
      opacity : 1
    },
    movement:{
      x : 0,
      opacity: 0,
      transition: {
        duration : 0.5,
        delay: 0.9,
        ease:"easeOut"
      }
    }
  }
  const childrenFolderToRightTop = {
    hidden:{
      x : "-400%",
      opacity: 1,
    },
    movement:{
      x : 0,
      opacity: 0,
      transition: {
        duration : 0.5,
        delay: 0.70,
        ease:"easeOut"
      }
    }
  }
  const childrenFolderToRightBottom = {
    hidden:{
      x : "-400%",
      opacity: 1,
    },
    movement:{
      x : 0,
      opacity: 0,
      transition: {
        duration : 0.5,
        delay: 1.1,
        ease:"easeOut"
      }
    }
  }

  return (
    <ArticleWrapper style={{backgroundColor:`${triggerOne ? "whitesmoke":"#363c51"}`}} >
      <motion.div
        className="flex-item" 
        style={{position:"relative"}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{opacity : {delay:1.75, duration:0.75, ease:"easeOut"}}}
      >
        <Image src="/images/cabinet-filtered-2-small-768.jpg" alt="cabinet chaise dentiste" layout="fill" objectFit="cover"/>
      </motion.div>
      <motion.div 
        className="line-bottom"
        variants={lineToLeft}
        initial="initial"
        animate="animate"
      >
        <LineThrough width="100%" height="2.5px" backgroundColor="var(--main-color-text)" />
      </motion.div>
      <div className="flex-item">
        <div className="quote-responsive">
          <motion.h1
            initial={{opacity:0, y:15}}
            animate={firstSectionInView ? {opacity:1,  y:0} : ""}
            transition={{duration:0.75, ease:"easeOut"}}
          >
            Dr. Sylvie Ma-Francin
          </motion.h1>
          <motion.div
            variants={parentFadeIn} 
            initial="start"
            animate={firstSectionInView ? "fadeIn" : ""}
          >
            <motion.h3
              initial={{opacity:0, y:-15}}
              animate={firstSectionInView ? {opacity:1,  y:0} : ""}
              transition={{opacity: {delay:0.25, duration:0.75, ease:"easeOut"}, y: {delay:0.3, duration:1, ease:"easeOut"}}}
            >
              Chirurgienne dentiste
            </motion.h3>
            <motion.h4>
              <motion.div 
                className='text'
                variants={childrenFadeIn}
              >
                Diplômée de la faculté de Montpellier
              </motion.div>
              <InView onChange={(inView, entry)=> inView && setFirstSectionInView(true)} />
              <motion.div 
                className="folder"
                variants={childrenFolderToRightTop}
                initial="hidden"
                animate={firstSectionInView ? "movement":""}
              />
            </motion.h4>
            <br/>
            <motion.h4>
              <motion.div 
                className='text'
                variants={childrenFadeIn}
              >
                Attachée hospitalier
              </motion.div>
              <motion.div 
                className="folder"
                variants={childrenFolderToLeft}
                initial="hidden"
                animate={firstSectionInView ? "movement":""}
              />
            </motion.h4>
            <br/>
            <motion.h4>
            <motion.div 
              className='text'
              variants={childrenFadeIn}
            >
              D.U. de tabacologie
            </motion.div>
            <motion.div 
              className="folder"
              variants={childrenFolderToRightBottom}
              initial="hidden"
              animate={firstSectionInView ? "movement":""}
            />
            </motion.h4>
          </motion.div>
        </div>
      </div>
    </ArticleWrapper>
  );
}

const ArticleWrapper = styled.article`
  position: relative;
  width: 100%;
  display: none;
  flex-direction: column;
  margin-top: 233px;
  transition: background-color 0.3s ease-out;
  overflow: hidden;

  .flex-item{
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;

    .quote-responsive {
      padding: 20px 10px; 
      z-index: 2;
      font-size: 1.75rem;
      color: var(--main-color-text);
      height: 100%;
      width: 100%;
      text-align: center;
      
      h1{
        font-size: 2rem;
        letter-spacing: 0.75px;
        font-family: var(--serif-font);
        margin:0 0 25px;
        display: inline-block;
        line-height: 2.5rem;
        text-decoration: underline;
        text-underline-offset:2.75px;
        font-weight: normal;
      }

      h3, h4{
        font-family: var(--font-info);
        font-weight: normal;
        font-style: italic;
      }
      h3{
        font-family: var(--serif-font);
        letter-spacing: 1px;
        margin: 0 0 5px;
        font-size: 1.25rem;
      }
      h4{
        margin: 0;
        font-size: 1.1rem;
        letter-spacing: 1.25px;
        font-family: var(--font-family-text);
        z-index: 1;
        position: relative;
        display: inline-block;

        .text{
          z-index: 1;
        }

        .folder{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--main-color-text);
          z-index: -1;
        }
      }
    }
  }
  

  @media (max-width: 768px){
    height:900px;
    width:100%;
    display: flex;
  }
`

export default ResponsiveHomeFirst;