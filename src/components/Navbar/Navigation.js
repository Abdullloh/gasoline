import React from 'react'
import {NavLink} from 'react-router-dom'
import {StyledNavUl} from './NavUl.style'

function Navigation() {
  return (
    <StyledNavUl>
         <nav>
              <div>
                <NavLink className="nav_link" to="/">
                  Главная
                </NavLink>
              </div>
              <div>
                <NavLink className="nav_link" to="/about">
                  О компании
                </NavLink>
              </div>
              <div>
                <NavLink className="nav_link" to="/partner">
                  Для партнеров
                </NavLink>
              </div>
              <div>
                <NavLink className="nav_link" to="/service">
                  Покупателям
                </NavLink>
              </div>
            </nav>
    </StyledNavUl>
  )
}

export default Navigation