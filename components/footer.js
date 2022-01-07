import styled from "styled-components";
import LineThrough from "./linethrough";
import MainLogo from "./mainlogo";
import Image from "next/image"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-up">
        <div className="logo-flex">
          <div className="logo-container">
            <MainLogo/>
          </div>
          
          <div className="sub-logo-flex">
            <div className="mentions">
              <div className="flex-item">
                <div className="img">
                  <Image className="svg-img" src="/images/clock.svg" width={30} height={30} layout="fixed" />
                </div>
                <span className="texte">
                  Lundi - Mardi - Jeudi - Vendredi<br/>de 9h00 à 16h00
                </span>
              </div>
              <div className="flex-item">
                <div>
                  <Image src="/images/phone-mail.svg" width={30} height={30} layout="fixed"/>
                </div>
                <span className="texte">
                  <a className="tel" href="tel:0624861010">06 24 86 10 10</a><br/>
                  <a href="mailto:votha_chheng@gmx.fr">votha_chheng@gmx.fr</a>           
                </span>
              </div>
              <div className="flex-item">
                <div className="img">
                  <Image src="/images/pmr.svg" width={30} height={30} layout="fixed"/>
                </div>
                <span className="texte">
                  Le cabinet est accessible aux personnes à mobilité réduite (PMR).
                </span>
              </div>
              <div className="flex-item">
                <div className="img">
                  <Image src="/images/location.svg" width={30} height={30} layout="fixed"/>
                </div>
                <span className="texte">
                  <a href="https://www.google.fr/maps/place/L'envol%C3%A9e+Cabinet+dentaire/@43.6284937,3.895878,17z/data=!4m5!3m4!1s0x12b6af1eb59a905f:0x81b577b1ccc1138e!8m2!3d43.6283792!4d3.8969015" target="_blank" rel="noreferrer">
                    Résidence L&apos;Envolée<br/>
                    3 place Charles de Gaulle<br/>
                    34 170 Castelnau-le-Lez
                  </a>
                </span>
              </div>
            </div>
            <div className="links mentions">
              <div className="flex-item">
                <div className="img">
                  <Image src="/images/oncd.svg" width={30} height={30} layout="fixed"/>
                </div>
                <a href="http://www.ordre-chirurgiens-dentistes.fr/" target="_blank" rel="noreferrer">
                  Site de l&apos;ONCD (<em>Ordre national des chirurgiens dentistes</em>)
                </a>
              </div>
              <div className="flex-item">
                <div className="img">
                  <Image src="/images/annuaire.svg" width={25} height={25} layout="fixed"/>
                </div>
                <span  style={{marginLeft: "5px"}}>
                  <a href="http://www.ordre-chirurgiens-dentistes.fr/grand-public.html" target="_blank" rel="noreferrer">
                    Trouver un dentiste près de chez vous
                  </a>
                </span>
                
              </div>
              <div className="flex-item">
                <div className="img">
                  <Image src="/images/annuaire-doc.svg" width={30} height={30} layout="fixed"/>
                </div>
                <a href="https://www.conseil-national.medecin.fr/annuaire" target="_blank" rel="noreferrer">
                  Trouver un médecin près de chez vous
                </a>
              </div>
              <div className="flex-item">
                <div className="img">
                  <Image src="/images/tram.svg" width={30} height={30} layout="fixed"/>
                </div>
                <span>Tram Ligne 2 - Arrêt Charles de Gaulle</span>
              </div>
              <div className="flex-item">
                <div className="img">
                  <Image src="/images/parking.svg" width={30} height={30} layout="fixed"/>
                </div>
                <em>
                  <ul style={{margin:"-5px 0 0 0", padding:"0", listStyle:"none"}}>
                    <li>
                      Parking Place Ch. de Gaulle (2h gratuites)
                    </li>
                    <li>
                      Parking souterrain accès rue du Prado (payant)
                    </li>
                  </ul>
                </em>
                
              </div>
            </div>  
          </div>  
        </div>

        <div className="location-flex">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2887.9454787619643!2d3.895878!3d43.6284937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af1eb59a905f%3A0x81b577b1ccc1138e!2sL&#39;envol%C3%A9e%20Cabinet%20dentaire!5e0!3m2!1sfr!2sfr!4v1638958912048!5m2!1sfr!2sfr" 
            allowFullScreen="" 
            loading="lazy"
          />
        </div>
      </div>
      <LineThrough backgroundColor="var(--main-color-text)"/>
      <div className="footer-down">
        &copy; <em>Cabinet dentaire L&apos;Envolée</em> - Janvier 2022 | Site conçu par <a href="https://github.com/Votha-Chheng" target="_blank" rel="noreferrer">Votha Chheng</a>
      </div>     
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: var(--main-bgcolor);
  display: flex;
  flex-direction: column;
  color: var(--main-color-text);
  border-top: 2.5px solid var(--main-color-text);
  font-family: 'Oswald', sans-serif;
  letter-spacing: 1.75px;

  .footer-up{
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    .logo-flex{
      align-self: center;
      display: flex;
      flex-direction: column;
      row-gap: 0px;
      height: 400px;
      justify-content: space-between;
      width: 100%;

      .logo-container{
        width: 295px;
        margin: 20px auto 0;
      }

      .sub-logo-flex{
        display: flex;
        column-gap: 50px;
        border-top: 1.75px solid var(--main-color-text);

        .mentions{    
          padding: 10px 0 10px 20px;
          display: flex;
          flex-direction: column;
          row-gap: 17.5px;
          width: 100%;

          &.links{
            border-left: 1.75px solid var(--main-color-text);
            
            .flex-item{
              column-gap: 15px;
            }
          }

          .flex-item{
            display: flex;
            column-gap: 10px;
            font-weight: 600;

            .texte{
              font-size: 1rem;
            }
          }
        }
      }

    }
    .location-flex{
      width: 550px;
      height: 400px;
      position: relative;
      border-left:2px solid #D4AB7C;
      
      iframe{
        position: absolute;
        width: 100%;
        height: 100%;
        border: none;
      }
    }
    
    
  }

  .footer-down{  
    padding: 15px 0;
    text-align: center;
    font-weight:bold;
  }

  @media (max-width:768px){
    .footer-up{
      .logo-flex{
        height: 100%;
      }
    }

    .location-flex{
      display: none;
    }
  }
  @media (max-width:560px){
    .footer-up{
      .logo-flex{
        .sub-logo-flex{
          flex-direction: column !important;
        }
      }
    }
`

export default Footer;