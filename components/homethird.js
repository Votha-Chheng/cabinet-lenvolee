import styled from "styled-components";
import Image from "next/image"
import LineThrough from "./linethrough";

const HomeThird = () => {
  return (
    <GridWrapper>
      <div>
        <Image src="/images/team.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="texte">
        <h3>Tempor culpa laborum pariatur esse.</h3> 
        <LineThrough width="2vw"/>
        <p>Dolor culpa minim pariatur ullamco amet laborum cupidatat in dolor ad. Qui ea exercitation nulla do laboris nostrud qui occaecat laborum laboris ad id dolor. Qui elit pariatur voluptate aute sint sint laboris fugiat pariatur enim ipsum elit esse veniam. Excepteur reprehenderit ex ex non nostrud proident eiusmod laborum adipisicing officia labore culpa ad. Ipsum veniam deserunt nisi excepteur et aliquip est ex labore.</p>





</div>
      <div className="texte">
        <h3>Nulla aliqua magna occaecat reprehenderit irure veniam do ipsum aliqua Lorem non mollit culpa.</h3>
        <p>
           Occaecat voluptate quis eiusmod sunt sunt cillum eiusmod. Qui eiusmod nisi nisi dolor et anim id labore ad nisi. Duis laboris sunt nostrud ullamco quis cillum. Non pariatur nostrud ea fugiat in aliquip.
          Sit pariatur sint id eiusmod Lorem magna nostrud eiusmod ex. Lorem mollit ad nisi labore minim cillum sint. Cillum aliquip proident non eiusmod. Voluptate culpa eiusmod sint tempor amet nostrud ex consectetur ad incididunt sint amet qui. Adipisicing officia nulla adipisicing esse excepteur anim nostrud laboris ea consectetur. Lorem ea labore Lorem exercitation enim elit proident irure excepteur. Non do minim sint proident irure consequat voluptate deserunt qui excepteur ex.
        </p>
        <p>
          Esse cillum sit Lorem fugiat incididunt velit irure magna dolore aliquip ullamco. Aute irure est do consequat nisi fugiat non veniam. Reprehenderit cupidatat do aliqua nostrud excepteur ad occaecat commodo ut consequat consectetur dolor quis. Voluptate tempor ea adipisicing aute mollit ad fugiat id. Ipsum proident exercitation mollit esse sint nostrud do ex cupidatat velit dolor.
        </p>
      </div>
      <div>
        <Image src="/images/materiel.jpg" layout="fill" objectFit="cover" />
      </div>
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: gray;

  div{
    overflow: hidden;
    width: 100%;
    height: 450px;
    position: relative;
  }

  .texte{
    padding: 10px 20px;

    /* p{
      padding: 20px 0;
    } */
  }

  h3{
    text-align: center;
  }
`

export default HomeThird;