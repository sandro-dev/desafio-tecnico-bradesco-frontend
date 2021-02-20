import styled from 'styled-components';

export const Container = styled.div`
  width: 330px;
  height: 420px;
  background: transparent;
  border-radius: 20px;
  border-top-right-radius: 50px;

  box-shadow: rgba(0, 0, 0, 35%) 0px 20px 20px 0px;
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;
`;

export const Header = styled.header`
  height: 60px;
  background: #f88f8f;
  background: -webkit-linear-gradient(left, #f88f8f, #c30826);

  border-top-left-radius: 10px;
  border-top-right-radius: 50px;

  img {
    max-height: 50px;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    margin: 5px 15px;
  }
`;

export const Content = styled.section`
  background: #fff;
  flex: 1;
  min-height: 250px;
  height: 80%;
  padding: 30px 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Footer = styled.footer`
  background: transparent;
  display: flex;

  textarea {
    width: 100%;
    background: #f5f5f5;
    color: #222d38;
    padding: 8px 10px 0 10px;

    border-bottom-left-radius: 10px;
    resize: none;
    overflow: hidden;
  }

  button {
    width: 80px;
    height: 40px;
    background: #c30826;
    color: #fff;

    border-bottom-right-radius: 10px;
  }
`;
