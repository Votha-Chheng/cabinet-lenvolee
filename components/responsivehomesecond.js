import { useTriggerInview } from "@/context/BgColorContext";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import HomeTitle from "./hometitle";
import CardHome from "./cardhome";
import ButtonCall from "./buttoncall";

const ResponsiveHomeSecond = () => {
  const {triggerInView, triggerOne, triggerOnce, triggerInViewOnce} = useTriggerInview()

  return (
    <SectionWrapper style={{backgroundColor:`${triggerOne ? "whitesmoke" : "#363c51"}`}}>
      <HomeTitle
        triggerLine={triggerOnce} 
        title="Un cabinet dentaire <br/> à taille humaine"
        lineColor='var(--main-bgcolor)'
      />
      <InView 
        as="div"
        className="trigger-1"
        onChange={triggerInViewOnce}
      >
        <InView 
          as="div"
          className="trigger-2"
          onChange={triggerInView}
        />
      </InView>
      <CardHome 
        image = "portrait" 
        title = "Sylvie MA-FRANCIN" 
        subtitle = "Chirurgienne dentiste depuis 2010" 
        text = "Bien que docteure en chirurgie dentaire et praticienne depuis maintenant plus de 10 ans, il me tient toujours à c&#339;ur de me former aux techniques contemporaines de la dentisterie, et me perfectionner dans ma pratique ; et ce, du diagnostic jusqu&apos;au traitement, en passant par la dimension esthétique. Ainsi, c&apos;est dans une atmosphère professionelle - et néanmoins conviviale - que j&apos;aurai le plaisir de vous accueillir au sein du cabinet." 
        alignItem="center"
        />

      {/* <CardHome 
        image = "nurse-pose" 
        title = "Christelle NOM DE FAMILLE" 
        subtitle = "Assistante dentaire" 
        text = "In id esse amet excepteur exercitation excepteur. Veniam sit dolor esse fugiat elit veniam esse laboris cupidatat ex dolore ipsum. Cillum ipsum ut laborum elit velit qui aliquip ad sint sunt excepteur et nostrud."
        alignItem="center"
        /> */}
      <div className="button-container" style={{backgroundColor:`${triggerOne ?"whitesmoke" : "#363c51"}`}}>
        <ButtonCall/> 
      </div>  
    </SectionWrapper>
       
  );
}

const SectionWrapper = styled.section`
  overflow: hidden;
  display: none;
  position:relative;
  transition: background-color 0.3s ease-out;
  padding-bottom: 75px;
  margin-bottom:0;
  
  .trigger-2{
    position:absolute;
    height:30%;
    width:100%;
  }

  .button-container{
    padding-bottom:100px;
    padding-top:100px; 
    transition: background-color 0.3s ease-out;
  }

  .second-card-home{
    width: 360px;
    display: flex;
  }


  @media(max-width:768px){
    display: block;
  }
`

export default ResponsiveHomeSecond;