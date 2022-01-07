import styled from "styled-components";
import Image from "next/image"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Modal from "./modal";
import { useTriggerInview } from "@/context/BgColorContext";
import ImageModal from "./imagemodal";
import LineThrough from "./linethrough";

const VerticalCarousel = ({triggerAnim, triggerColorLines}) => {

  const [imgModal, setImgModal] = useState("")
  const [mediaQuery, setMediaQuery] = useState(0)

  const {show, setShow} = useTriggerInview()

  const widthRef = useRef()

  useEffect(()=>{
    if(widthRef.current){
      setMediaQuery(widthRef.current.offsetWidth)
    }
  }, [mediaQuery])

  const getImgId = (event)=>{
    setImgModal(event.target.id)
    setShow(true)
  }

  const topBoxAnim = {
    initial: {
      y:-1875
    },
    animate : {
      y: [-1875, 1875],
      transition : {
        duration : 40,
        delay:20,
        ease : "linear",
        repeat: "Infinity"
      }
    }
  }
  const middleBoxAnim = {
    initial: {
      y:-1875*2
    },
    animate : {
      y: [-1875*2, 0],
      transition : {
        duration : 40,
        ease : "linear",
        repeat: "Infinity"
      }
    }
  }

  const rightTopBoxAnim = {
    initial: {
      y:1875
    },
    animate : {
      y: [1875, -1875],
      transition : {
        duration : 60,
        ease : "linear",
        repeat: "Infinity"
      }
    }
  }
  const rightMiddleBoxAnim = {
    initial: {
      y:0
    },
    animate : {
      y: [0, -1875*2],
      transition : {
        duration : 60,
        delay:30,
        ease : "linear",
        repeat: "Infinity"
      }
    }
  }

  return (
    <CarouselWrap ref={widthRef}>
      <div className="row-box">
        <motion.div 
          className="col-box"
          initial={{opacity:0}}
          animate={triggerAnim ? {opacity:1} : ""}
          transition={{duration:1, delay:0.25, ease:"easeOut"}}
        >
          <motion.div 
            className="line-box left"
            initial={{y:"-100%"}}
            animate={triggerAnim ? {y:0} : ""}
            transition={{duration:1, delay:0.75, ease:"easeOut"}}
          >
            <LineThrough height="100%" width="2px" backgroundColor={triggerColorLines ? "var(--main-color-text)":"whitesmoke"}/>
          </motion.div>
          <motion.div 
            className="col-1"
            variants={mediaQuery>769 ? topBoxAnim : ""}
            initial="initial"
            animate="animate"
          > 
            <div className="img-small-container">
              <ImageModal img='lobby' getImgId={getImgId}/>
            </div>
            <div className="img-small-container">
              <ImageModal img='accueil-one' getImgId={getImgId}/>
            </div>
            <div className="img-small-container">
              <ImageModal img='entree' getImgId={getImgId}/>
            </div> 
          </motion.div>

          <motion.div 
            className="col-2"
            variants={mediaQuery>769 ? middleBoxAnim : ""}
            initial="initial"
            animate="animate"
          >
            <div className="img-small-container">
              <ImageModal img='lobby' getImgId={getImgId}/>
            </div>
            <div className="img-small-container">
              <ImageModal img='accueil-one' getImgId={getImgId}/>
            </div>
            <div className="img-small-container">
              <ImageModal img='entree' getImgId={getImgId}/>
            </div>         
          </motion.div>           
        </motion.div>

        <motion.div 
          className="line-box between"
          initial={{y:"-100%", x:"-50%"}}
          animate={triggerAnim ? {y:0, x:"-50%"} : ""}
          transition={{duration:1, delay:1, ease:"easeOut"}}
        >
          <LineThrough height="100%" width="2px" backgroundColor={triggerColorLines ? "var(--main-color-text)":"whitesmoke"}/>
        </motion.div>

        <motion.div 
          className="col-box"
          initial={{opacity:0}}
          animate={triggerAnim ? {opacity:1} : ""}
          transition={{duration:1, delay:0.5, ease:"easeOut"}}
        >
          <motion.div 
            className="line-box right"
            initial={{y:"-100%"}}
            animate={triggerAnim ? {y:0} : ""}
            transition={{duration:1, delay:1.25, ease:"easeOut"}}
          >
            <LineThrough height="100%" width="2px"  backgroundColor={triggerColorLines ? "var(--main-color-text)":"whitesmoke"}/>
          </motion.div>
          <motion.div 
            className="col-1"
            variants={mediaQuery>769 ? rightTopBoxAnim : ""}
            initial="initial"
            animate="animate"
          >
            <div className="img-small-container">
              <ImageModal img='accueil-3' getImgId={getImgId}/>
            </div>
            <div className="img-small-container">
              <ImageModal img='accueil-2' getImgId={getImgId}/>
            </div>
            <div className="img-small-container">
              <ImageModal img='salle-attente(2)' getImgId={getImgId}/>
            </div>
          </motion.div>

          <motion.div 
            className="col-2"
            variants={mediaQuery>769 ? rightMiddleBoxAnim : ""}
            initial="initial"
            animate="animate"
          >
            <div className="img-small-container">
              <ImageModal img='accueil-3' getImgId={getImgId}/>
            </div>
            <div className="img-small-container">
              <ImageModal img='accueil-2' getImgId={getImgId}/>
            </div>
            <div className="img-small-container">
              <ImageModal img='salle-attente(2)' getImgId={getImgId}/>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
      <Modal show={show}>
        <Image src={`/images/${imgModal}.jpg`} layout="fill" objectFit="contain"/>
      </Modal>
    </CarouselWrap>
  );
}

const CarouselWrap = styled.div`
  display: flex;
  height: 1850px;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;

  .line-box{
    position: absolute;
    z-index: 2;
    width:100%;
    height:100%;
    top:0px;


    &.between{
      width:2px;
      left:50%;
      //transform: translateX(-50%);
    }

    &.left{
      width:2px;
      left:-25px;
    }
    &.right{
      width:2px;
      right:-25px;
    }
  }

  .row-box{
    display: flex;
    flex-direction: row;
    column-gap: 25px;
    height: 100%;
  }

  .col-box{
    display: flex;
    flex-direction: column;
    height: 100%;
    row-gap: 25px;
    position: relative;
    
  }
  .col-1, .col-2, .col-3{
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  }

  .img-small-container{
    z-index: 5;
    position: relative;
  }
  
`
export default VerticalCarousel;