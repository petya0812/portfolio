import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='Navbar navbar navbar-expand-lg navbar-light bg-light p-2'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          Главная
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse flex-row-reverse'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav justify-content-center align-items-center'>
            <a
              className='nav-item nav-link'
              href='https://shop-28520.web.app/'
              target='blank'
            >
              Интернет-магазин
            </a>
            <NavLink className='nav-item nav-link' to='/convertor'>
              Конвертор
            </NavLink>
            <NavLink className='nav-item nav-link' to='/todo'>
              Задачник
            </NavLink>
            <NavLink className='nav-item nav-link' to='/form'>
              Формы
            </NavLink>
            <NavLink className='nav-item nav-link' to='/tic-tac-toe'>
              Крестики-нолики
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
