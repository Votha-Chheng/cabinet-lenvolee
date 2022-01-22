import { useTriggerInview } from "@/context/BgColorContext"
import { useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import ImageModal from "./imagemodal"
import Modal from "./modal"
import {InView} from "react-intersection-observer"
import { motion } from "framer-motion"

const CarouselResponsive = ({isInView}) => {
  const [imgModal, setImgModal] = useState("")
  const [touchStartX, setTouchStartX] = useState(0)
  const [translationX, setTranslationX] = useState(0)
  const [bottomInView, setBottomInView] = useState(false)

  const {show, setShow} = useTriggerInview()

  const handleTouchStart = (event)=>{
    setTouchStartX(event.touches[0].clientX + translationX)
  }
  
  const handleTouchMove = (event)=>{
    const X = touchStartX - event.touches[0].clientX

    setTranslationX(X)
  }

  const handleTouchEnd = ()=>{
    if(translationX>1750){
      setTranslationX(1750)
    } else if (translationX<0){
      setTranslationX(0)
    }
  }

  const getImgId = (event)=>{
    setImgModal(event.target.id)
    setShow(true)
  }

  return (
    <CarouselWrapper >
      <motion.div 
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={{transform: `translateX(-${translationX*1.1}px)`}}
        initial={{opacity:0}}
        animate={isInView ? {opacity:1} : ""}
        transition={{duration:0.5, delay:0.25, ease:"easeOut"}}
      >
        <div className={`img-container ${bottomInView && "border-gold"}`} >
          <ImageModal img='lobby' getImgId={getImgId} height="550px" width="100%"/>
        </div>
        <div className={`img-container ${bottomInView && "border-gold"}`}>
          <ImageModal img='accueil-one' getImgId={getImgId} height="550px" width="100%"/>
        </div>
        <div className={`img-container ${bottomInView && "border-gold"}`}>
          <ImageModal img='entree' getImgId={getImgId} height="550px" width="100%"/>
        </div>
        <div className={`img-container ${bottomInView && "border-gold"}`}>
          <ImageModal img='accueil-3' getImgId={getImgId} height="550px" width="100%"/>
        </div>
        <div className={`img-container ${bottomInView && "border-gold"}`}>
          <ImageModal img='accueil-2' getImgId={getImgId} height="550px" width="100%"/>
        </div>
        <div className={`img-container ${bottomInView && "border-gold"}`}>
          <ImageModal img='salle-attente(2)' getImgId={getImgId} height="550px" width="100%"/>
        </div>
      </motion.div>
      <InView as="div" className="inview-line-second" onChange={(inView, entry)=>setBottomInView(inView)} />
      <Modal show={show}>
        <Image src={`/images/${imgModal}.jpg`} layout="fill" objectFit="contain" alt={imgModal}/>
      </Modal>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.section`
  display: none;
  z-index: 2;
  width:100%;

  .carousel-container{
    display: flex;
    justify-content: flex-start;
    column-gap:25px;
    width: 2285px;
    transition: transform 0.2s ease-out;
  }

  .img-container{
    min-width: 360px;
    height:550px;
    position: relative;
    border-left: 2px solid whitesmoke ;
    border-right: 2px solid whitesmoke ;
    transition: border 0.3s ease-out ;

    &.border-gold{
      border-left: 2px solid var(--main-color-text) ;
      border-right: 2px solid  var(--main-color-text) ;
    }
  }
  

  @media (max-width: 768px){
    display: block;
  }
`
export default CarouselResponsive;