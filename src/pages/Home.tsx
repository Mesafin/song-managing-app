/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [showContent, setShowContent] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setShowContent(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

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
