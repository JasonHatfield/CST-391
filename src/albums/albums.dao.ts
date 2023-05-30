import { OkPacket} from "mysql";
import { execute} from "../services/mysql.connector";
import { Album } from "./albums.model";
import { albumQueries } from "./albums.queries";

/**
 * This function accepts an 'albumId' and then executes the appropriate SQL query 
 * to fetch the album data from the database. The result is returned as a promise, 
 * which is then resolved in the controller.
 */
export const readAlbums = async () => {
    return execute<Album[]>(albumQueries.readAlbums, []);
};

export const readAlbumsByArtist = async (search: string) => {
    return execute<Album[]>(albumQueries.readAlbumsByArtist, [search]);
};

export const readAlbumsByArtistSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Album[]>(albumQueries.readAlbumsByArtistSearch, [search]);
};

export const readAlbumsByDescriptionSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Album[]>(albumQueries.readAlbumsByDescriptionSearch, [search]);
};

export const readAlbumsByAlbumId = async (albumId: number) => {
    return execute<Album[]>(albumQueries.readAlbumsById, [albumId]);
};

export const createAlbum = async (album: Album) => {
    return execute<OkPacket>(albumQueries.createAlbum,
        [album.title, album.artist, album.description, album.year, album.image]);
};

export const updateAlbum = async (album: Album) => {
    return execute<OkPacket>(albumQueries.updateAlbum,
        [album.title, album.artist, album.year, album.image, album.description, album.albumId]);
};

export const deleteAlbum = async (albumId: number) => {
    return execute<OkPacket>(albumQueries.deleteAlbum, [albumId]);
};