import Hero from "@/components/hero";
import MainContainer from "@/components/maincontainer";
import { motion } from "framer-motion";
import { useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";

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
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Venez non accompagné, dans la mesure du possible.
              </div>
            </li>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Lavez-vous les mains et les dents avant de venir.
              </div>
            </li>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Portez votre masque pour venir au cabinet.
              </div> 
            </li>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Réduisez vos effets personnels au minimum dans la mesure du possible.
              </div>
            </li>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Privilégiez les paiements par carte bancaire.
              </div>
            </li>
          </ul>

          <ul>
            <div className="first-div">
              Lors de votre arrivée au cabinet :
            </div>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Respectez les distances sociales.
              </div>
            </li>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Evitez les contacts.
              </div>
            </li>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Lavez vos mains avec la solution hydro-alcoolique fournie à l’accueil.
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
            Lors de votre premier rendez-vous, un questionnaire médical à remplir vous sera donné. Les renseignements demandés serviront à adapter ou ajuster votre parcours de soins.
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
            variants={parentList}
            initial="initial"
            animate={sectionTwoInView ? "animate" : ""}
          >
            <motion.li
              variants={childList}
            >
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Par le tramway, arrêt Charles de Gaulle ligne 2.
              </div>
            </motion.li>
            <motion.li
              variants={childList}
            >
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                En voiture, parking TAM Charles de gaulle (payant) puis sortir tram Charles de gaulle.
              </div> 
            </motion.li>

            <motion.li
              variants={childList}
            >
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Le cabinet est situé dans la résidence du Prado concorde bâtiment l’Envolée, entrée par le portail puis 1ere à droite.
              </div>
            </motion.li> 
          </motion.ul>
        </section> 
      </MainContainer>
      
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  overflow: hidden;

  ul .first-div{
    color:black; 
    text-decoration:underline; 
    text-underline-offset:2.5px;
  }
`

export default InfosPratiques;