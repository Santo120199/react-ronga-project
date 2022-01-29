import React from 'react'
import styled from 'styled-components'
import fotoSocietà from '../assets/foto-societa.jpg'

const Società = () => {
  return (
    <main>
      <Wrapper className='page-100 section-center'>
        <h2 className='pretitle'>DAGLI ANNI '40</h2>
        <h1 className='title title-soc' id='mobile-soc'>
          La Cura Del Nostro Patrimonio
        </h1>
        <img src={fotoSocietà} alt='foto società' id='fotosocietà' />

        <h2 className='pretitle pretitle-pers'>LA NOSTRA STORIA</h2>
        <p className='text text-pers'>
          Operiamo nel settore del Restauro Monumentale dagli inizi del 1900 e
          durante la Seconda Guerra Mondiale abbiamo contribuito alla
          realizzazione di opere di protezione dai bombardamenti di alcuni dei
          monumenti più importanti della Regione Campania. Con la stessa
          passione dalla fondazione, oggi il nostro gruppo segue il committente
          in tutti i processi dei lavori: progettazione, realizzazione e
          manutenzione, oltre che la comunicazione innovativa degli interventi.
        </p>

        <hr className='line l-soc' />
        <div className='info infosoc'>
          <div className='info1'>
            <h2 className='pretitle pretitle-pers'>LA MISSION</h2>
            <p>
              Il nostro desiderio è quello di essere un punto di riferimento per
              il Restauro e la Valorizzazione dei Beni Culturali. Passione,
              Qualità e Innovazione: questo ci permette di salvaguardare il
              nostro Patrimonio
            </p>
          </div>
          <hr className='line-vertical line-soc' />
          <hr className='line' id='mobile-line-soc' />
          <div className='info1'>
            <h2 className='pretitle pretitle-pers'>IL TEAM</h2>
            <p>
              Ogni progetto è seguito interamente dalle nostre risorse interne.
              Negli anni, lavorando in tutto il territorio italiano, abbiamo
              instaurato sinergie con gruppi e professionisti che condividono i
              nostri stessi valori. Questo ci permette di avere una presenza
              capillare sul territorio mantenendo il contatto diretto con ogni
              singola opera.
            </p>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  .title {
    margin-top: 2rem;
    text-align: center;
    align-items: center;
    margin-bottom: 3.125rem;
    font-size: 35px;
    font-family: Times-New-Roman;
    letter-spacing: 5px;
  }
  .pretitle {
    text-align: center;
    align-items: center;
    font-family: Gotham-Medium;
    font-size: 20px;
    letter-spacing: 5px;
    margin-top: -40px;
  }

  .pretitle-pers {
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  #fotosocietà {
    width: 100%;
    height: 480px;
  }

  .title-soc {
    letter-spacing: 0px;
    font-size: 35px;
    font-family: Libre-Baskerville;
  }

  .text {
    text-align: center;
    margin-bottom: 5rem;
    font-family: Libre-Baskerville !important;
    font-size: 16px;
  }

  .info1 {
    width: 40%;
    font-family: Libre-Baskerville !important;
  }
  .info1 h2 {
    text-align: center;
    width: 100%;
  }

  .info1 p {
    text-align: justify;
    font-size: 16px;
  }

  .infosoc {
    margin-left: 100px;
    width: 100%;
    padding: 0;
  }

  .info .line-vertical {
    height: auto;
    padding: 0;
    color: black;
  }

  .line-soc {
    margin-left: 50px;
  }

  #mobile-line-soc {
    display: none;
  }
  @media screen and (min-width: 320px) and (max-width: 374px) {
    .title-soc {
      font-size: 30px;
    }

    .text {
      margin-bottom: 3rem;
    }

    #fotosocietà {
      width: 300px;
      height: 250px;
      margin-left: 10px;
      margin-bottom: 0px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .pretitle-pers {
      font-size: 18px;
    }

    .text-pers {
      font-size: 14px;
      margin-left: 10px;
      margin-right: 10px;
      text-align: center;
    }

    .l-soc {
      width: 250px !important;
      margin-left: 30px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .infosoc {
      margin-left: 0;
      width: 100%;
    }

    .info1 {
      width: 100%;
      margin-left: 0;
    }

    .info1 p {
      font-size: 14px !important;
      margin-right: 20px;
      text-align: center;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 424px) {
    .title-soc {
      font-size: 30px;
    }

    .text {
      margin-bottom: 3rem;
    }

    .line {
      margin-bottom: 0;
    }

    #fotosocietà {
      width: 350px;
      height: 300px;
      margin-left: 10px;
      margin-bottom: 0px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .pretitle-pers {
      font-size: 18px;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    .text-pers {
      font-size: 14px;
      margin-left: 10px;
      margin-right: 10px;

    }

    .l-soc {
      width: 300px !important;
      margin-left: 30px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .line-vertical {
      display: none;
    }

    .infosoc {
      margin-left: 0;
      width: 100%;
    }

    .info1 {
      width: 100%;
      margin-left: 0;
    }

    .info1 p {
      font-size: 14px !important;
      margin-right: 20px;
      text-align: center;
    }
  }

  @media screen and (min-width: 425px) and (max-width: 767px) {
    .title-soc {
      font-size: 30px;
    }

    #fotosocietà {
      width: 400px;
      height: 350px;
      margin-left: 10px;
      margin-bottom: 0px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .pretitle-pers {
      font-size: 20px;
    }

    .text-pers {
      font-size: 16px;
      margin-left: 30px;
      margin-right: 20px;
      text-align: left;
    }

    .l-soc {
      width: 400px !important;
      margin-left: 30px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .infosoc {
      margin-left: 0;
      width: 100%;
    }

    .info1 {
      width: 100%;
      margin-left: 0;
    }

    .info1 p {
      font-size: 16px !important;
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 650px) and (max-width: 767px) {
    #fotosocietà {
      width: 600px;
      height: 350px;
      margin-left: 10px;
      margin-bottom: 0px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .pretitle {
      margin-top: 50px;
    }

    #mobile-soc {
      font-size: 30px;
      letter-spacing: 1px;
    }

    #fotosocietà {
      width: 750px;
      height: 350px;
      margin-bottom: 0px;
      margin-left: 10px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .text {
      font-size: 18px;
      margin-left: 80px;
      justify-content: left;
      text-align: left;
      margin-right: 80px;
    }

    .l-soc {
      width: 600px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .infosoc {
      margin-left: 0px;
      width: 100%;
    }

    .info1 {
      width: 100%;
      margin-left: 80px;
      margin-right: 80px;
    }

    .info1 p {
      font-size: 18px;
      margin-left: 20px;
      margin-right: 50px;
    }

    #mobile-line-soc {
      margin-top: 30px;
      display: none;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    #fotosocietà {
      width: 100%;
      height: 350px;
      margin-bottom: 0px;
      transform: scale(0.8);
      align-items: center;
      position: relative;

      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .l-soc {
      width: 700px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .info1 {
      margin-left: 0px;
      margin-right: 0px;
    }

    .infosoc {
      margin-left: 80px;
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    #fotosocietà {
      width: 100%;
      height: 350px;
      margin-bottom: 0px;
      transform: scale(0.8);
      align-items: center;
      position: relative;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`

export default Società
