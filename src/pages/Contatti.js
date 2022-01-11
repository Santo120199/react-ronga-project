import React from 'react'
import styled from 'styled-components'

const Contatti = () => {
  return (
    <>
      <h1 className='title'>INFORMAZIONI UTILI</h1>
      <hr className='line' />
      <Wrapper className='page-100 section-center'>
        <div className='info'>
          <h2 id='intestazione'>Indirizzo</h2>
          <hr className='line-vertical cont prova' />
          <p>
            <span>Sede Legale</span>
            <br />
            Via Bastia 2, 84125 <br />
            Salerno (SA) -Italy
          </p>
        </div>
        <hr className='line' />
        <div className='info'>
          <h2 id='intestazione'>Contatti</h2>
          <hr className='line-vertical cont prova1' />
          <p>
            E - MAIL <br />
            info@impresaronga.com <br />
            <br />
            PEC <br />
            impresaronga@pec.it
          </p>
          <hr className='line-vertical cont prova2' />
          <p>
            PARTITA IVA <br />
            03844930655 <br />
            <br />
            TELEFONO <br />
            +39 089 233496
          </p>
        </div>
        <hr className='line' />
        <div className='info'>
          <h2 id='intestazione' className='intest'>
            TEAM
          </h2>
          <hr className='line-vertical team prova' />
          <p>
            AMMINISTRATORE DELEGATO <br />
            Sergio Ronga <br />
            <br />
            RESPONSABILE UFFICIO AMMINISTRATIVO <br />
            Sig.ra Antonietta Anastasio <br />
            <br />
            RESPONSABILE UFFICIO COMUNICAZIONI <br />
            Lorenzo Ronga <br />
            <br />
          </p>
          <hr className='line-vertical team prova2' />
          <p>
            RESPONSABILE TECNICO <br />
            Geom. Ciro Memoli <br />
            <br />
            RESPONSABILE TECNICO <br />
            Gianluca Ronga <br />
            <br />
            RESPONSABILE UFFICIO GARE <br />
            Geom. Antonio Ronca <br />
            <br />
            RESPONSABILE UNICO CANTIERE <br />
            Sig. Francesco Vicidomini
          </p>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .intest {
    margin-right: 250px !important;
  }

  .line {
    color: black;
    max-width: 1300px;
    margin-left: 100px;
    margin-bottom: 30px;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }

  #intestazione {
    margin-left: 100px;
    text-transform: uppercase;
    margin-right: 200px;
    font-family: Gotham-Medium;
    font-size: 20px;
    letter-spacing: 5px;
  }

  .line-vertical {
    margin-right: 50px;
    margin-left: -50px;
    height: 20px;
    margin-bottom: 20px;
  }

  .line-vertical.team.prova {
    height: 430px;
  }
  .line-vertical.cont.prova {
    height: 200px;
    margin-left: -50px;
  }

  .line-vertical.cont.prova1 {
    height: 200px;
    margin-left: -45px;
  }

  .line-vertical.cont.prova2 {
    margin-left: 245px;
    height: 200px;
  }

  .line-vertical.team {
    height: 20px;
    margin-left: -36px;
  }

  .line-vertical.team.prova2 {
    margin-left: 50px;
  }

  .info p {
    font-family: Gotham-Book;
    font-size: 20px;
  }

  .line-vertical {
    height: 150px;
  }
  /*-------- Responsive --------*/

  @media screen and (min-width: 320px) and (max-width: 374px) {
    #intestazione {
      margin-left: 20px;
    }
    .info {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }

    .line-vertical {
      display: none;
    }

    .info p {
      margin-left: 20px;
      margin-top: 30px;
      font-size: 18px;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 424px) {
    #intestazione {
      margin-left: 20px;
    }
    .info {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }

    .line-vertical {
      display: none;
    }

    .info p {
      margin-left: 20px;
      margin-top: 30px;
      font-size: 18px;
    }
  }

  @media screen and (min-width: 425px) and (max-width: 767px) {
    #intestazione {
      margin-left: 20px;
    }
    .info {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }

    .line-vertical {
      display: none;
    }

    .info p {
      margin-left: 20px;
      margin-top: 30px;
      font-size: 18px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 959px) {
    #intestazione {
      margin-left: 20px;
      font-size: 25px;
    }
    .info {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      margin-left: 300px;
    }

    .line-vertical {
      display: none;
    }

    .info p {
      margin-left: 20px;
      margin-top: 30px;
      font-size: 18px;
    }
  }

  @media screen and (min-width: 960px) and (max-width: 1023px) {
    .line-vertical.cont.prova2 {
      margin-left: 400px;
    }
    .line-vertical.team.prova2 {
      margin-left: 395px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1099px) {
    .line-vertical.cont.prova2 {
      margin-left: 50px;
    }

    .info {
      display: flex;
      flex-wrap: nowrap;
    }

    .line-vertical.team.prova2 {
      margin-left: 10px;
    }
  }

  @media screen and (min-width: 1100px) and (max-width: 1200px) {
    .info {
      display: flex;
      flex-wrap: nowrap;
    }
    .line-vertical.cont.prova2 {
      margin-left: 110px;
    }
  }

  @media screen and (min-width: 1201px) and (max-width: 1299px) {
    .info {
      display: flex;
      flex-wrap: nowrap;
    }
    .line-vertical.cont.prova2 {
      margin-left: 150px;
    }
  }

  @media screen and (min-width: 1300px) {
    .info {
      display: flex;
      flex-wrap: nowrap;
    }
  }
`

export default Contatti
