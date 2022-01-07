import { motion } from "framer-motion";
import styled from "styled-components";
import LineThrough from "./linethrough";

const hometitle = ({triggerLine, title, lineColor}) => {
  const lineToRight = {
    initial :{
      x: "-100%"
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
  const lineToLeft = {
    initial :{
      x: "100%"
    },
    animate :{ 
      x: 0,
      transition:{
        duration:0.25,
        delay:0.5,  
        ease:"easeOut"
      }
    }
  }

  return (
    <TitleWrapper>
      <motion.div
        variants={lineToRight}
        initial="initial"
        animate={`${triggerLine && "animate"}`}
      >
        <LineThrough width="100%" height="2px" backgroundColor={lineColor} />
      </motion.div>

      <motion.h2
        initial={{opacity: 0, y:50}}
        animate={triggerLine && {opacity: 1, y:0}}
        transition={{duration:0.75, ease: "easeInOut"}}
        style={{color: lineColor}}
        dangerouslySetInnerHTML={{__html: title}}/>
      
      <motion.div
        variants={lineToLeft}
        initial="initial"
        animate={`${triggerLine && "animate"}`}
      >
        <LineThrough width="100%" height="2px" backgroundColor={lineColor} />
      </motion.div>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  h2{
    margin : 30px auto;
  }

  @media (max-width : 768px){
    h2{
      margin : 10px auto;
    }
  }


`
export default hometitle;