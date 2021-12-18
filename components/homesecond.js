import { useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import Image from "next/image";
import LineThrough from "./linethrough";
import { motion } from "framer-motion";
import { useTriggerInview } from "context/BgColorContext";

const HomeSecond = () => {
  const [secondBandeauTrigger, setSecondBabdeauTrigger] = useState(false)

  const {triggerInView, triggerOne, triggerOnce, triggerInViewOnce} = useTriggerInview()

  const photoFadeIn = {
    initial :{
      opacity: 0, 
      y: 50
    },
    animate :{ 
      opacity: 1,
      y: 0,
      transition:{
        opacity: {
          duration:0.75,
        },
        duration:0.5, 
        delay:0.25, 
        ease:"easeOut"
      }
    }
  }

  return (
    <DivWrapper style={{backgroundColor:`${triggerOne ? "whitesmoke" : "#363c51"}`}}>
      <InView 
        className="trigger-1 second"
        onChange={triggerInView}
      />
      <InView 
        className="trigger-1"
        onChange={triggerInViewOnce}
      />
      <h3>Un cabinet dentaire à taille humaine (Partie à terminer)</h3>
      <div className="container-top">
        <motion.div
          className="container-line"
          initial={{x:"-100%"}}
          animate={{x:`${triggerOnce ? 0 : "-100%"}`}}
          transition={{duration: 0.75, delay:0.25}}
        >
          <LineThrough width="100%" height="350px" backgroundColor="#363c51"/>
        </motion.div>
        
        <div className="flex-container">     
          <div className="description-img">
            <motion.h2>
              “Souriez, car vos dents ne sont pas seulement faites pour manger ou pour mordre.”
            </motion.h2>
            <p>
              Forte de 10 ans d&apos;expérience dans dans la dentisterie de soins, l&apos;esthétique y tient aussi une importante part. In id esse amet excepteur exercitation excepteur. Veniam sit dolor esse fugiat elit veniam esse laboris cupidatat ex dolore ipsum.
            </p>
          </div>
          <motion.div
            className="img-container"
            variants={photoFadeIn}
            initial="initial"
            animate={triggerOnce && "animate"}
          >
            <Image src="/images/pose.jpg" layout="fill" objectFit="cover" alt=""/>
          </motion.div>
        </div>
      </div>

      <div className="container-top">
        <motion.div
          className="container-line"
          initial={{x:"100%"}}
          animate={{x:`${secondBandeauTrigger ? 0 : "100%"}`}}
          transition={{duration: 0.75, delay:0.25}}
        >
          <LineThrough width="100%" height="300px" backgroundColor="#363c51"/>
        </motion.div>
        
        <div className="flex-container">   
          <motion.div 
            className="img-container"
            variants={photoFadeIn}
            initial="initial"
            animate={secondBandeauTrigger && "animate"}
          >
            <Image src="/images/nurse-pose.jpg" layout="fill" objectFit="cover" alt=""/>
          </motion.div>  
          <div className="description-img">
            <motion.h2>
              “Citation assistante dentaire”
            </motion.h2>
            <InView onChange={(inView, entry)=> inView && setSecondBabdeauTrigger(true)} />
            <p>
              In id esse amet excepteur exercitation excepteur. Veniam sit dolor esse fugiat elit veniam esse laboris cupidatat ex dolore ipsum. Cillum ipsum ut laborum elit velit qui aliquip ad sint sunt excepteur et nostrud. Commodo dolor nulla aute aliquip ut nulla nisi ea culpa ipsum.
            </p>
            
          </div>
        </div>
      </div>
      
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  transition: background-color 0.3s ease-out;
  overflow: hidden;

  .trigger-1{
    position: absolute;
    top:25%;
    width:100%;
    //height:5px;
    //background: #fff;

    &.second{
      height:25%;
    }
  }

  h3{
    color : var(--main-bgcolor);
    font-size:2.5rem;
    text-align:center;
    margin :0 0 175px ;
  }
  .container-top{
    width:100%;
    height:800px;
    position:relative;

    .container-line{
      position: absolute;
      width: 100%;
      top:210px;
      left:0;
      z-index:0;
    }
    
    .flex-container{
      width:1440px;
      height:100%;
      display: flex;
      justify-content: space-around;
      column-gap:75px;
      margin: 0 auto;

      .description-img{
        width: 100%;
        align-self:center;
        z-index:1;
        
        h2{
          text-align: center;
          text-transform: uppercase;
          margin: 0;
          font-size: 2.5rem;
          letter-spacing: 2px;
          font-family: var(--serif-font);
          color: #D4AB7C;
          font-style: italic;
        }
        p{
          color: whitesmoke;
          font-family: var(--font-info)
        }
      }
      .img-container{
        height:100%;
        width:100%;
        position: relative;
      }
    }  
  }
  
  h3{
    color: var(--main-bgcolor);
    text-align: center;
    //margin: 0;
    font-size: 2.75rem;
    font-style: italic;
    font-family: var(--serif-font);
    letter-spacing: 1.75px;
  }
`

export default HomeSecond;