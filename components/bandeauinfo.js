import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from "next/link"
import { useState } from 'react';
import styled from 'styled-components';
import LineThrough from './linethrough';
import MainLogo from './mainlogo';
import ScrollingMenu from './scrollingmenu';

const BandeauInfo = () => {
  const [sideMenu, setSideMenu] = useState(false)

  return (
    <div style={{ backgroundColor: "#363c51", overflow: "hidden" }}>
      <DivContainer className="menuInfo">
        <Link href="/">
          <a className="info">
            <MainLogo/>
          </a>
        </Link>
        <motion.div 
          className="burger-menu" 
          onClick={()=>setSideMenu(prev=>!prev)}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1, delay:0.5, ease:"easeOut"}}
        >
          <div className="images">
            <img src="/images/burger-menu.svg" width="35" style={{opacity : `${!sideMenu  ? 1 : 0}`}} alt="menu burger" />
            <img src="/images/close.svg" width="20" style={{opacity : `${!sideMenu  ? 0 : 1 }`}}  alt="fermer menu" />
          </div>
          
        </motion.div>
        <motion.div 
          className='aside'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.25, ease: "easeOut", delay:0.9}}
        >
          <nav className={`side-menu ${sideMenu ? "visible":""}`} aria-label="navigation secondaire">
            <ScrollingMenu setSideMenu={setSideMenu}/>
          </nav>
          <div className="info">
            <Image className="svg-img" src="/images/clock.svg" width={40} height={40} layout="fixed" alt="Horaires du cabinet l'Envolée" />
            <div className="texteInfo">
              <div><em>Du Lundi au Vendredi</em></div>
              <div style={{textAlign:"center"}}><em>9h00 à 19h00</em></div> 
            </div>
          </div>

          <div className="info phone-mail">
            <Image src="/images/phone-mail.svg" width={40} height={40} layout="fixed" alt="Contact et e-mail du cabinet l'Envolée"/>
            <div className="texteInfo">  
              <div><em><a href="tel:0467756811">04 67 75 68 11</a></em></div>
              <div>
                <a className='wide' href="mailto:cabinetdentaire.lenvolee@gmail.com">cabinetdentaire.lenvolee@gmail.com</a>
                <a className='responsive' href="mailto: cabinetdentaire.lenvolee@gmail.com">cabinetdentaire.lenvolee<br/>@gmail.com</a>
              </div>   
            </div>
          </div>
          <div className="info local">
            <Image src="/images/location.svg" width={40} height={40} layout="fixed" alt="Localisation du cabinet l'Envolée"/>
            <div className="texteInfo">
              <a href="https://www.google.fr/maps/place/L'envol%C3%A9e+Cabinet+dentaire/@43.6284937,3.895878,17z/data=!4m5!3m4!1s0x12b6af1eb59a905f:0x81b577b1ccc1138e!8m2!3d43.6283792!4d3.8969015" target="_blank" rel="noreferrer">
                Résidence L&apos;Envolée, 3 place Charles de Gaulle<br/>
                34 170 Castelnau-le-Lez
              </a>
            </div> 
          </div>
        </motion.div>
      </DivContainer>

      <motion.div
        initial={{x:"100%"}}
        animate={{x:0}}
        transition={{duration:0.5, delay:0, ease:"easeOut" }}
        className='line-through'
      >
        <LineThrough backgroundColor="#D4AB7C" />
      </motion.div>
    </div>
    
  );
}

const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--main-bgcolor);
  z-index: 5;

  .wide{
    display: block;
  }
  .responsive{
    display: none;
  }

  .burger-menu{
    display: none;
    opacity: 0;
    position: absolute;
    right:10px;
    cursor:pointer;
    top:15%;
    width:30px;
    height:30px;

    .images{
      position: relative;

      img{
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        position: absolute;
        transition: opacity 0.25s ease-out;
      }
    }    
  }

  .line-through{
    z-index: 2;
  }
  
  .aside {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: var(--font-info);
    position:relative;

    .side-menu{
      position:absolute;
      border-left: 2px solid var(--main-color-text);
      width:75vw;
      height:100vh;
      top:0;
      right:0;
      background-color: var(--main-bgcolor);
      transform: translate(100%, 0);
      transition: transform 0.25s ease-out;
      display: none;

      &.visible{
        transform: translate(0, 0);
      }
    }

  }
  .info{
    display: flex;
    align-items: center;
    color: var(--main-color-text);
    font-family: 'Oswald', sans-serif;
    margin-right: 30px;
    
    .texteInfo{
      margin-left: 10px;
      border-left: 2px solid ;
      padding-left: 5px;
      letter-spacing: 1px;
      font-weight: bold;

      a{
        font-style: italic;
      }
    }
  }


  @media (max-width: 1500px){
    .aside{
      width: 825px;
      padding-bottom:7.5px;

      .info{
        .texteInfo{
          font-size: 0.75rem;
        }
      }
    }
  }
  @media (max-width: 1160px){
    flex-direction: column;
    align-items: center;
    width: 100%;

    .aside{
      width:100%;
      border-top: 1.5px solid var(--main-color-text);
      padding-top:7.5px;
    }
  }

  @media (max-width: 768px){
    position: fixed;
    top:0;
    border-bottom:2px solid var(--main-color-text);

    .burger-menu{
      opacity: 1;
      display: block;
      margin: 0;
    }
    .aside{
      flex-direction: column;
      padding: 0;
      
      .side-menu{
        display: block;
      }

      .info{
        width:100%;
        padding-left: 30px;
        padding: 5px 0 5px 30px;

        &:not(.local){
          border-bottom: 1.5px solid var(--main-color-text); 
        }
        .texteInfo{
          display: flex;
          column-gap: 20px;
          font-size: 0.85rem;
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 410px){
    .wide{
    display: none;
  }
  .responsive{
    display: block;
    text-align: center;
  }
  }
`

export default BandeauInfo;