/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React from 'react';

const ping = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(2);
    opacity: 1;
  }
`;

const Spinner: React.FC = () => {
  return (
    <div
      css={css`
        width: 4rem;
        height: 4rem;
        margin: 2rem;
        border-radius: 9999px;
        background-color: #4299e1;
        margin: 15% auto;
        animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
      `}
    ></div>
  );
};

export default Spinner;
