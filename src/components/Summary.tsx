/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaChevronRight } from "react-icons/fa";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { Link } from "react-router-dom";

const Summary: React.FC = () => {
  const songs = useAppSelector((state: RootState) => state.songs.songs);


  return (
    <div>
      {songs && (
        <>
          <div
            css={css`
              margin-top: 30px;
            `}
          >
            <div className="song-details">
              <p>
                Total Songs: {songs.length}
              </p>
              <div
                css={css`
                  margin-top: 10px;
                `}
              >
                <Link to="/statistics">
                  <button>
                    {" "}
                    <FaChevronRight
                      css={css`
                        margin-top: 2px;
                      `}
                    />{" "}
                    Get more stats
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Summary;
