import styled, { css } from 'styled-components';

interface ChatProps {
  isClosed?: boolean;
}

export const Container = styled.div<ChatProps>`
  width: 330px;
  height: 420px;
  background: #000;
  border-radius: 20px;
  border-top-right-radius: 50px;

  box-shadow: rgba(0, 0, 0, 35%) 0px 20px 20px 0px;
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;

  ${props =>
    props.isClosed &&
    css`
      box-shadow: none;
      background: none;
    `}
`;

export const Header = styled.header<ChatProps>`
  width: 330px;
  height: 60px;

  background: #f88f8f;
  background: -webkit-linear-gradient(left, #f88f8f, #c30826);
  border-top-left-radius: 10px;
  border-top-right-radius: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > button {
    background: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 30px;
  }

  img {
    max-height: 50px;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    margin: 5px 15px;
  }

  ${props =>
    props.isClosed &&
    css`
      position: fixed;
      bottom: 0;
    `}
`;

export const Content = styled.section<ChatProps>`
  background: #fff;
  flex: 1;
  height: 350px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 30px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
  }

  ${props =>
    props.isClosed &&
    css`
      display: none;
    `}
`;

export const Footer = styled.footer<ChatProps>`
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

  ${props =>
    props.isClosed &&
    css`
      display: none;
    `}
`;
