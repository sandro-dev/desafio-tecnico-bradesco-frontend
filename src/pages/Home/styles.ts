import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background: #fff;
  max-width: 900px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 32px;
`;

export const Content = styled.div`
  padding: 30px;

  h1,
  h2,
  p {
    margin: 10px 0;
  }

  p {
    color: #333;
  }

  div {
    display: flex;
    align-items: center;

    strong {
      font-family: Quicksand;
      font-weight: bold;
      font-size: 22px;
    }

    button {
      background: #b31634;
      padding: 16px;
      border-radius: 50%;
      margin: 20px;
    }
  }
`;
