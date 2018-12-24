import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'

import Logo from './Logo'
import NavLink from './NavLink'
import Sandwich from './Sandwich'
import './Nav.css'

const AccessibleLink = ({ alt, children, ...props }) => (
  <Link alt={alt} aria-label={alt} {...props}>
    {children}
  </Link>
)

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='Nav'>
      <div className='Nav--Container container'>
        <Sandwich handleOpen={() => setOpen(true)} />
        <AccessibleLink alt='Link to Home' className='Link' to='/'>
          <Logo />
        </AccessibleLink>
        <div className='Nav--Desktop'>
          <NavLink to='/gallery/' exact>
            Галерея
          </NavLink>
          <NavLink to='/benefits/' exact>
            Почему мы
          </NavLink>
          <NavLink to='/blog/' exact>
            Новости
          </NavLink>
          <NavLink to='/contact/' exact>
            Контакты
          </NavLink>
        </div>
      </div>
      <Drawer
        className='Nav--Drawer'
        variant='temporary'
        anchor='left'
        open={open}
        transitionDuration={{ enter: 100, exit: 100 }}
        onBlur={() => setOpen(false)}
      >
        <AccessibleLink alt='Link to Home' className='Link' to='/'>
          <Logo />
        </AccessibleLink>
        <Divider />
        <NavLink to='/gallery/' exact>
          Галерея
        </NavLink>
        <NavLink to='/benefits/' exact>
          Почему мы
        </NavLink>
        <NavLink to='/blog/' exact>
          Новости
        </NavLink>
        <NavLink to='/contact/' exact>
          Контакты
        </NavLink>
        <Divider />
      </Drawer>
    </nav>
  )
}

export default Nav
