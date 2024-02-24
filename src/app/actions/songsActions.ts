import { createAction } from '@reduxjs/toolkit';
import { Song } from '../types/types';

export const fetchSongs = createAction('FETCH_SONGS');
export const fetchOverallStatistics = createAction('FETCH_OVERALL_STATISTICS');
export const addSong = createAction<Song>('ADD_SONG');
export const updateSong = createAction<Song>('UPDATE_SONG');
export const deleteSong = createAction<string>('DELETE_SONG');
export const setSongs = createAction<Song>('SET_SONGS');

