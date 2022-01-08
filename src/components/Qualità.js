import React from 'react'
import styled from 'styled-components'

const Qualità = () => {
  return (
    <Wrapper>
      <h1 className='cat'>QUALITA'</h1>
      <p className='cat-descr'>
        Sin dai primi anni di attività, la Salvatore Ronga s.r.l. ha operato in
        conformità della legge soddisfacendo <br />
        costantemente gli standard qualitativi imposti dagli enti di competenza.
      </p>
      <ul className='qualità'>
        <li>
          ISO 9001 - 2015 <span>Sistema di gestione Qualità</span>
        </li>
        <br />
        <li>
          ISO 14000 - 2015 <span>Sistema di gestione Ambientale</span>
        </li>
        <br />
        <li>
          ISO 45001{' '}
          <span>
            Sistema di gestione a tutela della Sicurezza e tutela dei lavoratori
          </span>
        </li>
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .qualità {
    text-align: center;
    align-items: center;
    margin-bottom: 40px;
  }

  .qualità li {
    text-align: center;
    font-size: 25px;
    font-family: Gotham-Book;
  }

  .qualità li span {
    font-size: 14px;
    padding-top: -30px;
    display: block;
  }
`

export default Qualità
