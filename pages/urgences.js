import styled from "styled-components";
import Image from "next/image"
import Hero from "@/components/hero";

const UrgencesPage = () => {
  return (
    <MainWrapper>
      <Hero img="soins-hero.jpg" title="Urgences"/>
      <main className="menuInfo">
        <p>
          Un service de garde est organisé les dimanches et jours fériés par le Conseil de l&apos;Ordre Départemental des Chirurgiens-Dentistes.
          Vous trouverez les coordonnées du chirurgien-dentiste de garde dans votre quotidien régional ou en téléphonant au commissariat/gendarmerie de votre ville ou encore au service d&apos;urgence du 15.
          Vous pouvez également appeler ou vous rendre au service des Urgences du CHU de Montpellier (Service de CMF/Stomatologie - Hôpital Guy de Chauliac).
        </p>
        <h3>1-En cas de saignement après une intervention</h3>
        <ul>
          <li>Munissez-vous d&apos;une compresse stérile (ou à défaut d’un tissu propre), placez-la entre le point de saignement et l&apos;arcade opposée et serrez fort pendant 10 minutes.</li>
          <li>Restez assis</li>
          <li>Préférez une alimentation froide.</li>
        </ul>
        <p>En cas de persistance contactez notre équipe ou à défaut le service de garde/d&apos;urgence.</p>

        <h3>2-En cas de traumatisme dentaire consécutif à une chute ou à un choc</h3>
        <ul>
          <li>Prenez immédiatement contact avec notre équipe.</li>
          <li>S’il y a expulsion d’une dent définitive : le geste d’urgence consiste à récupérer la dent, sans la nettoyer, et à la conserver dans du sérum physiologique ou du lait (sinon la conserver dans sa propre salive). La réimplantation, si elle est possible, devra se faire aussi rapidement que possible.</li>
          <li>S’il y a déplacement des dents définitives : le geste d’urgence consiste, à chaud, à les replacer correctement avec la pression des doigts.</li>
        </ul>
      </main>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  position: relative;
  margin-bottom: 100px;

`

export default UrgencesPage;