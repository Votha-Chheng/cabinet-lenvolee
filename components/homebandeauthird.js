import styled from "styled-components";
import Image from "next/image";

const HomeBandeauThird = () => {
  return (
    <MainWrapper>
      <h2>Le cabinet</h2>
      <span>Partie consacrée aux images des équipements du cabinet et de la salle d&apos;attente. (A terminer)</span>
      

      <div className="img-suite">
        <div className="pic-containers">
          <Image src="/images/accueil-one.jpg" width={500} height={500} objectFit="cover" alt=""/>
        </div>
        <div className="pic-containers">
          <Image src="/images/accueil-2.jpg" width={500} height={500}/>
        </div>
        <div className="pic-containers">
          <Image src="/images/accueil-3.jpg" width={500} height={500} objectFit="cover" alt=""/>
        </div>
        <div className="pic-containers">
          <Image src="/images/accueil-4.jpg" width={500} height={500}  objectFit="cover" alt=""/>
        </div>
        <div className="pic-containers">
          <Image src="/images/xray.jpg" width={500} height={500}  objectFit="cover" alt=""/>
        </div>
      </div>    
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  margin: 50px auto;

  .img-suite{
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  .pic-containers{
    position: relative;
    height: 100%
    width: 100%;
  }

`

export default HomeBandeauThird;