import { takeLeading, takeLatest, put, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchSongsApi, addSongApi, updateSongApi, deleteSongApi, fetchOverallStatisticsApi } from '../../api/songsApi';
import { addSong, updateSong, deleteSong } from '../actions/songsActions';
import { FETCH_SONGS, ADD_SONG, UPDATE_SONG, DELETE_SONG, FETCH_OVERALL_STATISTICS } from '../constants';
import { OverallStatistics, Song } from '../types/types';
import { setOverallStatistics } from '../reducers/overallReducer';
import { setSongs } from '../reducers/songsReducer';




function* addSongSaga(action: PayloadAction<Song>) {
  try {
    const newSong: Song = yield call(addSongApi, action.payload);
    yield put(addSong(newSong));
  } catch (error: any) {
    console.error('Error adding song:', error.message);
  }
}

function* updateSongSaga(action: PayloadAction<Song>) {
  try {
    const updatedSong: Song = yield call(updateSongApi, action.payload);
    yield put(updateSong(updatedSong));
  } catch (error: any) {
    console.error('Error updating song:', error.message);
  }
}

function* deleteSongSaga(action: PayloadAction<string>) {
  try {
    // console.log("delete", action.payload)
    yield call(deleteSongApi, action.payload);
    yield put(deleteSong(action.payload));
  } catch (error: any) {
    console.error('Error deleting song:', error.message);
  }
}

function* fetchSongsSaga() {
  try {
    const songs: Song[] = yield call(fetchSongsApi);
    yield put(setSongs(songs));
  } catch (error: any) {
    console.error(error.message);
  }
}


function* fetchOverallStatisticsSaga() {
  try {
    const overallStatistics: OverallStatistics = yield call(fetchOverallStatisticsApi);
    yield put(setOverallStatistics(overallStatistics));
  } catch (error: any) {
    console.error('Error fetching overall statistics:', error.message);
  }
}

export default function* songsSaga() {
  yield takeLatest(FETCH_SONGS, fetchSongsSaga);
  yield takeLatest(FETCH_OVERALL_STATISTICS, fetchOverallStatisticsSaga);
  yield takeLeading(ADD_SONG, addSongSaga);
  yield takeLeading(UPDATE_SONG, updateSongSaga);
  yield takeLeading(DELETE_SONG, deleteSongSaga);
}
