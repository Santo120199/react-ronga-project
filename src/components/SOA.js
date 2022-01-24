import React from 'react'
import styled from 'styled-components'
import $ from 'jquery'

$('.skill-per').each(function () {
  var $this = $(this)
  var per = $this.attr('per')
  $this.css('width', per + '%')
  $({ animatedValue: 0 }).animate(
    { animatedValue: per },
    {
      duration: 1000,
      step: function () {
        $this.attr('per', Math.floor(this.animatedValue))
      },
      complete: function () {
        $this.attr('per', Math.floor(this.animatedValue))
      },
    }
  )
})

const SOA = () => {
  return (
    <Wrapper>
      <h1 className='cat'>SOA</h1>
      <p className='cat-descr'>
        Sin dai primi anni di attività, la Salvatore Ronga s.r.l. ha operato in
        conformità della legge soddisfacendo <br />
        costantemente gli standard qualitativi imposti dagli enti di competenza.
      </p>
      <div className='skills'>
        <div className='skill'>
          <div className='skill-name'>
            OG2{' '}
            <span>
              (Restauro e manutenzione dei beni immobili sottoposti a tutela)
            </span>
            <div className='skill-bar'>
              <div
                className='skill-per'
                per='VIII'
                style={{ maxWidth: '100%' }}
              ></div>
            </div>
          </div>
        </div>
        <div className='skill'>
          <div className='skill-name'>
            OS25 <span>(Scavi Archeologici)</span>
            <div className='skill-bar'>
              <div
                className='skill-per'
                per='IV-BIS'
                style={{ maxWidth: '80%' }}
              ></div>
            </div>
          </div>
        </div>
        <div className='skill'>
          <div className='skill-name'>
            OS2-A <span>(Superfici decorate di beni immobili)</span>
            <div className='skill-bar'>
              <div
                className='skill-per'
                per='IV'
                style={{ maxWidth: '60%' }}
              ></div>
            </div>
          </div>
        </div>
        <div className='skill'>
          <div className='skill-name'>
            OG11 <span>(Impianti tecnologici)</span>
            <div className='skill-bar'>
              <div
                className='skill-per'
                per='III-BIS'
                style={{ maxWidth: '40%' }}
              ></div>
            </div>
          </div>
        </div>
        <div className='skill'>
          <div className='skill-name'>
            OS6 <span>(Finiture di opere generali in materiali lignei)</span>
            <div className='skill-bar'>
              <div
                className='skill-per'
                per='III'
                style={{ maxWidth: '20%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .cat {
    margin-top: 40px;
    text-align: center;
    align-items: center;
    margin-bottom: 60px;

    font-size: 30px;
    font-family: Gotham-Medium;
    letter-spacing: 5px;
  }

  .cat-descr {
    text-align: center;
    align-items: left;
    font-family: Libre-Baskerville !important;
    font-size: 18px;
    margin-top: -25px;
    margin-bottom: 50px;
  }
  .cat span {
    font-size: 40px;
    margin-left: 30px;
    margin-right: -15px;
  }

  .skills {
    width: 100%;
    max-width: 900px;
    padding: 0 20px;
    margin-left: 100px;
    margin-bottom: 50px;
  }
  .skill-name {
    font-size: 25px;
    font-weight: 700;
    font-family: Gotham-Medium;
    margin: 20px 0;
    margin-bottom: 30px;
  }
  .skill-name span {
    font-size: 14px;
    font-weight: normal;
    font-family: Libre-Baskerville;
  }
  .skill-bar {
    height: 20px;
    background: #cacaca;
    border-radius: 2px;
  }
  .skill-per {
    height: 20px;
    background: #600316;
    border-radius: 2px;
    position: relative;
    margin-top: 30px;
    animation: fillBars 2.5s 1;
  }
  .skill-per::before {
    content: attr(per);
    position: absolute;
    /* padding: 4px 6px; */
    color: #600316;
    border-radius: 4px;
    font-size: 20px;
    top: -40px;
    right: 0;
    transform: translateX(50%);
  }
  .skill-per::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    top: -20px;
    right: 0;
    trasform: translateX(50%) rotate(45deg);
  }

  @keyframes fillBars {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 374px) {
    .cat {
      font-size: 28px;
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 300px;
    }

    .skills {
      max-width: 300px;
      margin-left: 20px;
    }

    .skill-name {
      font-size: 20px;
    }

    .skill-name span {
      display: none;
    }

    .skill-per::before {
      font-size: 18px;
    }

    .cat-rating {
      display: flex;
      flex-direction: column;
    }

    .cat-rating span {
      margin-top: 20px;
      justify-content: center;
      text-align: center;
      margin-left: -45px;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 424px) {
    .cat {
      font-size: 28px;
      margin-left: auto;
      margin-right: auto;
      display: block;
      width: 300px;
    }
    .skills {
      max-width: 350px;
      margin-left: 20px;
    }

    .skill-name {
      font-size: 20px;
    }

    .skill-name span {
      display: none;
    }

    .skill-per::before {
      font-size: 18px;
    }
    .cat-rating {
      display: flex;
      flex-direction: column;
    }

    .cat-rating span {
      margin-top: 20px;
      justify-content: center;
      text-align: center;
      margin-left: -45px;
    }
  }

  media screen and (min-width: 425px) and (max-width: 767px) {
    .skills {
      max-width: 350px;
      margin-left: 50px;
    }

    .skill-name {
      font-size: 20px;
    }

    .skill-name span {
      display: none;
    }

    .skill-per::before {
      font-size: 18px;
    }
    .cat-rating {
      display: flex;
      flex-direction: column;
    }

    .cat-rating span {
      margin-top: 20px;
      justify-content: center;
      text-align: center;
      margin-left: -45px;
    }
  }

  @media screen and (min-width: 550px) and (max-width: 767px) {
    .skills {
      max-width: 500px;
      margin-left: 50px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 959px) {
    .skills {
      max-width: 650px;
      margin-left: 100px;
    }

    .skill-name {
      font-size: 20px;
    }

    .skill-name span {
      display: none;
    }

    .skill-per::before {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 960px) and (max-width: 1023px) {
    .skills {
      max-width: 900px;
      margin-left: 50px;
    }

    .skill-name {
      font-size: 20px;
    }

    .skill-name span {
      font-size: 16px;
    }

    .skill-per::before {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1099px) {
    .skills {
      max-width: 950px;
      margin-left: 50px;
    }

    .skill-name {
      font-size: 20px;
    }

    .skill-name span {
      font-size: 16px;
    }

    .skill-per::before {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1100px) and (max-width: 1200px) {
    .skills {
      max-width: 1000px;
      margin-left: 100px;
    }

    .skill-name {
      font-size: 20px;
    }

    .skill-name span {
      font-size: 16px;
    }

    .skill-per::before {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1201px) and (max-width: 1299px) {
    .skills {
      max-width: 1050px;
      margin-left: 100px;
    }

    .skill-name {
      font-size: 20px;
    }

    .skill-name span {
      font-size: 16px;
    }

    .skill-per::before {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1300px) and (max-width: 1400px) {
    .skills {
      max-width: 1150px;
      margin-left: 100px;
    }

    .skill-name {
      font-size: 20px;
    }

    .skill-name span {
      font-size: 16px;
    }

    .skill-per::before {
      font-size: 18px;
    }
  }
`
export default SOA
