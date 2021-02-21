import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: -20px;
`;

export const Content = styled.div`
  .message {
    width: 260px;
    margin: 20px auto;
    border-radius: 15px;
    background: #fddede;
    color: #333;
    padding: 10px;
    text-align: center;
    font-weight: 700;
    font-family: Quicksand;
    position: relative;
  }

  .speech-right:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 15px solid #fddede;
    border-right: 15px solid transparent;
    border-top: 15px solid #fddede;
    border-bottom: 15px solid transparent;
    right: -16px;
    top: 0px;
  }

  .speech-left:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 15px solid transparent;
    border-right: 15px solid #fddede;
    border-top: 15px solid #fddede;
    border-bottom: 15px solid transparent;
    left: -16px;
    top: 0px;
  }
`;
