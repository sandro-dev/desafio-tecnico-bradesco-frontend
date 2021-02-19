import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-bradesco-seguros.svg';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} width="25%" alt="Bradesco Seguros" />
        <nav>
          <NavLink to="/" activeClassName="activeLink">
            Home
          </NavLink>
          <NavLink to="#" activeClassName="activeLink">
            Seguro Auto
          </NavLink>
          <NavLink to="#" activeClassName="activeLink">
            Seguro Residencial
          </NavLink>
          <NavLink to="#" activeClassName="activeLink">
            Seguro Viagens
          </NavLink>
          <NavLink to="/about" activeClassName="activeLink">
            Sobre
          </NavLink>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
