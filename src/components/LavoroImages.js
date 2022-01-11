import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const LavoroImages = ({ images = [] }) => {
  const [main, setMain] = React.useState(images[0])

  useEffect(() => {
    setMain(images[0])
  }, [images])

  return (
    <Wrapper>
      <div className='foto'>
        <img src={main} alt='' className='main' />
        <div className='gallery'>
          {images.map((image, index) => {
            return (
              <img
                src={image}
                alt=''
                key={index}
                onClick={() => setMain(images[index])}
              />
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .foto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0;
  }

  .main {
    height: 500px;
    justify-content: center;
    margin: 0;
  }
  img {
    width: 800px;
    border-radius: var(--radius);
  }
  .gallery {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    img {
      width: 100px;
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media screen and (min-width: 320px) and (max-width: 576px) {
    .main {
      width: 250px;
      height: 300px;
    }
    .gallery {
      grid-template-columns: repeat(4, 1fr);

      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  @media screen and (min-width: 577px) and (max-width: 768px) {
    .main {
      width: 400px;
      height: 450px;
    }
    .gallery {
      grid-template-columns: repeat(4, 1fr);

      img {
        width: 80px;
        heigth: 80px;
      }
    }
  }

  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`

export default LavoroImages
