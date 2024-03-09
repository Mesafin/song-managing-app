/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RootState } from '../app/store';
import { fetchSongs } from '../app/actions/songsActions';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const { songs } = useAppSelector((state: RootState) => state.songs);
    const [loading, setLoading] = useState<boolean>(true);
    const [showContent, setShowContent] = useState<boolean>(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchSongs());
            setLoading(false);
            setShowContent(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [dispatch, songs]);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div
                    css={css`
                        width: 100%;
                        height: 100vh;
                        margin: 15% auto;
                    `}
                >
                    {showContent && (
                        <div
                        css={css`
                        text-align: center;
                    `}>
                            <h2>Welcome To Song Managing App</h2>
                            <Link to='/song-list'>
                                <button>Let's Start</button>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Home;
