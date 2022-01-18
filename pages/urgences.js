import styled from "styled-components";
import Hero from "@/components/hero";
import MainContainer from "@/components/maincontainer";
import { motion } from "framer-motion";
import { useState } from "react";
import {InView} from "react-intersection-observer";
import ButtonCall from "@/components/buttoncall";

const UrgencesPage = () => {
  const [sectionInView, setSectionInView] = useState(false)
  const [sectionTwoInView, setSectionTwoInView] = useState(false)

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
      <Hero img="soins-hero.jpg" title="Urgences"/>
      <MainContainer>
        <div className="h3-title">
          <h3>
            Service de garde
          </h3>
        </div>
        <section>
          <p>
            Un service de garde est organisé les di&shy;manches et jours fériés par le Conseil de l&apos;Ordre Départemental des Chirur&shy;giens-Den&shy;tistes.
            Vous trouve&shy;rez les co&shy;ordon&shy;nées du chirurgien-dentiste de garde dans vo&shy;tre quo&shy;tidien régional ou en té&shy;léphonant au commis&shy;sa&shy;riat/gen&shy;dar&shy;merie de vo&shy;tre ville, ou bien encore au service d&apos;ur&shy;gence du 15.
          </p>
          <p>
            Vous pouvez également appeler ou vous rendre au service des Urgences du CHU de Montpellier au <a href="https://www.chu-montpellier.fr/fr/a-propos-du-chu/decouvrir/etablissements/gui-de-chauliac" target="_blank" rel="noopener noreferrer">Service de Chirurgie Maxillo-Faciale/Sto&shy;matolo&shy;gie - Hôpital Gui de Chau&shy;liac</a>.
          </p>
          <div className="iframe">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11551.667709015814!2d3.859863130909612!3d43.62908793736093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e2e282718d7d408!2sChirurgie%20maxillo-faciale%20CHU%20Montpellier!5e0!3m2!1sfr!2sfr!4v1642327613410!5m2!1sfr!2sfr" width="360" height="360" style={{border:"0"}} allowFullScreen="" loading="lazy"/>
          </div>
          
        </section>
        <div className="h3-title">
          <h3>
            <motion.div
              initial={{opacity:0, x:100}}
              animate={sectionInView ? {opacity:1, x:0} : ""}
              transition={{opacity:{duration: 0.25, ease:"easeOut"}, x:{duration: 0.75, delay:0.1, ease:"easeOut"}}}
            >
              En cas de saignement après une intervention
            </motion.div>
          </h3>
        </div>

        <section>
          <InView 
            onChange={(inView, entry)=> inView && setSectionInView(true)} 
            style={{position:"absolute", top:"150px"}} 
          />
          <motion.ul
            variants={parentList}
            initial="initial"
            animate={sectionInView ? "animate" : ""}
          >
            <em>A illuster par une photo</em> :
            <motion.li
              variants={childList}
            >
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Munissez-vous d&apos;une com&shy;pres&shy;se sté&shy;rile (ou à défaut d’un tissu propre). Placez-la entre le point de saigne&shy;ment et l&apos;arcade op&shy;po&shy;sée, puis serrez fort pen&shy;dant une di&shy;zaine de minutes.
              </div>
            </motion.li>
            <motion.li
              variants={childList}
            >
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Préférez la position assi&shy;se.
              </div>
            </motion.li>
            <motion.li
              variants={childList}
            >
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Préférez une alimentation froi&shy;de.
              </div>
            </motion.li>
            <motion.li
              variants={childList}
            >
              En cas de persistance, con&shy;tactez tout de suite no&shy;tre équi&shy;pe, ou à défaut, le service de garde ou d&apos;ur&shy;gence.
            </motion.li>
          </motion.ul>
        </section>

        <div className="h3-title">
          <h3>
            <motion.div
              initial={{opacity:0, x:100}}
              animate={sectionTwoInView ? {opacity:1, x:0} : ""}
              transition={{opacity:{duration: 0.25, ease:"easeOut"}, x:{duration: 0.75, delay:0.1, ease:"easeOut"}}}
            >
              En cas de traumatisme dentaire consécutif à une chute ou à un choc
            </motion.div>
          </h3>
        </div>
        <section>
          <InView 
            onChange={(inView, entry)=> inView && setSectionTwoInView(true)} 
            style={{position:"absolute", top:"100px"}} 
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
                Prenez immédiatement con&shy;tact avec no&shy;tre équipe.
              </div>
            </motion.li>
            <motion.li
              variants={childList}
            >
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                <em>S’il y a expulsion d’une dent dé&shy;finitive :</em> le geste d’ur&shy;gen&shy;ce con&shy;siste à récupérer la dent, sans la net&shy;toyer, et à la con&shy;ser&shy;ver dans du <em>sérum phy&shy;siologique ou du lait (si&shy;non la conserver dans sa propre sa&shy;li&shy;ve)</em>. La ré&shy;im&shy;plan&shy;tation, si elle est pos&shy;si&shy;ble, devra se faire aussi rapi&shy;dement que possible.
              </div>
            </motion.li>
            <motion.li
              variants={childList}
            >
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                S’il y a déplacement des dents défi&shy;nitives : le geste d’ur&shy;gence consiste, à chaud, à les repla&shy;cer cor&shy;rec&shy;tement avec la pres&shy;sion des doigts.
              </div>
            </motion.li>
          </motion.ul>
        </section>
      </MainContainer>
      <ButtonCall text="contact"/>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  position: relative;
  margin-bottom: 100px;
  overflow: hidden;

  h3{
    background-color: var(--main-color-text);
    padding: 20px 25px;
    font-family: var(--serif-font);
    font-size: 1.75rem;
    color: var(--main-bgcolor);
    font-weight: bolder;
    text-transform: uppercase;
  }
  p a{
    color:black;
    text-decoration: underline;
    text-underline-offset:2.5px;
    font-style: italic;

    &:hover{
      color : blue;
    }
  }
  .iframe{
    text-align: center;
  }

`

export default UrgencesPage;