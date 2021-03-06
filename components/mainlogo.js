import { motion } from "framer-motion";
import styled from "styled-components";
import LineThrough from "./linethrough";

const MainLogo = () => {
  return (
    <LogoDiv>
      <motion.div 
        className="logo-container"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:0.5, ease:"easeOut"}}
      >
        <h1 className="first">L&apos;envolée</h1>
        <div className="sub-logo">
          <div className="line">
            <LineThrough width="100%" height="1.5px" backgroundColor="#D4AB7C"/>
          </div>
          <h1>Cabinet dentaire</h1>
        </div> 
      </motion.div>
      
    </LogoDiv>
  );
}

const LogoDiv = styled.div`
  .logo-container{
    text-transform: uppercase; 
    color: var(--main-color-text);
  }
  
  
  h1.first{
    font-family: var(--font-family-logo);
    letter-spacing: 15px;
    margin: 0;
    text-align: center;
    font-weight: normal;
    line-height: 1.5rem;
    margin: 20px auto 0;
  }

  h1:not(.first){
    font-family : sans-serif;
    font-size: 0.8rem;
    letter-spacing: 4.25px;
    transform: translate(-10px, 0);
    font-family: var(--font-info);
    margin-top: 10px;
    font-weight: lighter;
  }
  .sub-logo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: lighter;
      
    .line{
      width: 30%;
    }
  }
`
export default MainLogo;