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
          <NavLink to="/home" activeClassName="activeLink">
            Home
          </NavLink>
          <NavLink to="/seguro-auto" activeClassName="activeLink">
            Seguro Auto
          </NavLink>
          <NavLink to="/seguro-residencial" activeClassName="activeLink">
            Seguro Residencial
          </NavLink>
          <NavLink to="/seguro-viagem" activeClassName="activeLink">
            Seguro Viagem
          </NavLink>
          <NavLink to="/sobre" activeClassName="activeLink">
            Sobre
          </NavLink>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
