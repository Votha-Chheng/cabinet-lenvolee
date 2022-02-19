import Hero from "@/components/hero";
import MainContainer from "@/components/maincontainer";
import { motion } from "framer-motion";
import { useState } from "react";
import {InView} from "react-intersection-observer";
import Image from 'next/image'
import styled from "styled-components";
import Head from "next/head";

const InfosPratiques = () => {
  const [sectionInView, setSectionInView] = useState(false)
  const [sectionTwoInView, setSectionTwoInView] = useState(false)

  const titleFadeIn = {
    initial : {
      opacity: 0,
      x:75
    },
    animate:{
      opacity: 1,
      x:0,
      transition : {
        duration: 0.5,
        ease:"easeOut"
      }
    }
  }

  const parentList = {
    initial : {

    },
    animate : {
      transition: {
        delayChildren : 0.25,
        staggerChildren : 0.2
      }
    }
  }

  const childList = {
    initial : {
      x:75,
      opacity: 0
    },
    animate : {
      x:0,
      opacity: 1,
      transition: {
        duration : 0.25,
        ease:"easeOut"
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Dr Sylvie Ma || Cabinet dentaire l&apos;Envolée || Infos pratiques</title>
      </Head>
      <MainWrapper>
        <Hero img="infos-hero.jpg" title="Infos pratiques"/>
        <MainContainer>
          <div className="h3-title">
            <h3>
              Protocole covid
            </h3>
          </div>
          <section>
            <ul>
              <div className="first-div">Le jour de votre rendez-vous :</div>
              <li>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Venez non accompagné, dans la mesure du possi&shy;ble.
                </div>
              </li>
              <li>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Lavez-vous les mains et les dents avant de venir.
                </div>
              </li>
              <li>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Le port du masque est obli&shy;ga&shy;toire à l&apos;inté&shy;rieur du cabi&shy;net.
                </div> 
              </li>
              <li>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Réduisez vos effets per&shy;son&shy;nels au mini&shy;mum dans la mesure du possible (tels que les bijoux et autres acces&shy;soires de mode).
                </div>
              </li>
              <li>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Privilégiez les paiements par carte ban&shy;caire.
                </div>
              </li>
            </ul>

            <ul>
              <div className="first-div">
                Lors de votre arrivée au cabinet :
              </div>
              <li>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Respectez les distances so&shy;ciales.
                </div>
              </li>
              <li>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Evitez les contacts.
                </div>
              </li>
              <li>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Lavez vos mains avec la so&shy;lution hydro-alcoolique four&shy;nie à l’ac&shy;cueil.
                </div>
              </li>
            </ul>
          </section>
          <div className="h3-title">
            <h3>
              <motion.div
                variants={titleFadeIn}
                initial="initial"
                animate={ sectionInView ? "animate" : ""}
              >
                Premier rendez-vous
              </motion.div>
            </h3>
          </div>
          <section>
            <motion.p
              initial={{opacity : 0}}
              animate={ sectionInView ? {opacity:1} : ""}
              transition={{delay: 0.5, duration:0.25, ease:"easeOut"}}
            >
              Lors de votre premier rendez-vous, un ques&shy;tionnaire médical à remplir vous sera donné. Les ren&shy;seignements deman&shy;dés ser&shy;viront à adapter ou ajuster votre parcours de soins.
            </motion.p>
            <InView 
              onChange={(inView, entry)=> inView && setSectionInView(true)} 
              style={{position:"absolute", top:"100px"}} 
            />
          </section>
          <div className="h3-title">
            <h3>
              <motion.div
                variants={titleFadeIn}
                initial="initial"
                animate={ sectionTwoInView ? "animate" : ""}
              >
                Accès au cabinet dentaire
              </motion.div>
            </h3>
          </div>
          <section>
            <InView 
              onChange={(inView, entry)=> inView && setSectionTwoInView(true)} 
              style={{position:"absolute", top:"120px"}} 
            />
            <motion.ul
              initial={{opacity:0, y :50}}
              animate={sectionTwoInView ? {opacity:1, y :0} : ""}
              transition={{duration:0.5}}
            >
              Le cabinet se situe dans la résidence L&apos;Envolée. L&apos;entrée de la résidence se trouve à moins de 10 mètres en face de l&apos;arrêt de tramway Charles de Gaulle. Empruntez le portail de droite (inutile de sonner), puis prenez la première à droite.
            </motion.ul>
            <motion.ul
              variants={parentList}
              initial="initial"
              animate={sectionTwoInView ? "animate" : ""}
            >
              <motion.div className="first-div" variants={childList}>
                Transports en commun :
              </motion.div>
              <motion.li
                variants={childList}
              >
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Par le tramway, arrêt Char&shy;les de Gaulle ligne 2.
                </div>
              </motion.li>
              <motion.div className="first-div" variants={childList}>
                En voiture :
              </motion.div>
              <motion.li variants={childList}>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Le Parking TAM souterrain (CAP CONCORDE) est si&shy;tué dans la résidence du Prado, au niveau de l&apos;en&shy;seigne Krys, <em>rue du Prado</em>. Suivez le panneau <em>&quot;Par&shy;king TAM&quot;</em>.
                </div>
              </motion.li> 
              <motion.div
                className="iframe-map"
                variants={childList}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d855.77866373503!2d3.8968055861691653!3d43.62890911296943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af4357c22289%3A0x14583ec9a36522c6!2sOpticien%20Krys%20Castelnau-le-Lez%20-%20Jean%20Jaur%C3%A8s!5e1!3m2!1sfr!2sfr!4v1642636290379!5m2!1sfr!2sfr" 
                  width="400" 
                  height="300" 
                  allowFullScreen="" 
                  loading="lazy"
                  style={{border:"3px solid var(--main-color-text"}}
                />
              </motion.div>
              <motion.li
                variants={childList}
              >
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Parking Place Charles de Gaulle (gratuit 2h) devant la boulangerie <em>Ribeiro</em> puis marcher en direction de l&apos;arrêt de tram Charles de gaulle.
                </div> 
              </motion.li>
              <motion.div 
                className="iframe-map"
                variants={childList}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d880.8677997203906!2d3.8972128292533563!3d43.628027969432935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb79ae6e7ca5afbe!2zNDPCsDM3JzQwLjkiTiAzwrA1Myc1MS45IkU!5e1!3m2!1sfr!2sfr!4v1642635452320!5m2!1sfr!2sfr" 
                  width="400" 
                  height="300" 
                  allowFullScreen="" 
                  loading="lazy"
                  style={{border:"3px solid var(--main-color-text"}}
                />
              </motion.div>
            </motion.ul>
          </section> 
        </MainContainer>
        
      </MainWrapper>
    </div>
    
  );
}

const MainWrapper = styled.main`
  overflow: hidden;

  ul .first-div{
    color:black; 
    text-decoration:underline; 
    text-underline-offset:2.5px;
    margin-left: -10px;
    margin-bottom: 10px;
    font-style: italic;
  }

  li{
    margin: 0 0 25px;
  }

  .iframe-map{
    width:400px;
    height:300px; 
    margin:0 auto 50px;
  }

  @media (max-width:768px){
    margin-top: 100px;
  }
  @media (max-width:490px){
    .iframe-map{
      margin-left:calc(-(100%-400px)/2);
    }
  }
  @media (max-width:440px){
    .iframe-map{
      margin-left:-50px;
    }
  }
`

export default InfosPratiques;