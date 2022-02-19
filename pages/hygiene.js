import Hero from "@/components/hero";
import MainContainer from "@/components/maincontainer";
import { motion } from "framer-motion";
import { useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import Image from "next/image"
import Head from "next/head";

const HygienePage = () => {
  const [sectionInView, setSectionInView] = useState(false)

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
        <title>Dr Sylvie Ma || Cabinet dentaire l&apos;Envolée || Prévention dentaire</title>
      </Head>
      <MainWrapper>
        <Hero img="prevention-2.jpg" title="Prévention dentaire" />
        <MainContainer>
        <div className="h3-title">
          <h3>
            Le coin hygiène
          </h3>
        </div>
        <section>
          <p>
            Pour assurer la pérennité de nos traitements il est essentiel d&apos;enseigner les bons gestes d&apos;hygiène bucco-dentaire que vous pourrez réaliser chez vous. Au cabinet une salle est dédiée à l&apos;en&shy;seignement des techniques d&apos;hy&shy;giène bucco-dentaire et des conseils sur le matériel vous sera fourni. Ces techni&shy;ques sont essentielles à maîtri&shy;ser lors d&apos;atteinte du système d&apos;at&shy;tache de la dent appelée <em>maladie parodontale</em>.
          </p>
          <div className="img-coin">
            Image coin hygiène
          </div>
        </section>
          <div className="h3-title">
            <h3>
              <motion.div
                variants={titleFadeIn}
                initial="initial"
                animate={ sectionInView ? "animate" : ""}
              >
                Quelques conseils
              </motion.div>
            </h3>
          </div>
          <section>
            <InView 
              onChange={(inView, entry)=> inView && setSectionInView(true)} 
              style={{position:"absolute", top:"75px"}} 
            />
            <motion.ul
              variants={parentList}
              initial="initial"
              animate={ sectionInView ? "animate" : ""}
            >
              <motion.li variants={childList}>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Pour les enfants et les jeunes de 3 à 24 ans, pensez au programme &ldquo;M&apos;T DENTS&rdquo; : c&apos;est un examen bucco-dentaire complet gratuit (vous n&apos;avez pas à avancez de frais) disponible tous les 3 ans.<br/>
                  <span className="important">Lors de votre prise de rendez-vous, veuillez indiquer ce motif. Munissez-vous du formulaire &ldquo;M&apos;T DENTS&rdquo; disponible votre compte Ameli. Pour plus de détails, rendez-vous sur le site <a href="https://www.ameli.fr/assure/sante/themes/carie-dentaire/mt-dents" target="_blank" rel="noopener noreferrer">ameli.fr</a>.</span>
                </div>
              </motion.li>
              <motion.li variants={childList}>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Brossez-vous les dents au moins 2 fois par jour en partant de la gencive vers la dent. Toutes les faces de la dent doivent être brossées. 
                </div>
              </motion.li>
              <motion.li variants={childList}>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Complétez votre brossage le pas&shy;sage du fil dentaire afin d&apos;éliminer la plaque dentaire rési&shy;duelle dans les espaces inter&shy;dentaires. Cepen&shy;dant, le fil dentaire doit être manipulé avec prudence de manière à ne pas léser les gencives.<br/>
                  Si les espaces interdentaires sont larges, ou alors en cas de problèmes de gencives ou bien lors d&apos;un traitement d&apos;orthodontie, l&apos;utili&shy;sa&shy;tion de brossettes interdentaires est préconisée.
                </div>
              </motion.li>
              <motion.div className="illustration" variants={childList}>
                <div className="img-container">
                  <Image src="/images/brossettes.jpg" layout="fill" objectFit="cover"/>
                </div>
                <small>Exemple de brossettes de marque Curaprox®</small>
              </motion.div>
              <motion.li variants={childList}>
                <div>
                  <i className="fa-solid fa-circle-play"></i>
                </div>
                <div>
                  Ne laissez pas le tartre s&apos;accumuler sur vos dents. Un détartrage chez le dentiste est conseillé tous les ans. Il est impossible d&apos;enlever le tartre avec une brosse à dent.
                </div>
              </motion.li>
            </motion.ul>
          </section>
        </MainContainer>
      </MainWrapper>
    </div>
    
  );
}

const MainWrapper = styled.main`
  height: 100%;
  overflow: hidden;

  .important{
    color: black;
    font-style: italic;

    a{
      text-decoration: underline;
      text-underline-offset : 2.5px;
    }
  }

  .img-coin{
    width:500px; 
    height:300px;
    margin:0 auto;
    border: 5px solid red;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .illustration{
    width: 550px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .img-container{
      position: relative;
      width: 100%;
      height: 100%;
    }
    small{
      text-align: center;
    }
  }

  @media (max-width:768px){
    margin-top: 100px;
    
    ul{
      padding: 0 15px;
    }
    .illustration {
      width:100%;
    }
    .img-coin{
      width:100%;
    }
  }
`
export default HygienePage;