/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { RiAccountPinCircleFill } from "react-icons/ri";

const Navbar: React.FC = () => {
  return (
    <header>
      <div
        className="container"
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Link to="/">
          <img
            src="/song-logo.png"
            alt="song-logo"
            css={css`
              width: 50px;
            `}
          />
        </Link>
          <a  css={css`
              font-weight: bold;
              color: #1AAC83;
            `} 
            target='_blank' rel="noopener noreferrer"
            href="https://mesafin.github.io/Mesafint.tech/">

        <div 
        css = { 
          css`display:flex;
          align-items: center;`
        }>
          <RiAccountPinCircleFill 
            css={css`
              width: 20px;
              height: 20px;
              margin-right: 0.5rem;
              color: gray;
            `}
          />
          <p
           
          >
          
            By Mesafint M.
          </p>
        </div>
            </a>
      </div>
    </header>
  );
};

export default Navbar;
