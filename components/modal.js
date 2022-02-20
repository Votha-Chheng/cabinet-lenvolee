import { useTriggerInview } from "@/context/BgColorContext";
import { motion } from "framer-motion";
import styled from "styled-components";

const Modal = ({children, show}) => {
  const {setShow} = useTriggerInview()

  return (
    <ModalWrapper style={{display:`${show ? "flex":"none"}`}}>
      <motion.i 
        className="fa-solid fa-circle-xmark fa-3x"
        initial={{opacity:0}}
        animate={show ? {opacity:1} : {opacity:0}}
        transition={{duration:0.5, delay:0.25}}
        onClick={()=>setShow(false)}
      />
      <motion.div 
        className="layer" 
        onClick={()=>setShow(false)}
        initial={{opacity:0}}
        animate={show ? {opacity:1} : {opacity:0}}
        transition={{duration:1, ease:"easeOut"}}
      />  
      <motion.div 
        className="children-container"
        initial={{scale:0.1}}
        animate={show ? {scale:1} : {scale:0.1}}
        transition={{duration:0.5, delay:0.2, ease:"easeOut"}}
      >
        {children}
      </motion.div> 
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  justify-content:center;
  align-items:center;
  z-index:500000;

  .layer{
    width:100vw;
    height:100vh;
    background-color:rgba(0, 0, 0, 0.75);
    position:absolute;
    z-index:50;
  }
  i{
    position:absolute;
    top:5%;
    right:5%;
    z-index:80;
    cursor:pointer;
  }
  .children-container{
    position:relative;
    height:90vh;
    width:100%;
    z-index:60;
    background-color:white;
    overflow:hidden;
  }

  @media (max-width:768px){
    i{
      top:10%;
    }
    .children-container {
      width:500px;
    }
  }

  @media (max-width:500px){
    .children-container{
      width:360px;
    }
  }

  
`

export default Modal;