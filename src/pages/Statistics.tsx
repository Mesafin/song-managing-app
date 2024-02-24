/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FcMusic } from "react-icons/fc";
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { RootState } from '../app/store';
import { fetchOverallStatistics } from '../app/actions/songsActions';
import { OverallStatistics } from '../app/types/types';

interface StatisticsProps {
  overallStatistics: OverallStatistics | null;
  fetchOverallStatistics: () => void;
}

const Statistics: React.FC<StatisticsProps> = ({ overallStatistics, fetchOverallStatistics }) => {
  useEffect(() => {
    fetchOverallStatistics();
  }, [fetchOverallStatistics]);

  return (
    <div className="statisticsMobile"
      css={css`
        margin: 0 auto;
      `}>
      <div className="song-details">
             {overallStatistics && (
          <>
            <div
              css={css`
                border: 0.5px solid #ddd;
                padding: 20px;
                margin: 0 auto;
                display: flex;
              `}
            >
              <FcMusic className='d-none' style={{ height: "auto", width: "80px" }} />

              <table
                className="statisticsMobile"
                css={css`
                  border-collapse: collapse;

                  margin: 0 auto;
                `}
              >
                <tbody>
                  <tr
                    css={css`
                      font-weight: bold;
                      margin-bottom: 5px;
                    `}
                  >
                    <td style={{ width: "50%" }}>Summarized By</td>
                    <td style={{ width: "30%" }}>Total</td>
                  </tr>
                  <tr>
                    <td>Total Songs</td>
                    <td>{overallStatistics.totalSongs}</td>
                  </tr>
                  <tr>
                    <td>Total Artists</td>
                    <td>{overallStatistics.artistsAlbumsCount.length}</td>
                  </tr>
                  <tr>
                    <td>Total Albums</td>
                    <td>{overallStatistics.artistsAlbumsCount.length}</td>
                  </tr>
                  <tr>
                    <td>Total Genres</td>
                    <td>{overallStatistics.genresCount.length}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              css={css`
                border: 0.5px solid #ddd;
                padding: 20px;
                margin: 5% auto;
                display: flex;
              `}
            >
              <FcMusic className='d-none' style={{ height: "auto", width: "80px" }} />
              <table
                className="statisticsMobile"
                css={css`
                  border-collapse: collapse;
                  margin: 0 auto;
                `}
              >
                <tbody>
                  <tr
                    css={css`
                      font-weight: bold;
                      margin-bottom: 5px;
                    `}
                  >
                    <td style={{ width: "50%" }}>Genre</td>
                    <td style={{ width: "30%" }}>Total Songs</td>
                  </tr>
                  {overallStatistics.songsInEachGenre.map((genre, index) => (
                    <tr key={index}>
                      <td>{genre._id}</td>
                      <td>{genre.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              css={css`
                border: 0.5px solid #ddd;
                padding: 20px;
                margin: 5% auto;
                display: flex;
              `}
            >
              <FcMusic className='d-none' style={{ height: "auto", width: "80px" }} />
              <table
                className="statisticsMobile"
                css={css`
                  border-collapse: collapse;
                  margin: 0 auto;
                `}
              >
                <tbody>
                  <tr
                    css={css`
                      font-weight: bold;
                      margin-bottom: 5px;
                    `}
                  >
                    <td style={{ width: "50%" }}>Album Name</td>
                    <td style={{ width: "30%" }}>Total Songs</td>
                  </tr>
                  {overallStatistics.songsInEachAlbum.map((album, index) => (
                    <tr key={index}>
                      <td>{album._id}</td>
                      <td>{album.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              css={css`
                border: 0.5px solid #ddd;
                padding: 20px;
                margin: 5% auto;
                display: flex;
              `}
            >
              <FcMusic className='d-none' style={{ height: "auto", width: "80px" }} />
              <table
                className="statisticsMobile"
                css={css`
                  border-collapse: collapse;
                  margin: 0 auto;
                `}
              >
                <tbody>
                  <tr
                    css={css`
                      font-weight: bold;
                      margin-bottom: 5px;
                    `}
                  >
                    <td style={{ width: "35%" }}>Artist Name</td>
                    <td style={{ width: "35%" }}>Total Albums</td>
                    <td style={{ width: "20%" }}>Total Songs</td>
                  </tr>
                  {overallStatistics?.artistsAlbumsCount.map(
                    ({ _id: { artist, album }, count }) => (
                      <tr key={`${artist}-${album}`}>
                        <td>{artist}</td>
                        <td>{count}</td>
                        <td>
                          {overallStatistics?.artistsSongsCount.find(
                            ({ _id }) => _id.artist === artist
                          )?.count || 0}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
        <div style={{ marginBottom: '5%', width: '80%' }}>
          <Link to="/song-list">
            <button style={{ width: '100px' }}>
              <IoArrowBack style={{ marginTop: '2px' }} /> Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  overallStatistics: state.overall.overallStatistics,
});

const mapDispatchToProps = {
  fetchOverallStatistics,
};

export const ConnectedStatistics =  connect(mapStateToProps, mapDispatchToProps)(Statistics);
