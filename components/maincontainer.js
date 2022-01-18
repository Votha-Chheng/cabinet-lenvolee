import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const MainContainer = ({children}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(()=>{
    setTimeout(() => {
      setIsMounted(true)
    }, 2000)
  }, [isMounted])

  const toBottom = {
    initial : {
      y : "-150%"
    },
    animate: {
      y :0,
      transition : {
        duration : 0.3,
        delay : 1.25,
        ease:"easeOut"
      }
    }
  }
  const toRight = {
    initial : {
      x : "-150%"
    },
    animate: {
      x :0,
      transition : {
        duration : 0.5,
        delay : 1.5,
        ease:"easeOut"
      }
    }
  }
  const toTop = {
    initial : {
      y : "150%"
    },
    animate: {
      y :0,
      transition : {
        duration : 0.3,
        delay : 1.75,
        ease:"easeOut"
      }
    }
  }
  const fadeIn = {
    initial : {
      opacity : 0,
    },
    animate: {
      opacity : 1,
      transition : {
        duration : 0.3,
        delay : 2.25,
        ease:"easeOut"
      }
    }
  }
  return (
    <MainWrapper style={{padding: "150px 0", overflow: "hidden"}}>
      <motion.div className="menuInfo container" style={{backgroundColor:`${isMounted ? "whitesmoke":"#363c51"}`}}>
        <motion.div variants={toBottom} initial="initial" animate="animate" className="vertical left"/>
        <motion.div variants={toTop} initial="initial" animate="animate" className="vertical right"/>
        <motion.div variants={toRight} initial="initial" animate="animate" className="horizontal top"/>
        <motion.div className="horizontal bottom"/>
        <motion.div variants={fadeIn} initial="initial" animate="animate">
          {children}
        </motion.div>
      </motion.div>
    </MainWrapper>
    
  );
}
const MainWrapper = styled.main`
  .container{
    padding: 20px 0 ;
    background-color: whitesmoke;
    position: relative;
    transition: background-color 0.5s ease-out;
  }

  .vertical{
    width: 2px;
    position: absolute;
    background-color:var(--main-color-text);

    &.left{
      top:-3.5%;
      left:0;
      height:105%;
    }
    &.right{
      top:-2%;
      right:0;
      height:105%;
    }
  }
  .horizontal{
    width: 107.5%;
    position: absolute;
    height:2px;
    background-color:var(--main-color-text);

    &.top{
      top:0px;
      left:-2%;
    }
    &.bottom{
      bottom:0;
      left:-5.5%;
    }
  }
`

export default MainContainer;