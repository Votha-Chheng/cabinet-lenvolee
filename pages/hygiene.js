import Hero from "@/components/hero";
import {InView} from "react-intersection-observer";
import styled from "styled-components";

const HygienePage = () => {
  return (
    <MainWrapper>
      
      <Hero img="prevention-2.jpg" title="Prévention dentaire" />
      <main className="menuInfo">
        <p>(Mettre photo coin hygiène dentaire et brossettes Curaprox®)</p>
        <p>
          Pour assurer la pérennité de nos traitements il est essentiel d’enseigner les bons gestes d’hygiène buccodentaire que vous pourrez réaliser chez vous. Au cabinet une salle est dédiée à l’enseignement des techniques d’hygiène bucco-dentaire et des conseils sur le matériel vous sera fourni. Ces techniques sont essentielles à maitriser lors d’atteinte du système d’attache de la dent appelé encore maladie parodontale.
        </p>
      </main>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  height: 100%;
  overflow: hidden;

  main{
    margin-top: 150px;
  }
`
export default HygienePage;