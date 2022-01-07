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
        image = "pose" 
        title = "Sylvie MA-FRANCIN" 
        subtitle = "Chirurgienne dentiste depuis 2010" 
        text = "Forte de 10 ans d&apos;expérience dans la dentisterie, l&apos;aspect esthétique du sourire tient une part aussi importante que le soin dans mon approche. In id esse amet excepteur exercitation excepteur." 
        alignItem="center"
        />

      <CardHome 
        image = "nurse-pose" 
        title = "Christelle NOM DE FAMILLE" 
        subtitle = "Assistante dentaire" 
        text = "In id esse amet excepteur exercitation excepteur. Veniam sit dolor esse fugiat elit veniam esse laboris cupidatat ex dolore ipsum. Cillum ipsum ut laborum elit velit qui aliquip ad sint sunt excepteur et nostrud."
        alignItem="center"
        />
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
  
  .trigger-2{
    position:relative;
  }
  .trigger-2{
    position:absolute;
    height:60%;
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