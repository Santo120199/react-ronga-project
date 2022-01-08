import React from 'react'
import logo from '../assets/logo_nero_bandiera.svg'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'
import styled from 'styled-components'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} alt='' className='logo' />
          <button className='close-btn' type='button' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  aside {
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 1.8rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 50px;
    transform: scale(2.5);
    margin-left: 20px;
  }

  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: center;
    font-size: 1.25rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-black);
    transition: var(--transition);
    letter-spacing: var(--spacing);
    font-family: Gotham-Book;
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    border-bottom: 3px solid var(--clr-granata);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--background);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
    background-color: var(--background);
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
