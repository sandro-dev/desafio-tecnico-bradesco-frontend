import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Quicksand;
      font-size: 16px;
      background: #f5f5f5;
      color: #b31634;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: Quicksand;
      font-weight: 700;
    }

    h1 { font-size: 32px;}
    h2 { font-size: 16px;}
    h3 { font-size: 12px; font-weight: 300; }

    button {
      cursor: pointer;
    }
`;
