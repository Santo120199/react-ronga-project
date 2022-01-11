import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo_nero_bandiera.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'

import { useProductsContext } from '../context/products_context'

const Nav = () => {
  const { openSidebar } = useProductsContext()

  return (
    <NavContainer className=''>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='ronga' />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.slice(1).map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: -20px;
    img {
      width: 250px;
      margin-left: -15px;
      margin-top: 25px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-black);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
    margin-rigth: -40px;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: right;

      margin-rigth: -40px;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-black);
        font-size: 1rem;
        font-family: Libre-Baskerville;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 3px solid var(--clr-granata);
        }
      }
    }
  }
`

export default Nav
