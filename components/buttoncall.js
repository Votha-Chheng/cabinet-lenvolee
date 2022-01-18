import styled from "styled-components";
import Image from "next/image";
import { useTriggerInview } from "context/BgColorContext";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ButtonCall = ({text}) => {

  const [mediaQuery, setMediaQuery] = useState(0)

  const {triggerOne} = useTriggerInview()

  const widthRef = useRef()

  useEffect(()=>{
    if(widthRef.current){
      setMediaQuery(widthRef.current.offsetWidth)
    }
  }, [mediaQuery])

  const parentsParcoursAnim = {
    initial: {
      
    },
    animate : {
      borderTop: "2px solid whitesmoke",
      borderLeft: "2px solid whitesmoke",
      borderRight: "2px solid whitesmoke",
      backgroundColor: "#363c51",
      transition : {
        delayChildren:0.2,
        borderTop : {
          delay: 0.65
        },
        borderLeft : {
          delay: 0.4
        },
        borderRight : {
          delay: 0.75
        },
        backgroundColor : {
          delay: 1.25
        },
      }  
    }
  }

  const parcoursAnim = {
    initial: {
      x:0,
      y:0,
      opacity:1
    },
    animate : {
      x: [0, -17.5, -17.5, 258.5, 258.5, 13, 13],
      y:[0, 0, -55, -55, 0, 0, -25],
      opacity:0,
      transition : {
        opacity:{
          duration:0.25,
          delay:1.2
        },
        duration: 1.2,
        ease: "linear"
      } 
    }
  }

  return (
    <ButtonWrap ref={widthRef} style={{backgroundColor:`${triggerOne ? "whitesmoke" : "#363c51"}`}}>
      <motion.a href="tel:0624861010" variants={mediaQuery>768 ? parentsParcoursAnim : ""} initial="initial" whileHover="animate" >
        <motion.div 
          className="light"
          variants={parcoursAnim}
        />
        <div className="horizontal top" />
        <div className="horizontal bottom" />
        <div className="vertical last" />
        <div className="phone">
          <div className="phone-black" >
            <Image src="/images/phone.svg" width={30} height={30} layout="fixed"/>
          </div>
          <div className="phone-blue">
            <Image src="/images/phone-blue.svg" width={30} height={30} layout="fixed" />
          </div>  
        </div>
        <span>{text}</span>    
      </motion.a>
    </ButtonWrap>
  );
}

ButtonCall.defaultProps = {
  text: "Penons RDV"
}

const ButtonWrap = styled.div`
  transition: background-color 0.3s ease-out;
  text-align: center;
  margin: 15px auto;

  &>a{
    display: block;
    max-width: 280px;
    margin: 0 auto;
    border-top: 2.5px solid #D4AB7C;
    border-right: 2.5px solid #D4AB7C;
    border-left: 2.5px solid #D4AB7C;
    padding: 10px 25px 15px 50px;
    position: relative;
    background-color: #D4AB7C;
    border-radius: 5px;
    transition: transform 0.25s ease-out;

    span{
      letter-spacing: 2.1px;
      color : #363c51;
      font-style: italic;
      font-size: 1.35rem;
      font-weight: bold;
      text-transform: uppercase;
      font-family:var(--font-serif);
    }

    &:hover{
      transform: scale(1.1);
      background-color: #D4AB7C;

      span{
        color : whitesmoke;
        transition: color 0.25s ease-out;
        transition-delay: 1.25s;
        transition-property: color;
      }
      
      .horizontal.top{
        background-color:whitesmoke;
        transition: background-color 0.1s linear;
        transition-delay: 0.2s;
        transition-property: background-color;
      }
      .horizontal.bottom{
        background-color:whitesmoke;
        transition: background-color 0.1s linear;
        transition-delay: 1s;
        transition-property: background-color;
      }
      .vertical.last{
        background-color:whitesmoke;
        transition: background-color 0.02s linear;
        transition-delay: 1.25s;
        transition-property: background-color;
      }

      .light{
        box-shadow: 0px 0px 10px 3px #0ff;
        background-color:#d2bdff;
        visibility:visible;
      }
      .phone{
        .phone-black{
          opacity: 0;
          transition-delay: 1.25s;
          transition-property: opacity;
        }
        .phone-blue{
          opacity: 1;
          transition-delay: 1.25s;
          transition-property: opacity;
        }
      }
      
    }

    .light{
      position: absolute;
      height: 10px;
      width: 10px;
      background: #d4ab7c;
      bottom: -4px;
      z-index: 2;
      border-radius: 100%;
      left: 12.5px;  
      visibility:hidden;
    }
    
    .vertical{
      position: absolute;
      top: 0;
      width: 2px;
      height: 100%;
      background-color: #d4ab7c;

      &.last{
        left: 30px;
        height: 17.5px;
        bottom: 0;
        top: auto;
      }
    }

    .horizontal{
      position: absolute;
      height: 2px;
      background-color: #d4ab7c;
      
      &.top{
        left: 0;
        bottom: 0;
        height: 2px;
        width: 15px;
      }
      &.bottom {
        bottom:0.25px;
        right:0;
        top: auto;
        width: 245px;
        height: 2px;
      }
    }

    .phone {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);

      .phone-blue{
        position: absolute;
        top:-17.5px;
        opacity: 0;
        transition: opacity 0.2s linear;
        transition-delay: 0.2s;
        transition-property: opacity;
      }
      .phone-black{
        position: absolute;
        top:-17.5px;
        left:0;
        opacity: 1;
        transition: opacity 0.1s linear;
        transition-delay: 0.2s;
        transition-property: opacity;
      }
    }
  }

  @media (max-width:768px){
    &>a {
      &:active{
        transform: scale(1.1);
      }
      &:hover{
        transform: scale(1.1);

        span{
          color : var(--main-bgcolor);
        }
        .horizontal.top{
          background-color:inherit;
        }
        .horizontal.bottom{
          background-color:inherit;

        }
        .vertical.last{
          background-color:inherit;
        }

        .light{
          display : none
        }
        .phone{
          .phone-black{
            opacity: 1;
          }
          .phone-blue{
            display : none;
          }
        }
      }
    }
  }
`


export default ButtonCall;