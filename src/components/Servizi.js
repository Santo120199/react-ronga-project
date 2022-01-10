import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, { Navigation, Pagination } from 'swiper'
/* import { Container, Card, Row, Col } from 'react-bootstrap'

SwiperCore.use([Grid, Pagination]) */

SwiperCore.use([Navigation, Pagination])

const Servizi = () => {
  return (
    <Wrapper className='wrap'>
      <>
        <div className='serv'>
          <div className='servi'>
            <h1>Servizi</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              suscipit illum nulla eaque iusto obcaecati!
            </p>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={50}
            className='swip'
            navigation
          >
            {services.map((service, index) => {
              const { image, title } = service
              return (
                <SwiperSlide>
                  <img src={image} alt={title} className='image' />
                  <h1 className='titolo'>{title}</h1>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </>
    </Wrapper>
  )
}

const Wrapper = styled.section`


  
  .swip {
    display: flex;
    flex-direction: row;
  }

  .serv {
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-end;
    margin-left: 50px;
  }

  .servi {
    display: flex;
    flex-direction: column;
  }

  .image {
    width: 250px;
    height: 300px;
  }
  .swiper-container {
      width: 50%;
  }

  .swiper {
    width: 100%
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    text-align: left;

    height: calc((100% - 30px) / 2) !important;
  }

  .swiper-button-prev {
    color: var(--clr-granata);
    font-size: 30px;
  }

  .swiper-button-next {
    color: var(--clr-granata);
    font-size: 30px;
  }

  .titolo {
    font-size: 16px;
  }

  @media screen and (min-width: 320px) and (max-width: 374px){

    .swiper-container {
      width: 100%;
    }

    .titolo {
      font-size: 14px;
    }

    .swiper-slide {
     
    }

    .swiper-slide img {
      width: 150px;
      height: 250
    
    }

    .swiper-button-next {
         
        font-size: 20px;

    }

    



  }

`

export default Servizi
