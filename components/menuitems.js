import styled from "styled-components"
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import LineThrough from "./linethrough";
import { useRouter } from "next/router";

const MenuItems = ({bandeauInView}) => {
  const [logoWidth, setLogoWidth] = useState(0);
  const [firstMenuItemX, setFirstMenuItemX] = useState(0);

  const logoMini = useRef(null)
  const firstMenuItem = useRef(null)

  const history = useRouter()
  const {pathname} = history

  useEffect(()=>{
    setTimeout(()=> {
      setLogoWidth(logoMini.current.clientWidth)
      setFirstMenuItemX(firstMenuItem.current.offsetLeft)
    },500)
    
  }, [])

  return (  
    <NavStyle>
      <>
        <motion.div
          className="menuInfo" 
          style={{overflow:"hidden"}}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.25, delay:1.1, ease:"easeOut" }}
        >
          <ul className="menu-items" style={{transform:`translateX(-${ !bandeauInView ? 0 : firstMenuItemX}px)`}}>
            <li className="logo-item" ref={logoMini}>
              <Link href="/">
                <a><img src="/images/logo.svg" width="125" /></a>
              </Link>
            </li> 
            <li ref={firstMenuItem}>
              <Link href="/soins">
                <a>Nos soins</a>
              </Link>
              <div 
                className={pathname === "/soins" ? "active" : ""}
                style={{transform: `translateX(${pathname === "/soins" ? 0: -100}%)`}}
              />
            </li>
            <li>
              <Link href="/hygiene">
                <a>Hygiène dentaire</a>
              </Link>
              <div 
                className={pathname === "/hygiene" ? "active" : ""}
                style={{transform: `translateX(${pathname === "/hygiene" ? 0: -100}%)`}}
              />
            </li>
            <li>
              <Link href="/urgences">
                <a>Urgences</a>
              </Link>
              <div 
                className={pathname === "/urgences" ? "active" : ""}
                style={{transform: `translateX(${pathname === "/urgences" ? 0: -100}%)`}}
              />
            </li>
            <li>
              <Link href="/infos">
                <a>Infos pratiques</a>
              </Link>
              <div 
                className={pathname === "/infos"? "active" : ""}
                style={{transform: `translateX(${pathname === "/infos" ? 0: -100}%)`}}
              />
            </li>
          </ul>
        </motion.div>

        <motion.div 
          style={{overflow:"hidden", width:"100%"}}
          initial={{x:"-100%"}}
          animate={{x:0}}
          transition={{duration:0.5, delay:0.5, ease:"easeOut" }}
        >
          <LineThrough backgroundColor="var(--main-color-text)"/>
        </motion.div>  
      </>     
    </NavStyle>
  );
}

const NavStyle = styled.nav`
  position: sticky;
  top: 0;
  background-color: var(--main-bgcolor);
  z-index: 5;
  
  ul.menu-items{
    display: flex;
    list-style: none;
    width: 75%;
    padding: 0;
    justify-content: space-between;
    margin : 0;
    align-items: center;
    overflow: hidden;
    transition: all 0.25s ease-out;

    li{
      font-size:1.3rem;
      font-weight: normal;
      color: var(--main-color-text);
      font-family: var(--serif-font);
      font-weight: 400;
      letter-spacing: 1.75px;
      position: relative;

      .active{
        position: absolute;
        content:"";
        width :100%;
        height: 3px;
        background-color: var(--main-color-text);
        bottom: -5px;
        left: 0;
        transition: transform 0.25s ease-out;
      }
    }

    li.logo-item{
      padding-top: 10px;
    }
  }

`

export default MenuItems;

