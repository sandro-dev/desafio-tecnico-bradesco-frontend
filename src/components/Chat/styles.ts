import styled from 'styled-components';

export const Container = styled.div`
  width: 330px;
  height: 450px;
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
  height: 350px;
  padding: 30px 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Footer = styled.footer`
  background: transparent;
  display: flex;
  flex-direction: row;
  width: 330px;

  input {
    width: 258px;
    height: 40px;
    background: #f5f5f5;
    color: #222d38;
    padding: 2px 5px 0 25px;
    font-size: 16px;

    border-bottom-left-radius: 10px;
    resize: none;
    overflow: hidden;
  }

  button {
    flex: 1;
    padding: 0 20px;
    height: 40px;
    background: #f5f5f5;
    color: #fff;

    border-bottom-right-radius: 10px;
  }

  form {
    display: flex;
  }
`;
