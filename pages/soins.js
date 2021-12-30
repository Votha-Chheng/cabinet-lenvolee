import styled from "styled-components";
import Hero from "@/components/hero";

const SoinsPage = () => {
  return (
    <MainWrapper>
      <Hero img="soins-hero-2.jpg" title="Nos soins"/>
      <main className="menuInfo">
        <h3>Détartrage</h3>
        <p>Ne pas confondre plaque dentaire et tartre</p>
        <p>
          La plaque est un film épais sur les dents, constitué de salive et de particules d'aliments qui s'accumule à la ligne gingivale. L'acide de la plaque peut attaquer les dents peu de temps après les repas, s'il n'est pas nettoyé, il peut traverser l'émail et se transformer en carie. La plaque endommage également les gencives et peut être la cause de gencives rouges, enflées ou qui saignent lors du brossage.
          Le tartre est essentiellement de la plaque qui n'a pas été traitée et qui s'est transformée en une surface plus dure sur les dents que seuls les dentistes sont en mesure de retirer.
          Le tartre est dur et poreux. Il est de couleur jaune ou brunâtre et apparaît à la ligne gingivale. Le tartre est de la plaque qui n'a pas été enlevée et qui s'est durcie à cause des dépôts minéraux provenant de la salive. L'accumulation de tartre cause les caries, la détérioration et la perte des dents, ainsi que des maladies de gencives.
          Le tartre se forme majoritairement au niveau de la face linguale (c'est-à-dire du côté de la langue) des incisives inférieures. En effet la salive des glandes sub-linguales contient une concentration importante de calcium, ce qui facilite la minéralisation. On l'observe aussi sur la face vestibulaire (c'est-à-dire du côté de la joue) des premières molaires supérieures. S'il se dépose plus rarement ailleurs, il peut affecter toutes les dents en cas de mauvaise hygiène bucco-dentaire.
        </p>
        <p>
          Le détartrage consiste à éliminer les irritants (plaque dentaire et tartre) se situant au-dessus et au-dessous de la gencive. Il est indispensable d’éliminer ces dépôts pour assainir la gencive et prévenir les problèmes bucco-dentaire liés aux bactéries. <u>Le tartre ne peut pas être enlevé avec une brosse à dents.</u>
        </p>
        <h3>Traitement des caries</h3>
        <p>
          Le type de traitement proposé dépend de l’étendue de la carie. Lorsque la carie touche uniquement l’émail une restauration au composite après l’éviction carieuse est effectuée dans la séance. Si la carie gagne la dentine, le praticien décidera du type de restauration: -directe: un composite réalisé au fauteuil. -indirecte: un inlay/onlay en composite ou céramique. Une fois que la pulpe de la dent est atteinte par la lésion carieuse, la dent doit être dévitalisée (traitement endodontique), puis reconstituer de façon définitive à l’aide d’une couronne ou d’un inlay/onlay selon la dégradation tissulaire. 
        </p>
        <h3>TRAITEMENT ENDODONTIQUE</h3>
        <p>
          Plus communément appelée "dévitalisation", il s'agit d'éliminer le nerf infecté par la carie. Lors de caries profondes, les douleurs sont provoquées par l'inflammation de ce nerf et seul son éviction pourra soulager les patients. Ce traitement est réalisé sous anesthésie locale, pour permettre un nettoyage complet de la racine et une obturation pérenne.
        </p>
        <h3>INLAY & ONLAY</h3>
        <p>
          Un inlay est une restauration réalisée au laboratoire de prothèse dentaire suite à une empreinte prise en bouche par le dentiste. Il peut être en composite ou en céramique. il sera collé dans la cavité dentaire pour reproduire l’anatomie occlusive de la dent et ses rapports avec les dents antagonistes et adjacentes.Un inlay peut aussi être utilisé pour remplacer une restauration à l’amalgame (ou plombage). L’inlay présente de nombreux avantages : il est plus esthétique (la teinte est choisie en fonction de celle de la dent) mais aussi plus solide et bio compatible qu’un amalgame. Il permet de reconstruire idéalement la morphologie de la dent avec le retour d’une efficacité masticatoire optimale et permet d’éviter le passage des aliments entre les dents qui est à l’origine de douleur et d’inflammation de la gencive. L’inlay-onlay permet de prévenir l’accumulation de plaque dentaire grâce à des joints de collage imperceptibles, à son parfait état de surface et à la quasi absence de dégradation des bords de cette restauration dans le temps. (un inlay, même en composite diminue le risque de reprise carieuse par rapport à un simple composite car la résine composite utilisée par le prothésiste est différente.)
        </p>

        <h3>Soins à base de prothèses</h3>
        <h3> 
          COURONNE DENTAIRE  
        </h3>
        <p>
          La couronne dentaire est une prothèse unitaire qui recouvre une dent délabrée, suite à une carie volumineuse, une dévitalisation ou un choc.
          La couronne dentaire protège la dent et lui redonne son esthétique et sa capacité masticatoire.
          La céramique est aujourd'hui le matériau de choix pour ce type de restauration.
        </p>
        <h3>BRIDGE DENTAIRE</h3>
        <p>
          Un bridge (ou pont) permet de remplacer une dent absente en s’appuyant sur les dents adjacentes (une de chaque côté). Le principe est le même que pour la couronne dentaire : le bridge est une prothèse dentaire qui permet de remplacer une dent absente, voire deux, plus dans certains cas de figure. L’avantage de cette prothèse dentaire est évident : le bridge permet de remplacer une dent manquante en utilisant un système fixe (qu’on ne doit pas enlever chaque jour pour le nettoyage).
        </p>
        <h3>Soins esthétiques</h3>
        <h3>BLANCHIMENT DENTAIRE</h3>
        <p>
          Le blanchiment dentaire permet d’éclaircir les dents d'une à deux teintes. Au sein du cabinet dentaire de l’Arena, nous réalisons les blanchiments dentaires à l’aide de gouttières thermo-formées et d'un produit efficace et peu offensif pour un résultat éclatant et durable. Le patient portera les gouttières pendant une dizaine de jours selon un protocole expliqué par le praticien. Les résultats esthétiques sont en général très appréciés.
        </p>
        <h3>FACETTES CÉRAMIQUES</h3>
        <p>
          Les facettes sont de fines restaurations en céramique qui sont collées sur la partie visible de la dent afin d’améliorer le sourire.

          Les Objectifs :

          Corriger la teinte des dents lorsque le blanchiment ne suffit pas.

          Corriger les anomalies de forme des dents.

          Améliorer les problèmes d’esthétique liés à de légères malpositions des dents.

          Retrouver un sourire harmonieux.
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