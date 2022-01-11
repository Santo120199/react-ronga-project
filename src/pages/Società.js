import React from 'react'
import styled from 'styled-components'
import fotoSocietà from '../assets/foto-societa.jpg'

const Società = () => {
  return (
    <main>
      <Wrapper className='page-100 section-center'>
        <h2 className='pretitle'>DAGLI ANNI '40</h2>
        <h1 className='title title-soc' id='mobile-soc'>
          Operaimo per restituire <br /> la storia ai nostri figli
        </h1>
        <img src={fotoSocietà} alt='foto società' id='fotosocietà' />

        <h2 className='pretitle pretitle-pers'>LA NOSTRA STORIA</h2>
        <p className='text text-pers'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          asperiores quae aut? Nemo quas quisquam laudantium quis dolorem cum
          quos perferendis, et aspernatur ullam modi dolores adipisci,
          voluptatibus in atque officia labore ratione, magnam non praesentium
          reiciendis voluptas dolore sit.
        </p>

        <hr className='line l-soc' />
        <div className='info infosoc'>
          <div className='info1'>
            <h2 className='pretitle pretitle-pers'>LA MISSION</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              omnis odit hic numquam quibusdam perspiciatis modi architecto
              ratione sint possimus quis ducimus veniam labore quos praesentium
              enim ex eligendi nobis rerum voluptates quasi maiores, doloremque
              cumque. Neque soluta architecto porro.
            </p>
          </div>
          <hr className='line-vertical line-soc' />
          <hr className='line' id='mobile-line-soc' />
          <div className='info1'>
            <h2 className='pretitle pretitle-pers'>IL TEAM</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              soluta, quos velit ratione quam quisquam iusto voluptatem saepe
              laboriosam optio dolore consequatur laborum ipsum. Repudiandae
              iure dolore sint? Tenetur quisquam nam laboriosam! Fugiat placeat
              sequi unde tempora, laudantium animi rerum.
            </p>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  .title {
    margin-top: 3.125rem;
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
    font-family: Gotham-Book;
    font-size: 20px;
    letter-spacing: 5px;
    margin-top: 0;
  }

  .pretitle-pers {
    font-size: 25px;
    margin-top: 30px;
  }

  #fotosocietà {
    width: 100%;
    height: 480px;
  }

  .title-soc {
    letter-spacing: 0px;
    font-size: 40px;
  }

  .text {
    text-align: center;
    margin-bottom: 5rem;
    font-family: Gotham-Book;
    font-size: 18px;
  }

  .info1 {
    width: 40%;
  }
  .info1 h2 {
    text-align: center;
    width: 100%;
  }

  .info1 p {
    text-align: justify;
    font-size: 18px;
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
      text-align: left;
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
    }
  }

  @media screen and (min-width: 375px) and (max-width: 424px) {
    .title-soc {
      font-size: 30px;
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
    }

    .text-pers {
      font-size: 14px;
      margin-left: 10px;
      margin-right: 10px;
      text-align: left;
    }

    .l-soc {
      width: 300px !important;
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
