
export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OverallStatistics {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  albumsCount: AlbumCount[];
  artistsCount: ArtistsCount[];
  genresCount: GenreCount[];
  songsInEachGenre: SongsPerGenre[];
  artistsAlbumsCount: ArtistAlbumCount[];
  songsInEachAlbum: AlbumCount[];
  artistsSongsCount: ArtistSongsCount[];
}

interface GenreCount {
  _id: string;
  count: number;
}

interface ArtistAlbumCount {
  _id: {
    artist: string;
    album: string;
  };
  count: number;
}
interface ArtistSongsCount {
  _id: {
    artist: string;
    album: string;
  };
  count: number;
}

interface AlbumCount {
  _id: string;
  count: number;
}
interface ArtistsCount {
  _id: string;
  count: number;
}
interface SongsPerGenre {
  _id: string;
  count: number;
}
