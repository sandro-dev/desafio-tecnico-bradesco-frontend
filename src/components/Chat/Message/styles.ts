import styled, { keyframes } from 'styled-components';

const fade = keyframes`
	from {
    opacity: 0;
    transform: translateX(-10px);
    }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  .message-left,
  .message-right {
    width: 260px;
    margin: 30px auto;
    border-radius: 15px;
    color: #3d3d4d;
    padding: 10px;
    text-align: center;
    font-weight: 700;
    font-family: Quicksand;
    position: relative;
    overflow-wrap: anywhere;

    animation: ${fade} 0.5s linear;
  }

  .message-left {
    background: #ff7675;
  }

  .message-right {
    background: #bdc3c7;
  }

  .speech-right:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 15px solid transparent;
    border-right: 15px solid #bdc3c7;
    border-top: 15px solid #bdc3c7;
    border-bottom: 15px solid transparent;
    right: 10px;
    bottom: -20px;
  }

  .speech-left:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 15px solid #ff7675;
    border-right: 15px solid transparent;
    border-top: 15px solid transparent;
    border-bottom: 15px solid #ff7675;
    left: 10px;
    top: -15px;
  }
`;
