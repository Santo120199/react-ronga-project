import React from 'react'
import styled from 'styled-components'
import { commitenti } from '../utils/constants'

const Commitenti = () => {
  return (
    <Wrapper>
      <h1 className='titleHome'>I Nostri Commitenti</h1>
      <div className='commitenti'>
        {commitenti.map((commitente, index) => {
          const { image, title } = commitente
          return (
            <div className='commitente'>
              <img src={image} alt={title} />
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 40px;
  .commitenti {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .commitente {
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
  }

  .commitente img {
    width: 110px;
  }


  .titleHome {
    text-align: center;
    font-family: Libre-Baskerville-Bold;
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 2px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media screen and (min-width: 320px) and (max-width: 424px) {
    .commitenti {
      flex-direction: row;
      align-items: center;
    }

    .commitente {
      flex-direction: column;
      justify-content: center;
    }

    .commitente img {
      width: 80px;
    }
    .titleHome {
      font-size: 25px;
    }
  }
`

export default Commitenti
