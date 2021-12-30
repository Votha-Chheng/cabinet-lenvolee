import Hero from "@/components/hero";
import {InView} from "react-intersection-observer";
import styled from "styled-components";

const HygienePage = () => {
  return (
    <MainWrapper>
      
      <Hero img="prevention-2.jpg" title="Garder une bonne hygiène dentaire" />
      <main className="menuInfo">
        <ul>
          <li>Tartre</li>
          <p>
            Comment prévenir l’apparition de plaque dentaire et tartre ?
            Se brosser les dents régulièrement, idéalement 3 fois par jour (2 fois minimum) ;
            Utiliser un bain de bouche après chaque brossage de dents ;
            Utiliser du fil dentaire entre toutes les dents 2 fois par jour ;
            Éviter de fumer ;
            Procéder tous les ans (ou tous les 6 mois) à un nettoyage/détartrage chez le dentiste ;
            Avoir une alimentation saine et éviter les surplus d’aliments sucrés.
          </p>
          <li>Caries</li>
          <p>
            Brossez-vous les dents tous les jours pendant environ deux minutes, en prenant soin de nettoyer toutes les surfaces de toutes les dents. Vous pouvez améliorer le brossage en utilisant une brossette perfectionnée sur une brosse à dents électrique qui retire jusqu'à 100 % de plaque en plus le long de la ligne gingivale par rapport à une brosse à dents manuelle classique. Surtout, les professionnels de la santé dentaire recommandent l'utilisation de dentifrice au fluorure pour son efficacité avérée dans la réduction du risque de caries grâce au renforcement des tissus solides de la dent. Si vous êtes plus susceptible d'avoir des caries, votre dentiste peut également vous prescrire un bain de bouche au fluorure et l'utilisation quotidienne du fil dentaire. Pour une protection accrue contre les caries, pensez à évoquer la possibilité d'un traitement au fluorure professionnel lors de votre prochain rendez-vous chez le dentiste.
          </p>
          <p>
            Les principaux responsables des dents cariées sont les aliments et les boissons sucrés et collants. Plus vous consommez de sucre, plus vous produisez d’acide favorisant les caries. Le sucre s’allie à la plaque pour affaiblir l’émail et préparer le terrain à la carie.
          </p>
          <p>
            Comment protéger vos enfants des caries

            La prévention des caries chez les enfants commence par de bonnes habitudes de brossage et de soins des dents dès le plus jeune âge.

            1. Consultez votre dentiste pour savoir quand commencer à utiliser un dentifrice fluoré pour vos enfants.

            2. Consultez leur dentiste tous les 6 mois pour un contrôle.

            3. Vérifiez que vos enfants se brossent les dents deux fois par jour pendant au moins deux minutes. Faites-leur penser à s’occuper tout particulièrement de leurs dents du fond car c’est sur elles que s’accumule le plus de plaque.

            4. Dès que leurs dents commencent à se toucher, aidez-les à passer le fil dentaire chaque jour.
          </p>
          <li>Soins des gencives</li>
          <p>
            Caries et problèmes de gencives sont liés.
          </p>
          <p>
            De même, une alimentation trop liquide est néfastes pour les gencives. En effet, l'absence de mastication limite l'activité musculaire et fragilise les tissus de soutien. 
          </p>
          <p>
            Une gencive saine est de couleur rose pâle, le liseré gingival doit suivre de façon harmonieuse le collet de la dent sur tout son pourtour. Elle ne présente aucun gonflement, ni saignement, ni ulcération. Une gencive saine ne saigne jamais lors du brossage ou d’une quelconque pression. 
          </p>
          <p>
            Une bonne hygiène de vie sans tabac favorise une bonne santé des dents et des gencives. Le tabac augmente fortement le risque de développer ou d’aggraver une maladie des gencives (gingivite et parodontite). Il intervient aussi bien dans son apparition, que dans sa progression. En arrêtant de fumer, vous favorisez, entre autres, la bonne santé de vos gencives.
          </p>
          <li>Mauvaise haleine</li>
          <p>Une dent nécrosée peut être à l'origine</p>
          <p>
            Buvez beaucoup d’eau pour bien vous hydrater. La quantité d’eau dont vous avez besoin dépend de votre constitution et de votre activité quotidienne. Mâchez des chewing-gums sans sucre pour stimuler la production de salive. Manger un bonbon à la menthe est une solution temporaire pour rafraîchir l’haleine, mais moins recommandée car pouvant laisser un résidu sucré. Une mauvaise haleine chronique pouvant être le signe d’une maladie plus grave, nous vous recommandons de consulter votre dentiste ou un professionnel de santé. Découvrez quels aliments peuvent donner mauvaise haleine. Pensez à limiter tout ce qui peut intensifier la mauvaise haleine, comme la cigarette ou l’alcool.
          </p>
        </ul>
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