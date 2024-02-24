import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../types/types';

interface SongsState {
  songs: Song[];
  loading: boolean;
}

const initialState: SongsState = {
  songs: [],
  loading: false,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setSongs(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    addSong(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
      state.loading = false;
    },
    updateSong(state, action: PayloadAction<Song>) {
      const index = state.songs.findIndex(song => song._id === action.payload._id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.loading = false;
    },
    deleteSong(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter(song => song._id !== action.payload);
      state.loading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setSongs, addSong, updateSong, deleteSong, setLoading } = songsSlice.actions;

export default songsSlice.reducer;

