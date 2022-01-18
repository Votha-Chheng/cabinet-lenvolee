import Hero from "@/components/hero";
import MainContainer from "@/components/maincontainer";
import styled from "styled-components";

const InfosPratiques = () => {
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
            Premier rendez-vous
          </h3>
        </div>
        <section>
          <p>
            Lors de votre premier rendez-vous, un questionnaire médical à remplir vous sera donné. Les renseignements demandés serviront à adapter ou ajuster votre parcours de soins.
          </p>
        </section>
        <div className="h3-title">
          <h3>
            Accès au cabinet dentaire
          </h3>
        </div>
        <section>
          <ul>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Par le tramway, arrêt Charles de Gaulle ligne 2.
              </div>
            </li>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                En voiture, parking TAM Charles de gaulle (payant) puis sortir tram Charles de gaulle.
              </div>  
            </li>
            <li>
              <div>
                <i className="fa-solid fa-right-long"/>
              </div>
              <div>
                Le cabinet est situé dans la résidence du Prado concorde bâtiment l’Envolée, entrée par le portail puis 1ere à droite.
              </div>
            </li>
          </ul>
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