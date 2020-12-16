import styled from 'styled-components';
import { Container } from '../../globalStyle';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  background: #aaa;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;
