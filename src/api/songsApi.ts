import axios from 'axios';
import { Song, OverallStatistics } from '../app/types/types';
import { API_URL } from '../app/constants';

export const fetchSongsApi = async (): Promise<Song[]> => {
  try {
    const response = await axios.get(`${API_URL}/songs`);
    // console.log(response.data.data)
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch songs');
  }
};

export const fetchOverallStatisticsApi = async (): Promise<OverallStatistics> => {
  try {
    const response = await axios.get(`${API_URL}/songs/overall`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch overall statistics');
  }
};

export const addSongApi = async (newSong: Song): Promise<Song> => {
  try {
    const response = await axios.post(`${API_URL}/songs`, newSong);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add song');
  }
};

export const updateSongApi = async (updatedSong: Song): Promise<Song> => {
  try {
    const response = await axios.put(`${API_URL}/songs/${updatedSong._id}`, updatedSong);
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to update song');
  }
};

export const deleteSongApi = async (songId: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/songs/${songId}`);
  } catch (error) {
    throw new Error('Failed to delete song');
  }
};

