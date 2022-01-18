import styled from "styled-components";
import Hero from "@/components/hero";
import Image from "next/image"
import ImageModal from "@/components/imagemodal";
import { useTriggerInview } from "@/context/BgColorContext";
import Modal from "@/components/modal";
import { useEffect, useRef, useState } from "react";
import MainContainer from "@/components/maincontainer";
import { motion } from "framer-motion";
import {InView} from "react-intersection-observer";

const SoinsPage = () => {
  const [imgModal, setImgModal] = useState("")
  const [mediaQuery, setMediaQuery] = useState(0)
  const [sectionInView, setSectionInView] = useState(false)

  const {show, setShow} = useTriggerInview()

  const widthRef = useRef()

  useEffect(()=>{
    if(widthRef.current){
      setMediaQuery(widthRef.current.offsetWidth)
      console.log(mediaQuery)
    }
  }, [mediaQuery])

  const getImgId = (event)=>{
    setImgModal(event.target.id)
    setShow(true)
  }

  return (
    <MainWrapper ref={widthRef}>
      <Hero img="soins-hero-2.jpg" title="Notre éthique"/>
      <MainContainer>
        <div className="h3-title">
          <h3>Une dentisterie contemporaine</h3>
        </div>
        <section>
          <ul>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div className="texte">
                Aujourd&apos;hui, les évolutions tech&shy;niques et les théra&shy;peutiques mini invasives per&shy;mettent au patient de bénéficier d&apos;une meilleure santé globale. Grâce à ces évolutions, nous pou&shy;vons préserver les dents le plus longtemps possible sur l&apos;arcade et éviter ainsi de les enlever systéma&shy;tique&shy;ment. Ceci fera bénéficier aux patients non seule&shy;ment d&apos;une éco&shy;nomie fi&shy;nancière (en&shy;lever une dent est un acte coûteux à tous les ni&shy;veaux), mais aussi d&apos;une éco&shy;nomie tissulaire pour la mâ&shy;choire.
              </div>
            </li>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Les protocoles de collage ac&shy;tuels nous permet&shy;tent aussi désormais de re&shy;constituer les dents avec un déla&shy;bre&shy;ment mi&shy;nimal.
              </div>
            </li>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div className="texte">
                L&apos;investissement régulier dans des sy&shy;stèmes de radio&shy;gra&shy;phie plus évolués et moins irra&shy;diants permet aux patients d&apos;être exposé à des radiations 90% plus faible qu&apos;avec un système de radiographie argen&shy;tique classique.
              </div>
            </li>
          </ul>
          <div className="img-xray">
            <ImageModal 
              img="xray" 
              border={true}
              getImgId={getImgId} 
              height={mediaQuery<700 ? "400px" : "600px"} 
              width={ mediaQuery<700 ? "100%" : mediaQuery<1162 ? "700px" : "100%"}
            />
            <small style={{textAlign:"center"}}>Notre appareil de radiolographie numérique</small>
          </div>
        </section>

        <div className="h3-title">
          <h3>
            <motion.div
              initial={{opacity:0, x:200}}
              animate={sectionInView ? {opacity:1, x:0} : ""}
              transition={{opacity:{duration: 0.25, ease:"easeOut"}, x:{duration: 0.75, delay:0.1, ease:"easeOut"}}}
            >
              Pour une <em>&laquo;Dentisterie verte&raquo;</em>
            </motion.div>
          </h3>
        </div>
        <section>
          <InView 
            onChange={(inView, entry)=> inView && setSectionInView(true)} 
            style={{position:"absolute", top:"150px"}} 
          />
          <motion.div
            initial={{opacity:0, y:75}}
            animate={sectionInView ? {opacity:1, y:0} : ""}
            transition={{duration: 0.75, delay:0.5, ease:"easeOut"}}
          >
            <p>
              Les préocuppations actuelles liées à l&apos;envi&shy;ronne&shy;ment et une prise en compte de la santé du patient dans sa globalité commencent à prendre de l&apos;ampleur dans la pratique du métier de dentiste. C&apos;est dans cette optique que s&apos;est développée le principe de <em>green dentistry</em> (ou <em>dentisterie verte</em>).
            </p>
            <div className="img-schema">
              <ImageModal 
                img="green-dentisterie" 
                getImgId={getImgId}  
                width={ mediaQuery<480 ? "350px" : ""}
                height={mediaQuery<480 ? "510px":"650px"}/>
              <small>Source : ADF</small>
            </div>
            <p>
              Cette démarche se traduit  par une prise de conscience dans notre pratique quotidienne de l&apos;impact écologique de notre activité, que ce soit au niveau de la consommation (eau, énergie et autres ressources), des décisions d&apos;achat, du choix des prothésistes, etc...
            </p>
            <ul>
              <li>
                <div>
                  <i className="fa-solid fa-right-long"/>
                </div>
                <div>
                  Ainsi, nous faisons notre maximum pour choisir des produits éco-conçus, sans per&shy;turbateur endocrinien (tel que le bis&shy;phénol A par exemple) et fabriqués en France.
                </div>
              </li>
              <li>
                <div><i className="fa-solid fa-right-long"/></div>
                <div>
                  &Eacute;tant situé à 10 mètres de l&apos;arrêt de tram <em>Charles de Gaulle</em> (ligne 2), nous incitons nos patients à utiliser les transports en commun pour se rendre à leur rendez-vous.
                </div>
              </li>
              <li>
                <div><i className="fa-solid fa-right-long"/></div>
                <div>
                  Nos prothésistes dentaires sont tous situés à moins de 20 km du cabinet.
                </div>
              </li> 
            </ul>
          </motion.div>

        </section>
        
      </MainContainer>
      <Modal show={show}>
        <Image src={`/images/${imgModal}.jpg`} layout="fill" objectFit="contain"/>
      </Modal>
    </MainWrapper>
  );
}
const MainWrapper = styled.main`
  position: relative;
  overflow: hidden;

  small{
    font-size: 0.9rem;
  }    

  .img-xray{
    position: relative;
    width: 50%;
    height: 100%;
    margin:50px auto;
    text-align: center;
    overflow: hidden;
  }
  .img-schema{
    width:450px;
    margin:0 auto;
    text-align: center;
  }

  @media (max-width:1162px) {
    .img-xray{
      width: 700px;
    }   
  }
  @media (max-width:768px) {
    margin-top: 100px;
  }
  @media (max-width:700px) {
    section{
      font-size: 1.1rem;
      ul{
        padding:0 10px;
      }
    }
    .img-xray{
      width: 100%;
    }

  }
  @media (max-width:480px) {
    .img-schema{
      width: 350px;   
    } 
  }

`
export default SoinsPage;