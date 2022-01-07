import styled from "styled-components";
import Image from "next/image"
import LineThrough from "./linethrough";
import { motion } from "framer-motion";
import { useState } from "react";
import {InView} from "react-intersection-observer";

const CardHome = ({image, title, subtitle, text, alignItem}) => {

  const [photoOneTriggerOnce, setPhotoOneTriggerOnce] = useState(false)

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
        ease:"easeOut"
      }
    }
  }
  return (
    <CardWrap style={{display:"flex", flexDirection:"column", alignItems: alignItem}}>
      <motion.div
        className="img-container"
        style={{position:"relative"}}
        variants={photoFadeIn}
        initial="initial"
        animate={photoOneTriggerOnce && "animate"}
      >  
        <Image src={`/images/${image}-768.jpg`} layout="fill" objectFit="cover" alt="photo Sylvie Ma-Francin chirugienne dentiste"/>
        <InView className="photo-1-trigger" onChange={(inView, entry)=> inView && setPhotoOneTriggerOnce(true)} />
      </motion.div>
      <motion.p
        className="description-img"
        initial={{opacity: 0}}
        animate={photoOneTriggerOnce && {opacity: 1}}
        transition={{duration: 0.75, delay: 1, ease:"easeInOut"}}
      >
        <i className="fa-solid fa-quote-left"/>
          {text}
        <i className="fa-solid fa-quote-right"/>
      </motion.p>
      <motion.div 
        className="label-container"
        initial={{x:"-100%"}}
        animate={photoOneTriggerOnce ? {x:0}:""}
        transition={{delay:0.5, duration:0.5, ease:"easeOut"}}
      >
        <h2>{title}</h2>
        <h2 className="nom-citation">{subtitle}</h2>
      </motion.div>
      <motion.div 
        className="line-bottom-pic"
        initial={{x:"100%"}}
        animate={photoOneTriggerOnce ? {x:0} : ""}
        transition={{delay:0.5, duration:0.5, ease:"easeOut"}}
      >
        <LineThrough width="100%" height="2px" backgroundColor="var(--main-bgcolor)" />
      </motion.div>
    </CardWrap>
  );
}

const CardWrap = styled.div`
  margin-bottom: 50px;
  position: relative;

  .photo-1-trigger{
    position: absolute;
    top:50%;
  }

  .line-bottom-pic{
    position: absolute;
    width:100%;
    height:2px;
    left: 0;
    top:460px;
    z-index:2;
  }

  .label-container{
    position: absolute;
    top: 345px;
    background-color: var(--main-color-text);
    width: 100%;
    padding: 10px 0;

    h2{
      text-align: center;
      margin: 0;
      font-size: 1.5rem;
      letter-spacing: 2px;
      font-family: var(--serif-font);
      color: var(--main-bgcolor);

      &.nom-citation{
        text-transform: none;
        font-style: italic;
        font-size: 1rem;
        margin-left: -5px;
        font-weight: 600;
      }
    }
  }

  .img-container{
    height:460px;
    width:360px;
    position: relative;
    
  }
  .description-img{
    width: 100%;
    align-self:center;
    padding: 0 20px;
    z-index:1;
    color: var(--main-bgcolor);
    font-family: var(--font-family-text);
    font-weight:bold;
    font-size: 1.1rem;
    letter-spacing: 1.75px;

    i.fa-quote-left{
      transform:translateY(-10px); 
      margin-right:10px;
    }
    i.fa-quote-right{
      transform:translateY(10px); 
      margin-left:10px;
    }  
  }
`
export default CardHome;