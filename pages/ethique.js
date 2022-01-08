import styled from "styled-components";
import Hero from "@/components/hero";

const SoinsPage = () => {
  return (
    <MainWrapper>
      <Hero img="soins-hero-2.jpg" title="Nothe éthique"/>
      <main className="menuInfo">
        <h3>Une dentisterie contemporaine</h3>
        <p>
          Aujourd&apos;hui grâce aux évolutions techniques et au thérapeutiques mini invasives, nous pouvons préserver les dents le plus longtemps possible sur l&apos;arcade.
          Les protocoles de collage actuels nous permettent désormais de reconstituer les dents avec un délabrement minimal.
        </p>
        <h3> dentisterie verte</h3>
        <p>
          Prendre conscience dans sa pratique quotidienne de l&apos;impact écologique que ce soit au niveau de sa consommation, des décisions d&apos;achat, du choix des prothésistes.
          Le cabinet essaie au maximum de choisir des produite éco conçus, sans perturbateurs endocriniens et fabriques en France.
          Situé au pied de l&apos;arrêt de tram Charles de Gaulle, nous incitons nos patients à utiliser les transports en commun.
          Nos prothésistes sont tous situés a moins de 20 km du cabinet
        </p>
      </main>
    </MainWrapper>
  );
}
const MainWrapper = styled.main`
  position: relative;
  margin-bottom: 100px;
  overflow: hidden;

  main{
    margin-top: 150px;
  }

`
export default SoinsPage;