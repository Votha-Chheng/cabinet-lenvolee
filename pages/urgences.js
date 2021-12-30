import styled from "styled-components";
import Image from "next/image"
import Hero from "@/components/hero";

const UrgencesPage = () => {
  return (
    <MainWrapper>
      <Hero img="soins-hero.jpg" title="Urgences"/>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  position: relative;
  margin-bottom: 100px;

`

export default UrgencesPage;