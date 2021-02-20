import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  margin: 20px auto;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      margin: 0 10px;
      padding-right: 30px;
      border-right: 1px solid #eee;
    }

    a:first-of-type {
      margin-left: 20px;
    }

    a {
      color: #999;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 15px;
      padding: 0 10px;
      text-decoration: none;

      &:hover {
        color: #c30c30;
      }
    }
  }

  .activeLink {
    color: #c30c30;
  }
`;
