import styled from "styled-components"
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import LineThrough from "./linethrough";
import { useRouter } from "next/router";

const MenuItems = ({bandeauInView}) => {
  const [firstMenuItemX, setFirstMenuItemX] = useState(0);

  const logoMini = useRef(null)
  const firstMenuItem = useRef(null)

  const history = useRouter()
  const {pathname} = history

  useEffect(()=>{
    setTimeout(()=> {
      setFirstMenuItemX(firstMenuItem.current.offsetLeft)
    }, 500)
  }, [])

  return (  
    <NavStyle aria-label="navigation primaire">
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
              <a><img src="/images/logo.svg" width="125" alt="logo de l'Envolée cabinet dentaire à Castelnau-le Lez, Dr Sylvie Ma-Francin"/></a>
            </Link>
          </li> 
          <li className="item" ref={firstMenuItem}>
            <Link href="/ethique">
              <a>Notre éthique</a>
            </Link>
            <div 
              className={pathname === "/ethique" ? "active" : ""}
              style={{transform: `translateX(${pathname === "/ethique" ? 0: -100}%)`}}
            />
          </li>
          <li className="item">
            <Link href="/hygiene">
              <a>Prévention dentaire</a>
            </Link>
            <div 
              className={pathname === "/hygiene" ? "active" : ""}
              style={{transform: `translateX(${pathname === "/hygiene" ? 0: -100}%)`}}
            />
          </li>
          <li className="item">
            <Link href="/urgences">
              <a>Urgences</a>
            </Link>
            <div 
              className={pathname === "/urgences" ? "active" : ""}
              style={{transform: `translateX(${pathname === "/urgences" ? 0: -100}%)`}}
            />
          </li>
          <li className="item">
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
        className="line-bottom"
        style={{overflow:"hidden", width:"100%"}}
        initial={{x:"-100%"}}
        animate={{x:0}}
        transition={{duration:0.5, delay:0.5, ease:"easeOut" }}
      >
        <LineThrough backgroundColor="var(--main-color-text)"/>
      </motion.div>  
    </NavStyle>
  );
}

const NavStyle = styled.nav`
  position: sticky;
  top: 0;
  background-color: var(--main-bgcolor);
  z-index: 5;
  
  .menu-items{
    display: flex;
    list-style: none;
    width: 80%;
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

  @media (max-width: 1360px){
    ul.menu-items{
      width: 100%;
    }
  }
  @media (max-width: 1160px){
    width: 100%;

    .line-bottom{
      margin-top: 10px;
    }

    ul.menu-items{
      width :90vw;
      margin-left: 15px;
      align-items: space-between;

      li.item{
        padding-top: 10px;
      }

      li.logo-item{
        display: none;
      }
      
    }
  }

  @media (max-width: 935px){
    ul.menu-items{
      li.item{
        font-size: 1.1rem;
      }     
    }
  }

  @media (max-width: 768px){
    display: none;   
  }

`

export default MenuItems;

