import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from "next/link"
import styled from 'styled-components';
import LineThrough from './linethrough';
import MainLogo from './mainlogo';

const BandeauInfo = () => {

  return (
    <div style={{ backgroundColor: "#363c51", overflow: "hidden" }}>
      <DivContainer className="menuInfo">
        <Link href="/">
          <a className="info">
            <MainLogo/>
          </a>
        </Link>
        
        <motion.div 
          className='aside'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.25, ease: "easeOut", delay:0.9}}
        >
          <div className="info">
            <Image className="svg-img" src="/images/clock.svg" width={40} height={40} layout="fixed" />
            <div className="texteInfo">
              <div><em>Lundi - Mardi - Jeudi - Vendredi</em></div>
              <div style={{textAlign:"center"}}><em>9h00 à 16h00</em></div> 
            </div>
          </div>

          <div className="info">
            <Image src="/images/phone-mail.svg" width={40} height={40} layout="fixed"/>
            <div className="texteInfo">
              <em>
                <a href="tel:0624861010">06 24 86 10 10</a><br/>
                <a href="mailto:votha_chheng@gmx.fr">votha_chheng@gmx.fr</a>
              </em>
              
            </div>
          </div>
          <div className="info">
            <Image src="/images/location.svg" width={40} height={40} layout="fixed"/>
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

  .line-through{
    z-index: 2;
  }
  
  .aside {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: var(--font-info);
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

`

export default BandeauInfo;