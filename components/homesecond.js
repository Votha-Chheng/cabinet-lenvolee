import { useEffect, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import Image from "next/image";
import LineThrough from "./linethrough";
import { motion, useAnimation } from "framer-motion";
import { useTriggerInview } from "context/BgColorContext";
import ButtonCall from "./buttoncall";
import Hometitle from "./hometitle";

const HomeSecond = () => {
  const [secondBandeauTrigger, setSecondBabdeauTrigger] = useState(false)

  const {triggerInView, triggerOne, triggerOnce, triggerInViewOnce} = useTriggerInview()

  const controls = useAnimation()

  useEffect(()=>{
    if(triggerOnce){
      controls.start("animation")
    }  
  }, [triggerOnce, controls])

  const parentLinesAnimation = {
    start:{

    },
    animation:{
      transition:{
        delayChildren: 0.75,
        staggerChildren : 0.2
      } 
    }
  }

  const childrenVerticalLinesToBottom = {
    start: {
      y:"-120%"
    },
    animation: {
      y:0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },  
  }
  const childrenVerticalLinesToTop= {
    start: {
      y:"120%"
    },
    animation: {
      y:0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  }
  const childrenLineToRight= {
    start: {
      x:"-100%"
    },
    animation: {
      x:0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  }
  const childrenFadeIn = {
    start: {
      x:-50,
      y:"-50%",
      opacity: 0
    },
    animation: {
      x:0,
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    },
  }

  const lineToLeft = {
    initial :{
      x: "100%"
    },
    animate :{ 
      x: 0,
      transition:{
        duration:0.25,
        delay:0.25,  
        ease:"easeOut"
      }
    }
  }

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
        delay:0.4, 
        ease:"easeOut"
      }
    }
  }

  return (
    <DivWrapper style={{backgroundColor:`${triggerOne ? "whitesmoke" : "#363c51"}`}}>
      <InView 
        className="trigger-1 second"
        onChange={triggerInView}
        style={{backgroundColor:`${triggerOnce ? "#d6d6d6": "whitesmoke"}`}}
      />
      <InView 
        className="trigger-1"
        onChange={triggerInViewOnce}
      />
      <Hometitle 
        triggerLine={triggerOnce} 
        title="Un cabinet dentaire <br/> à taille humaine"
        lineColor='var(--main-bgcolor)'
      />
      <motion.div 
        className="menuInfo container-bandeau"
        variants={parentLinesAnimation}
        initial="start"
        animate={controls}
      >
        <motion.div className="vertical-line left" variants={childrenVerticalLinesToBottom}>
          <LineThrough width="2px" height="100%" backgroundColor="var(--main-bgcolor)" />
        </motion.div>
        <motion.div 
          className="vertical-line up"
          variants={childrenVerticalLinesToTop}
        >
          <LineThrough width="2px" height="100%" backgroundColor="var(--main-bgcolor)" />
        </motion.div>
        <motion.div 
          className="vertical-line up-responsive"
          variants={childrenVerticalLinesToTop}
        >
          <LineThrough width="2px" height="100%" backgroundColor="var(--main-bgcolor)" />
        </motion.div>
        <motion.div 
          className="vertical-line right"
          variants={childrenVerticalLinesToBottom}
        >
          <LineThrough width="2px" height="100%" backgroundColor="var(--main-bgcolor)" />
        </motion.div>
        {/* <motion.div 
          className="vertical-line down"
          variants={childrenVerticalLinesToTop}
          initial="start"
          animate={secondBandeauTrigger && "animation"}
        >
          <LineThrough width="2px" height="100%" backgroundColor="var(--main-bgcolor)" />
        </motion.div> */}
        {/* <motion.div 
          className="vertical-line down-responsive"
          variants={childrenVerticalLinesToTop}
          initial="start"
          animate={secondBandeauTrigger && "animation"}
        >
          <LineThrough width="2px" height="100%" backgroundColor="var(--main-bgcolor)" />
        </motion.div> */}
        {/* <motion.div 
          className="horizontal-line between"
          variants={childrenLineToRight}
        >
          <LineThrough width="90%" height="2px" backgroundColor="var(--main-bgcolor)" />
        </motion.div> */}
        <motion.div 
          className="horizontal-line bottom"
          variants={lineToLeft}
          initial="initial"
          animate={`${triggerOnce && "animate"}`}
        >
          <LineThrough width="90%" height="2px" backgroundColor="var(--main-bgcolor)" />
        </motion.div>
        <div className="bandeau-first" style={{position:"relative"}}>  
          <div className="flex-container"> 
            <motion.div 
              className="line-container"
              variants={childrenFadeIn}
            >
              <LineThrough width="100%" height="200px" backgroundColor="var(--main-color-text)" />  
            </motion.div>
              
            <motion.div 
              className="description-img"
              initial={{opacity: 0}}
              animate={triggerOnce && {opacity: 1}}
              transition={{duration: 0.75, delay: 1.5, ease:"easeInOut"}}
            >
              <h2>Sylvie MA-FRANCIN</h2>
              <h2 className="nom-citation">Chirurgienne dentiste depuis 2010</h2>
              <p>
                <i className="fa-solid fa-quote-left"/>
                  Forte de 10 ans d&apos;expérience dans la dentisterie, l&apos;aspect esthétique du sourire tient une part aussi importante que le soin dans mon approche. In id esse amet excepteur exercitation excepteur.
                <i className="fa-solid fa-quote-right"/>
              </p>
            </motion.div>
            <motion.div
              className="img-container"
              style={{position:"relative"}}
              variants={photoFadeIn}
              initial="initial"
              animate={triggerOnce && "animate"}
            >
              <Image src="/images/portrait.jpg" layout="fill" objectFit="cover" alt=""/>
            </motion.div>
          </div>
        </div>

        {/* <div className="bandeau-first" style={{position:"relative"}}>
          <div className="flex-container">
            <motion.div 
              className="line-container second"
              initial={{opacity:0, x:50, y:"-50%"}}
              animate={secondBandeauTrigger ? {opacity:1, x:0} : ""}
              transition={{duration: 0.25, delay:1, ease:"easeOut"}}
            >
              <LineThrough width="100%" height="200px" backgroundColor="var(--main-color-text)"/>
            </motion.div>   
            <motion.div 
              className="img-container"
              variants={photoFadeIn}
              initial="initial"
              animate={secondBandeauTrigger && "animate"}
            >
              <Image src="/images/nurse-pose.jpg" layout="fill" objectFit="cover" alt=""/>
            </motion.div>
            
            <motion.div 
              className="description-img"
              initial={{opacity: 0}}
              animate={secondBandeauTrigger && {opacity: 1}}
              transition={{duration: 0.75, delay: 0.75, ease:"easeInOut"}}
            >
              <h2>Christelle NOM DE FAMILLE</h2>
              <h2 className="nom-citation">Assistante dentaire</h2>
              
              <p>
                <i className="fa-solid fa-quote-left"/>
                  In id esse amet excepteur exercitation excepteur. Veniam sit dolor esse fugiat elit veniam esse laboris cupidatat ex dolore ipsum. Cillum ipsum ut laborum elit velit qui aliquip ad sint sunt excepteur et nostrud.
                <i className="fa-solid fa-quote-right"/>
              </p> 
            </motion.div> 
          </div>
          <InView onChange={(inView, entry)=> inView && setSecondBabdeauTrigger(true)} />  
        </div> */}
      </motion.div>
      <motion.div 
        className="button-call"
        initial={{opacity:0, y:75}}
        animate={triggerOne ? "" : {opacity:1, y:0}}
        transition={{duration:0.25, ease:"easeOut"}}
      >
        <ButtonCall/>
      </motion.div>  
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: background-color 0.3s ease-out;
  overflow: hidden;

  .trigger-1{
    position: absolute;
    top:30%;
    width:100%;
    transition: background-color 0.3s ease-out;
    transition-delay: 1.75s;
    transition-property: background-color ;
    
    &.second{
      height:15%;
    }
  }

  h3{
    color : var(--main-bgcolor);
    font-size:3.75rem;
    text-align:center;
    margin :50px 0 150px ;
    font-family:var(--serif-font);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-style:italic;
  }
  .container-bandeau{
    position: relative;

    .vertical-line{
      width:2px; 
      position: absolute;
      z-index:2;

      &.left{
        left:0;
        top:0;
        height:110%;
      }
      &.right{
        right:0;
        top:0;
        height:112%;
      }
      &.up{
        right:350px;
        top:0;
        height:107.5%;
      }
      &.down{
        left:500px;
        bottom:0;
        height:55%;
      }
      &.down-responsive{
        display: none;
      }
      &.up-responsive{
        display: none;
      }
    }
    .horizontal-line{
      height:2px;
      position: absolute;
      z-index:2;

      &.between{
        width:117.5%;
        top:50%;
        left:-10%;
      }
      &.bottom{
        width:115%;
        bottom:0;
        right:-95px;
      }
    } 
  }

  .bandeau-first{
    .flex-container{
      height:500px;
      display: flex;
      justify-content: space-around;
      column-gap:25px;
      margin: 0 auto;
      position: relative;
      /* border:5px solid red; */

      .line-container{
        position: absolute;
        width: 100%;
        transform:translate(0, -50%);
        top: 60%;
        left: 4%;

        &.second{
          left: auto;
          top: 55%;
          right:7.5%;
        }
      }

      .img-container{
        height:100%;
        min-width:350px;
        position: relative;
      }

      .description-img{
        width: 100%;
        align-self:center;
        padding: 0 20px;
        z-index:1;
        
        h2{
          text-align: center;
          margin: 0;
          font-size: 2.5rem;
          letter-spacing: 2px;
          font-family: var(--serif-font);
          color: var(--main-bgcolor);
          
          &.nom-citation{
            text-transform: none;
            font-style: italic;
            font-size: 1.25rem;
            margin-left: -5px;
            font-weight: 600;
          }
        }
        p{
          color: #433e3f;
          font-family: var(--font-family-text);
          font-weight:bold;
          font-size: 1.25rem;
          letter-spacing: 1px;

          i.fa-quote-left{
            transform:translateY(-10px); 
            margin-right:10px;
          }
          i.fa-quote-right{
            transform:translateY(10px); 
            margin-left:10px;
          }
        }
      }
    }
    
  }
  .button-call{
    padding: 200px 0 0;
  } 

  @media (max-width:1360px){
    .container-bandeau {
      width: 95%;

      .vertical-line{
        width:2px; 
        position: absolute;
        z-index:2;

        &.up{
          display: none;
        }
        &.down{
          display: none;
        }
        &.down-responsive{
          left:350px;
          bottom:0;
          height:55%;
          display: block;
        }
        &.up-responsive{
          right:350px;
          top:0;
          height:105%;
          display: block;
        }
      }
    }
    .bandeau-first{
      .flex-container{
        height:450px;
        width: 100%;

        .line-container{
          width:90%;
        }

        .img-container {
          min-width: 350px;
        }
      }
    }
  }

  @media (max-width:768px){
    display: none;
  }
  
`

export default HomeSecond;