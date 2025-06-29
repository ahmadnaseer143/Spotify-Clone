import { Album } from "../models/album.model.js";
export const getAllAlbums = async (req, res, next) => {
  try {
    const albums = Album.find();
    res.status(200).json(albums);
  } catch (error) {
    console.log("Error in album controller getAllAlbums");
    next(error);
  }
};

export const getAlbumsById = async (req, res, next) => {
  try {
    const { albumId } = req.params;
    const album = await Album.findById(albumId).populate("songs");

    if (!album) {
      return res.status(404).json({ message: "Album not founf" });
    }

    res.status(200).json(album);
  } catch (error) {
    console.log("Error in album controller getAlbums by id");
    next(error);
  }
};
