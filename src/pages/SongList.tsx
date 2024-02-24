import { RootState } from '../app/store';
import { fetchSongs } from '../app/actions/songsActions';
import Spinner from "../components/Spinner";
import SongDetails from "../components/SongDetails";
import SongForm from '../components/SongForm';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useEffect, useState } from 'react';

const SongList: React.FC = () => {
    const dispatch = useAppDispatch();
    const { songs } = useAppSelector((state: RootState) => state.songs);
    const [songDetailsLoading, setSongDetailsLoading] = useState<boolean>(true);

    useEffect(() => {
        dispatch(fetchSongs());
    }, [dispatch, songs]);

    useEffect(() => {
        if (songs.length > 0) {
            setSongDetailsLoading(false);
        }
    }, [songs]);

    if (songDetailsLoading) {
        return <Spinner />;
    }

    const reversedSongs = [...songs].reverse();

    return (
        <div className="home">
            <div className="songs">
                {reversedSongs.map((song, index) => (
                    <SongDetails song={song} key={index} />
                ))}
            </div>
            <SongForm />
        </div>
    );
};

export default SongList;





