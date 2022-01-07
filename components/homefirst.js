import { useTriggerInview } from "context/BgColorContext";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

const HomeFirst = () => {

  const {triggerOne} = useTriggerInview()

  const parentsToBottom = {
    initial: {
      
    },
    animate:{
      transition: {
        staggerChildren : 0.25,
        delayChildren:1
      }
    }
  }

  const childrenToBottom = {
    initial:{
      y:"-150%"
    },
    animate:{
      y:0,
      transition: {
        duration : 0.25,
        ease: "easeOut"
      }
    }
  }
  const childrenToTop = {
    initial:{
      y:"150%"
    },
    animate:{
      y:0,
      transition: {
        duration : 0.25,
        ease: "easeOut"
      }
    }
  }
  const childrenToRight = {
    initial:{
      x:"-250%"
    },
    animate:{
      x:"0%",
      transition: {
        duration : 0.5,
        ease: "easeOut"
      }
    }
  }
  const childrenToLeft = {
    initial:{
      x:"250%"
    },
    animate:{
      x:"0%",
      transition: {
        duration : 0.5,
        ease: "easeOut"
      }
    }
  }
  const parentFadeIn = {
    start:{

    },
    fadeIn:{
      transition: {
        staggerChildren : 0.25,
        delayChildren:3.5
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
        delay: 3.45,
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
        delay: 3.2,
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
        delay: 3.7,
        ease:"easeOut"
      }
    }
  }

  return (
    <MainWrapper style={{backgroundColor:`${triggerOne ? "whitesmoke":"#363c51"}`}} >
      <motion.div className="container"
        
        variants={parentsToBottom} 
        initial="initial" 
        animate="animate" 
      >
        <motion.div 
          variants={childrenToBottom} 
          className="border-left"
          style={{backgroundColor:`${triggerOne ? "whitesmoke":"var(--main-color-text)"}`}}
        />
        <motion.div 
          variants={childrenToTop} 
          className="border-between"
          style={{backgroundColor:`${triggerOne ? "whitesmoke":"var(--main-color-text)"}`}}
        />
        <motion.div 
          variants={childrenToBottom} 
          className="border-right"
          style={{backgroundColor:`${triggerOne ? "whitesmoke":"var(--main-color-text)"}`}}
        />
        <motion.div 
          variants={childrenToRight}
          className="border-bottom-between"
          
        />
        <motion.div 
          variants={childrenToLeft}
          className="border-bottom"
          style={{backgroundColor:`${triggerOne ? "whitesmoke":"var(--main-color-text)"}`}}
        />
        <article className="flex-article">
          <motion.div 
            className="flex-item"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{opacity : {delay:2.5, duration:0.75, ease:"easeOut"}}}
          >
            <Image src="/images/mirror-4-small.jpg" alt="cabinet chaise dentiste" priority layout="fill" objectFit="cover"/>
          </motion.div>
          
        </article>
        <article className="flex-article-2">
          <motion.div
            className="flex-item" 
            style={{position:"relative"}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{opacity : {delay:2.75, duration:0.75, ease:"easeOut"}}}
          >
            <Image src="/images/cabinet-filtered-2-small.jpg" alt="cabinet chaise dentiste" layout="fill" objectFit="cover"/>
          </motion.div>
          <div className="flex-item for-quote">
            <div>
              <div className="quote">
                <motion.h1
                  initial={{opacity:0, y:15}}
                  animate={{opacity:1,  y:0}}
                  transition={{delay:3, duration:1, ease:"easeOut"}}
                >
                  Dr. Sylvie Ma-Francin
                </motion.h1>
                <motion.div
                  variants={parentFadeIn} 
                  initial="start"
                  animate="fadeIn"
                >
                  <motion.h3
                    initial={{opacity:0, y:-15}}
                    animate={{opacity:1,  y:0}}
                    transition={{opacity: {delay:3, duration:1, ease:"easeOut"}, y: {delay:2.75, duration:1, ease:"easeOut"}}}
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
                    <motion.div 
                      className="folder"
                      variants={childrenFolderToRightTop}
                      initial="hidden"
                      animate="movement"
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
                      animate="movement"
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
                    animate="movement"
                  />
                  </motion.h4>
                </motion.div>
              </div>
            </div>
          </div>
        </article>
      </motion.div>
      
    </MainWrapper>
  );
}

const MainWrapper = styled.main`  
  height:900px;
  width:100%;
  overflow: hidden;
  padding: 0 0 275px;
  transition: background-color 0.3s ease-out;

  .container{
    width:1440px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;  
  }

  .border-left, .border-right, .border-between{
    position: absolute;
    width: 1.75px;
    background-color: var(--main-color-text);
    z-index: 2;
  }
  .border-left{
    left: 0;
    top: 0;
    height: 110%;
  }
  .border-right{
    right: -1px;
    top: 0;
    height: 90%;
  }
  .border-between{
    left: 50%;
    top: 0;
    height: 200%;
    width: 2px;
  }

  .border-bottom, .border-bottom-between{
    position: absolute;
    height: 1.75px;
    background-color: var(--main-color-text);
    z-index: 2;
  }
  .border-bottom{
    width: 90%;
    left: -5%;
    bottom: 0px;
  }
  .border-bottom-between{
    width: 52.5%;
    left: 50%;
    top: 50%;
  }

  .text-container{
    position: absolute;
    background-color: white;
    width: 600px;
    height: 200px;
    padding: 15px;

    &.up{
      bottom: 0px;
      right: 0;
    }

    &.bottom{
      top: 0px;
      left: 0;
    }
  }

  article{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .flex-item{
      height: 100%;
      width: 100%;
      position: relative;
      overflow: hidden;

      &.absolute{
        height: 50%;
        position: absolute;
        top:50%;
        //background-color: var(--main-bgcolor);
        opacity: 0;
      }

      &.for-quote{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
      }

      .quote {
        padding: 20px; 
        z-index: 2;
        font-size: 1.75rem;
        color: var(--main-color-text);
        height: 100%;
        width: 75%;
        text-align: center;
        margin: 0 auto;
        
        h1{
          font-size: 2.6rem;
          letter-spacing: 0.75px;
          font-family: var(--serif-font);
          margin:0 0 25px;
          display: inline-block;
          line-height: 2.5rem;
          text-decoration: underline;
          text-underline-offset:2.5px;
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
          font-size: 1.4rem;
        }
        h4{
          margin: 0;
          font-size: 1.2rem;
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
  }

  @media (max-width: 768px){
    display: none;
  }

`

export default HomeFirst;